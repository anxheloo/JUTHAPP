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
import { CommonActions } from "@react-navigation/native";
import jwt_decode from "jwt-decode";
// import jwt from "jsonwebtoken";

const LoginPage = ({ navigation }) => {
  const inputRef = useRef(null);
  const defaultPhoneNumber = "+355 6 _ _ _ _ _ _ _ _";
  const [phoneNumber, setPhoneNumber] = useState(defaultPhoneNumber);
  const [numberChecker, setNumberChecker] = useState("");
  const [showInternetPopup, setShowInternetPopup] = useState(false); // New state for showing the InternetPopup
  const [loader, setLoader] = useState(false);
  const [isThisYourNumber, setIsThisYourNumber] = useState(false);

  // useEffect(() => {
  //   setPhoneNumber(defaultPhoneNumber);
  //   setNumberChecker("");
  //   setIsThisYourNumber(false);
  // }, []);

  useEffect(() => {
    const checkLoginStatus = async () => {
      try {
        const token = await AsyncStorage.getItem("token");
        // const secret = await AsyncStorage.getItem("secret");

        if (token) {
          // Decode the token to get the expiration timestamp (in seconds)
          const { exp } = jwt_decode(token);

          // Get the current timestamp (in seconds)
          const currentTimestamp = Math.floor(Date.now() / 1000);

          console.log("THIS IS EXP:", exp);
          console.log("THIS IS currentTimestamp:", currentTimestamp);

          if (exp > currentTimestamp) {
            // Token is not expired, navigate to the home page
            navigation.dispatch(
              CommonActions.reset({
                index: 0,
                routes: [{ name: "Main" }], // Redirect to the home page
              })
            );
          } else {
            // Token is expired, take appropriate actions
            console.log("Token has expired");

            // Remove the expired token
            await AsyncStorage.removeItem("token");

            // Optionally, you can also remove other user data
            const id = await AsyncStorage.getItem("id");
            const userId = `user${JSON.parse(id)}`;
            await AsyncStorage.multiRemove([userId, "id"]);

            // Navigate to the login page
            // navigation.replace("Login");
            navigation.dispatch(
              CommonActions.reset({
                index: 0,
                routes: [{ name: "Login" }], // Redirect to the "Login" page
              })
            );
          }
        } else {
          //token not found, show the login screen
        }
      } catch (error) {
        console.log("error", error);
      }
    };

    checkLoginStatus();
  }, []);

  // useEffect(() => {
  //   const checkLoginStatus = async () => {
  //     try {
  //       const token = await AsyncStorage.getItem("token");
  //       const secret = await AsyncStorage.getItem("secret");

  //       if (token) {
  //         jwt.verify(token, secret, async (err, decoded) => {
  //           if (err) {
  //             console.log("Error Verifying token: ", err);

  //             // Token is expired, take appropriate actions
  //             console.log("Token has expired");

  //             // Remove the expired token
  //             await AsyncStorage.multiRemove(["token", "secret"]);

  //             // Optionally, you can also remove other user data
  //             const id = await AsyncStorage.getItem("id");
  //             const userId = `user${JSON.parse(id)}`;
  //             await AsyncStorage.multiRemove([userId, "id"]);

  //             navigation.dispatch(
  //               CommonActions.reset({
  //                 index: 0,
  //                 routes: [{ name: "Login" }], // Redirect to the "Login" page
  //               })
  //             );
  //           } else {
  //             // Token is valid, you can access decoded data here
  //             console.log("Decoded JWT Data:", decoded);
  //             console.log("Expiration JWT :", decoded.exp);

  //             navigation.dispatch(
  //               CommonActions.reset({
  //                 index: 0,
  //                 routes: [{ name: "Main" }], // Redirect to the home page
  //               })
  //             );
  //           }
  //         });
  //       } else {
  //         //token not found, show the login screen
  //       }
  //     } catch (error) {
  //       console.log("error", error);
  //     }
  //   };

  //   checkLoginStatus();
  // }, []);

  const onClickMyButton = () => {
    setPhoneNumber("+355 6");
  };

  const handlePhoneNumberChange = (text) => {
    // const formattedNumber = text.replace(/\D/g, ""); // Remove all non-digit characters
    // .slice(0, 8); // Limit the length to 8 digits
    setPhoneNumber(text);
  };

  const dismissKeyboard = () => {
    Keyboard.dismiss();
  };

  const handleLogin = async () => {
    try {
      // Call the login function with the user's phone number
      const success = await login(phoneNumber);

      if (success) {
        console.log("This is phoneNumber from handleLogin", phoneNumber);
        // Navigate to the next page after successful login
        // setIsThisYourNumber(false);
        navigation.navigate("KodiVerifikimit", {
          phoneNumber: phoneNumber,
          handleLogin: handleLogin,
        });
      }
    } catch (error) {
      // Handle errors
      console.error("Login error:", error);
    }
  };

  const login = async (values) => {
    setLoader(true);
    const formattedPhoneNumber = values.replace(/\s/g, "");

    const netInfoState = await NetInfo.fetch();
    if (!netInfoState.isConnected) {
      setShowInternetPopup(true);
      return;
    }

    try {
      const endpoint = "http://192.168.1.236:3000/api/login";
      const data = {
        phonenumber: formattedPhoneNumber,
      };
      const response = await axios.post(endpoint, data);

      if (response.status === 200) {
        setLoader(false);
        // console.log("THIS is response.data: ", response.data);
        return true;
      } else {
        Alert.alert("Error Loggin in", "Please provide valid credentials", [
          {
            text: "Cancel",
            onPress: () => console.log(),
          },
          {
            text: "Continue",
            onPress: () => console.log(),
          },
          // { defaultIndex: 1 },
        ]);
        return false;
      }
    } catch (error) {
      console.log(error);

      Alert.alert(
        "Error",
        "Oops, Error loggin in try again with correct credentials",
        [
          {
            text: "Cancel",
            onPress: () => console.log(),
          },
          {
            text: "Continue",
            onPress: () => console.log(),
          },
          // { defaultIndex: 1 },
        ]
      );
      setPhoneNumber("+355 6");
      setIsThisYourNumber(false);
      return false;
    } finally {
      setIsThisYourNumber(false);
      setLoader(false);
    }
  };

  const hyrButton = async () => {
    if (phoneNumber.length < 14) {
      setNumberChecker("Numri shume i shkurter");
      return;
    }

    if (phoneNumber === defaultPhoneNumber) {
      setNumberChecker("Shkruaj Numrin!");
      return;
    }

    const netInfoState = await NetInfo.fetch();
    if (!netInfoState.isConnected) {
      setShowInternetPopup(true);
      return;
    }

    setNumberChecker("");

    setIsThisYourNumber(true);
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
              onPress={() => hyrButton()}
            >
              <Text style={styles.buttonText}>HYR</Text>
            </TouchableOpacity>

            <Text
              style={{ color: "white", textAlign: "center", padding: 10 }}
              onPress={() => {
                navigation.navigate("Registration");
              }}
            >
              Regjistrohu
            </Text>
          </View>
        </View>

        {/* Show the InternetPopup when showInternetPopup is true */}
        {showInternetPopup && <InternetPopup />}

        <Modal
          visible={isThisYourNumber}
          transparent
          animationType="fade"
          // style={{ height: 300, width: "80%" }}
        >
          <View style={styles.centeredContainer}>
            <View style={styles.popUpContainer}>
              <Text
                style={{
                  fontWeight: "bold",
                  fontSize: 24,
                  marginTop: 30,
                  paddingHorizontal: 20,
                  textAlign: "center",
                  color: "gray",
                }}
              >
                A eshte ky numri yt i telefonit?
              </Text>

              <Text
                style={{ fontSize: 25, color: "blue", textAlign: "center" }}
              >
                {phoneNumber}
              </Text>

              <View style={{ paddingHorizontal: 20 }}>
                <Text
                  style={{
                    fontSize: 18,
                    fontWeight: "regular",
                    textAlign: "center",
                  }}
                  numberOfLines={3}
                >
                  Duke shtypur vazhdo ti pranon te marresh nje SMS me kodin e
                  verifikimit
                </Text>
              </View>

              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-around",
                  width: "100%",
                }}
              >
                <TouchableOpacity
                  style={styles.anulloBtn}
                  onPress={() => {
                    setIsThisYourNumber(false);
                  }}
                >
                  <Text style={styles.buttonText}>Anullo</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={styles.vazhdoBtn}
                  onPress={() => {
                    handleLogin();
                  }}
                >
                  {loader ? (
                    <ActivityIndicator></ActivityIndicator>
                  ) : (
                    <Text style={styles.buttonText}>Vazhdo</Text>
                  )}
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
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
    // height: "72%",
    // width: "90%",
    width: "85%",
    height: windowHeight / 2 + 50,
    // position: "relative",
  },

  anulloBtn: {
    backgroundColor: "red", // Set your desired button background color
    paddingVertical: 10,
    alignItems: "center",
    borderRadius: 16,
    width: 110,
    // marginTop: windowHeight * 0.15,
  },

  vazhdoBtn: {
    backgroundColor: "#25a8dd", // Set your desired button background color
    paddingVertical: 10,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 16,
    width: 110,
    // marginTop: windowHeight * 0.15,
  },

  // popUpContainer: {
  //   backgroundColor: "white",
  //   borderRadius: 40,
  //   paddingVertical: 25,
  //   paddingHorizontal: 20,
  //   alignItems: "center",
  //   justifyContent: "space-between",
  //   height: "72%",
  //   width: "90%",
  //   position: "relative",
  // },

  // provoPerseriButton: {
  //   backgroundColor: "#25a8dd", // Set your desired button background color
  //   paddingVertical: 10,
  //   alignItems: "center",
  //   borderRadius: 16,
  //   width: "90%",
  //   // marginTop: windowHeight * 0.15,
  // },

  // closeButton: {
  //   position: "absolute",
  //   top: 5,
  //   right: 10,
  //   padding: 10,
  // },
});

export default LoginPage;
