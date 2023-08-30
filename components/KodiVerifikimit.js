import React, { useState, useEffect, useRef } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
  Dimensions,
  Alert,
  ActivityIndicator,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";
import InternetPopup from "./InternetPopup";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { CommonActions } from "@react-navigation/native";
import jwt_decode from "jwt-decode";

const KodiVerifikimit = ({ navigation, route }) => {
  const [showInternetPopup, setShowInternetPopup] = useState(false);
  const [personalCode, setPersonalCode] = useState("");
  const [timer, setTimer] = useState(180);
  const [loader, setLoader] = useState(false);
  const [timerExpired, setTimerExpired] = useState(false); // New state to track timer expiration
  const [personalCodeChecker, setPersonalCodeChecker] = useState(false);

  const insets = useSafeAreaInsets();

  const { phoneNumber, handleLogin } = route.params;

  useEffect(() => {
    if (timer > 0) {
      const myTimer = setInterval(() => {
        setTimer((prevTimer) => (prevTimer > 0 ? prevTimer - 1 : 0));
      }, 1000);

      return () => clearInterval(myTimer);
    } else {
      setTimerExpired(true);
      // Use setNativeProps to change disabled attribute
      // vazhdoBtnRef.current.setNativeProps({ disabled: true });
    }
  }, [timer]);

  // const handleBackButton = () => {
  //   // if (kthehuBtn.current) {
  //   //   navigation.replace("Login");
  //   // }
  //   return true; // Prevent default behavior
  // };

  // useEffect(() => {
  //   BackHandler.addEventListener("hardwareBackPress", handleBackButton);

  //   return () => {
  //     BackHandler.removeEventListener("hardwareBackPress", handleBackButton);
  //   };
  // }, []);

  const handleReloadCode = async () => {
    setPersonalCodeChecker(false);
    setTimerExpired(false);
    setTimer(180);
    try {
      // Call the handleLogin function passed from LoginPage
      handleLogin();
    } catch (error) {
      console.error("Error calling handleLogin:", error);
    }
  };

  const handleVerifyEmail = async () => {
    const formattedPhoneNumber = phoneNumber.replace(/\s/g, "");

    if (personalCode.length < 6) {
      setPersonalCodeChecker(true);
      return;
    }

    try {
      setLoader(true);
      const endpoint = "http://192.168.1.236:3000/api/emailVerification";
      const data = {
        phonenumber: formattedPhoneNumber,
        verificationCode: personalCode,
      };
      const response = await axios.post(endpoint, data);

      if (response.data.message === "Email verification successful") {
        await AsyncStorage.setItem(
          `user${response.data.userData._id}`,
          JSON.stringify(response.data.userData)
        );

        await AsyncStorage.setItem(
          "id",
          JSON.stringify(response.data.userData._id)
        );

        await AsyncStorage.setItem(
          "token",
          JSON.stringify(response.data.token)
        );

        // await AsyncStorage.setItem(
        //   "secret",
        //   JSON.stringify(response.data.secret)
        // );

        // const unixTimestamp = jwt_decode(response.data.token).exp;
        // Create a new Date object by multiplying the Unix timestamp by 1000
        // to convert it from seconds to milliseconds
        // const expirationDate = new Date(unixTimestamp * 1000);
        // // Now, you can format the date in a human-readable format
        // const formattedDate = expirationDate.toLocaleString();

        // console.log("Human-Readable Expiration Date:", formattedDate);
        // console.log("THis is date.now: ", Date.now() / 1000);

        // console.log("TRUE OR FALSE: ", formattedDate < Date.now() / 1000);

        // console.log("Human-Readable Expiration Date:", unixTimestamp);
        // console.log("THis is date.now: ", Date.now() / 1000);

        // console.log("TRUE OR FALSE: ", unixTimestamp < Date.now() / 1000);

        //This is the 1-Way to use to clear the navigation state so when i hit back in HomePage, it would not send me to LoginPage

        navigation.dispatch(
          CommonActions.reset({
            index: 0,
            routes: [{ name: "Main" }], // Make sure "Main" matches your MainComponent screen name
          })
        );

        // Show success message popup
        // Alert.alert("Login Successfully!", "You have successfully logged in.", [
        //   {
        //     text: "Ok",
        //     onPress: () => navigation.replace("Main"),
        //   },
        // ]);
      }
    } catch (error) {
      console.error("Error verifying email:", error);
      Alert.alert("Error", "An error occurred. Please try again later.");
    } finally {
      setLoader(false);
      setPersonalCode("");
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
        {/* <View style={[{ flex: 1 }, { paddingTop: insets.top }]}> */}

        <View style={styles.headerContainer}>
          <TouchableOpacity
            style={styles.headerTextLeft}
            onPress={() => {
              navigation.replace("Login");
            }}
          >
            <AntDesign name="left" size={24} color="white" />
            <Text style={styles.gigamarketText}>Kthehu</Text>
          </TouchableOpacity>
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

              {timerExpired ? (
                <TouchableOpacity
                  style={styles.timer}
                  onPress={handleReloadCode}
                >
                  <Ionicons name="refresh-outline" size={24} color="black" />
                </TouchableOpacity>
              ) : (
                <View style={styles.timer}>
                  <Text style={styles.timerText}>{timer}</Text>
                </View>
              )}
            </View>

            {personalCodeChecker ? (
              <View
                style={{
                  marginLeft: 12,
                  backgroundColor: "white",
                  width: windowWidth / 2,
                  borderRadius: 10,
                  marginTop: 10,
                }}
              >
                <Text
                  style={{
                    paddingHorizontal: 10,
                    color: "red",
                    fontWeight: "bold",
                  }}
                >
                  Kodi shume i shkurter!
                </Text>
              </View>
            ) : (
              <View></View>
            )}
          </View>

          <View style={{ alignItems: "center" }}>
            <TouchableOpacity
              style={styles.buttonContainer}
              onPress={() => {
                handleVerifyEmail();
              }}
              // ref={vazhdoBtnRef}
              disabled={timerExpired}
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
    padding: 10,
    // backgroundColor: "white",
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
    // position: "absolute",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 10,
    width: "100%",
    height: 50,
    // top: 45,
    // backgroundColor: "red",
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

  // headerRight: {
  //   width: "40%",
  //   maxWidth: 170,
  //   backgroundColor: "rgba(255,255,255,0.4)",
  //   borderRadius: 10,
  // },

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
