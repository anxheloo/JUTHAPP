import React, { useState, useEffect, useRef } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  TouchableWithoutFeedback,
  Keyboard,
  Dimensions,
  Modal,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";
import NetInfo from "@react-native-community/netinfo";
import { MaterialIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

const LoginPage = ({ navigation }) => {
  const inputRef = useRef(null);
  const defaultPhoneNumber = "+355 6 _ _ _ _ _ _ _ _";
  const [phoneNumber, setPhoneNumber] = useState(defaultPhoneNumber);
  const [numberChecker, setNumberChecker] = useState("");
  const [isInternetConnected, setIsInternetConnected] = useState(true);
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener((state) => {
      setIsInternetConnected(state.isConnected);
      setShowPopup(!state.isConnected);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const onClickMyButton = () => {
    setPhoneNumber("+355 6");
  };

  const handlePhoneNumberChange = (text) => {
    const formattedNumber = text.replace(/\D/g, ""); // Remove all non-digit characters
    // .slice(0, 8); // Limit the length to 8 digits
    setPhoneNumber(text);
  };

  const handleSubmit = async () => {
    if (phoneNumber.length < 14) {
      setNumberChecker("Numri shume i shkurter");
      return;
    }

    if (phoneNumber === defaultPhoneNumber) {
      setNumberChecker("Shkruaj Numrin!");
      return;
    }

    setNumberChecker(""); // Clear the warning message

    const netInfoState = await NetInfo.fetch();
    if (!netInfoState.isConnected) {
      setShowPopup(true);
    } else {
      setShowPopup(false); // Hide the popup if internet is connected
      navigation.navigate("Main");
    }

    // navigation.navigate("Main");
  };

  const dismissKeyboard = () => {
    Keyboard.dismiss();
  };

  return (
    <TouchableWithoutFeedback onPress={dismissKeyboard}>
      <LinearGradient
        style={styles.container}
        colors={[
          "#55e1ce",
          "#00cfe0",
          "#00bbf2",
          "#00a2fc",
          "#0083f4",
          "#4775ee",
          "#6964e5",
          "#8451d7",
          "#9952db",
          "#d555e1",
        ]}
      >
        <StatusBar style="auto"></StatusBar>
        {showPopup ? (
          <View style={styles.popUpContainer}>
            <Text
              style={{
                fontSize: 22,
                marginTop: 30,
                paddingHorizontal: 20,
                textAlign: "center",
              }}
            >
              MUNGON LIDHJA ME INTERNETIN. SIGUROHUNI QE TE KENI AKSES NE
              INTERNET.
            </Text>

            <AntDesign name="wifi" size={24} color="black" />
            <TouchableOpacity
              style={styles.provoPerseriButton}
              onPress={handleSubmit}
            >
              <Text style={styles.buttonText}>PROVO PERSERI</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.closeButton}
              onPress={() => setShowPopup(false)}
            >
              <MaterialIcons name="close" size={40} color="black" />
            </TouchableOpacity>
          </View>
        ) : (
          // Content when showPopup is false (internet connection available)
          <>
            <View style={styles.logoContainer}>
              <Image
                style={styles.image}
                source={require("../assets/images/unnamed.png")}
              ></Image>
            </View>
            <View style={styles.formContainer}>
              <View>
                <Text style={styles.text}>Vendos numrin e telefonit</Text>
                <TextInput
                  ref={inputRef}
                  style={styles.input}
                  keyboardType="phone-pad"
                  value={phoneNumber}
                  onChangeText={handlePhoneNumberChange}
                  onPressIn={onClickMyButton}
                  maxLength={14}
                />
              </View>

              <Text>{numberChecker}</Text>

              <View>
                <TouchableOpacity
                  style={styles.buttonContainer}
                  onPress={handleSubmit}
                >
                  <Text style={styles.buttonText}>HYR</Text>
                </TouchableOpacity>
              </View>
            </View>
          </>
        )}
      </LinearGradient>
    </TouchableWithoutFeedback>
  );
};

const windowHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },
  logoContainer: {
    marginBottom: 20,
    flex: 2,
    alignItems: "center",
    justifyContent: "center",
    marginTop: windowHeight * 0.1,
  },
  formContainer: {
    width: "80%",
    flex: 2,
  },
  input: {
    height: 52,
    padding: 10,
    paddingLeft: 20,
    backgroundColor: "white",
    borderRadius: 16,
    fontSize: 20,
  },
  buttonContainer: {
    backgroundColor: "#25a8dd", // Set your desired button background color
    paddingVertical: 12,
    alignItems: "center",
    borderRadius: 16,
    marginTop: windowHeight * 0.15,
  },
  buttonText: {
    color: "#FFF",
    fontSize: 25,
    fontWeight: "bold",
  },

  image: {
    width: 100,
    height: 100,
    margin: 20,
  },

  text: {
    color: "white",
    fontSize: 16,
    paddingBottom: 10,
  },

  popUpContainer: {
    backgroundColor: "white",
    borderRadius: 40,
    paddingVertical: 25,
    paddingHorizontal: 20,
    alignItems: "center",
    justifyContent: "space-between",
    height: "72%",
    width: "90%",
    position: "relative",
  },

  provoPerseriButton: {
    backgroundColor: "#25a8dd", // Set your desired button background color
    paddingVertical: 10,
    alignItems: "center",
    borderRadius: 16,
    width: "90%",
    // marginTop: windowHeight * 0.15,
  },

  closeButton: {
    position: "absolute",
    top: 5,
    right: 10,
    padding: 10,
  },
});

export default LoginPage;
