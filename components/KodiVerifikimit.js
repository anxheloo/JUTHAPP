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
  Alert,
  ActivityIndicator,
  Modal,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";
import NetInfo from "@react-native-community/netinfo";
import InternetPopup from "./InternetPopup";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import GigaMarketScreenHeader from "./GigaMarketScreenHeader";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

const KodiVerifikimit = ({ navigation, route }) => {
  const [showInternetPopup, setShowInternetPopup] = useState(false);
  const [personalCode, setPersonalCode] = useState("");
  const [timer, setTimer] = useState(180);
  const [isThisYourCode, setIsThisYourCode] = useState(false);
  const [loader, setLoader] = useState(false);
  const [timerExpired, setTimerExpired] = useState(false); // New state to track timer expiration
  const [verificationCode, setVerificationCode] = useState("");

  const { phoneNumber } = route.params;

  useEffect(() => {
    if (timer > 0) {
      const myTimer = setInterval(() => {
        setTimer((prevTimer) => (prevTimer > 0 ? prevTimer - 1 : 0));
      }, 1000);

      return () => clearInterval(myTimer);
    } else {
      setTimerExpired(true);
    }
  }, [timer]);

  const handleVerifyEmail = async () => {
    try {
      setLoader(true);
      // Verify email with the provided verification code
      const response = await axios.post(
        "http://192.168.1.236:3000/api/emailVerification",
        {
          phonenumber: phoneNumber,
          verificationCode: personalCode,
        }
      );
      console.log(response.data);
      if (response.data.message === "Email verification successful") {
        navigation.navigate("Main");
      }
    } catch (error) {
      console.error("Error verifying email:", error);
      Alert.alert("Error", "An error occurred. Please try again later.");
    } finally {
      setLoader(false);
    }
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

        <View>
          <View style={styles.headerContainer}>
            <TouchableOpacity
              style={styles.headerTextLeft}
              onPress={() => {
                navigation.goBack();
              }}
            >
              <AntDesign name="left" size={24} color="white" />
              <Text style={styles.gigamarketText}>Kthehu</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.logoContainer}>
          <Text style={{ color: "white", fontSize: 20, padding: 10 }}>
            Kodi i Verifikimit
          </Text>
        </View>

        <View>
          <View>
            <Text style={styles.text}>
              Vendos kodin personal te verifikimit
            </Text>

            <View
              style={{
                flexDirection: "row",
                paddingHorizontal: 10,
                justifyContent: "space-between",
              }}
            >
              <TextInput
                // ref={inputRef}
                style={styles.input}
                keyboardType="phone-pad"
                value={personalCode}
                onChangeText={(text) => {
                  setPersonalCode(text);
                }}
                // onPressIn={onClickMyButton}
                maxLength={14}
              />

              <View style={styles.timer}>
                {timerExpired ? (
                  <Ionicons name="refresh-outline" size={24} color="black" />
                ) : (
                  <Text style={styles.timerText}>{timer}</Text>
                )}
              </View>
            </View>
          </View>

          <View style={{ alignItems: "center" }}>
            <TouchableOpacity
              style={styles.buttonContainer}
              onPress={() => {
                handleVerifyEmail();
              }}
            >
              {loader === false ? (
                <Text style={styles.buttonText}>VAZHDO</Text>
              ) : (
                <ActivityIndicator></ActivityIndicator>
              )}
            </TouchableOpacity>
          </View>
        </View>

        {/* Show the InternetPopup when showInternetPopup is true */}
        {showInternetPopup && <InternetPopup />}
      </LinearGradient>
    </TouchableWithoutFeedback>
  );
};

const windowHeight = Dimensions.get("window").height;
const windowWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    // alignItems: "center",
    padding: 10,
  },
  logoContainer: {
    alignItems: "center",
    justifyContent: "center",
    height: windowHeight / 2,
  },
  formContainer: {
    width: "80%",
    flex: 2,
  },
  input: {
    height: 52,
    paddingLeft: 20,
    backgroundColor: "white",
    borderRadius: 16,
    fontSize: 20,
    width: windowWidth / 1.5,
    // flex: 1,
  },
  buttonContainer: {
    backgroundColor: "#25a8dd", // Set your desired button background color
    paddingVertical: 12,
    alignItems: "center",
    borderRadius: 16,
    marginTop: windowHeight * 0.15,
    width: windowWidth / 1.5,
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
    paddingHorizontal: 10,
  },

  centeredContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  popUpContainer: {
    backgroundColor: "white",
    borderRadius: 20,
    paddingVertical: 25,
    paddingHorizontal: 20,
    alignItems: "center",
    justifyContent: "space-between",
    width: "85%",
    height: windowHeight / 2 + 50,
  },

  timer: {
    height: 52,
    width: 52,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "orange",
    borderRadius: 15,
  },
  timerText: {
    color: "white",
    fontSize: 20,
  },

  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 10,
    width: "100%",
    height: 50,
    // backgroundColor: "red",
    // marginTop: 30,
  },

  headerTextLeft: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    padding: 5,
  },

  gigamarketText: {
    color: "white",
    fontSize: 23,
  },

  headerRight: {
    width: "40%",
    maxWidth: 170,
    backgroundColor: "rgba(255,255,255,0.4)",
    borderRadius: 10,
  },

  headerRightTouchable: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 5,
  },

  headerRightImage: {
    width: 15,
    height: 15,
    borderRadius: 20,
  },

  rightSideText: {
    color: "white",
  },
});

export default KodiVerifikimit;