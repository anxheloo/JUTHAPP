import React, { useState, useEffect } from "react";
import { Dimensions } from "react-native";
import jwt_decode from "jwt-decode";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Alert, View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { CommonActions } from "@react-navigation/native";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const TokenPopUp = () => {
  const [alertShown, setAlertShown] = useState(false);

  const navigation = useNavigation();

  try {
    useEffect(() => {
      const checkTokenExpiration = async () => {
        try {
          const token = await AsyncStorage.getItem("token");
          // const secret = await AsyncStorage.getItem("secret");

          if (token) {
            // Decode the token to get the expiration timestamp (in seconds)
            const { exp } = jwt_decode(token);

            // Get the current timestamp (in seconds)
            const currentTimestamp = Math.floor(Date.now() / 1000);

            if (exp <= currentTimestamp && !alertShown) {
              // Token has expired, show an alert
              Alert.alert(
                "Token has expired",
                "Log in again!",
                [
                  {
                    text: "Log in again",
                    onPress: async () => {
                      console.log("ALERT PRESSED|!");
                      setAlertShown(false);
                      const id = await AsyncStorage.getItem("id");
                      const userId = `user${JSON.parse(id)}`;
                      await AsyncStorage.multiRemove([userId, "id", "token"]);
                      // navigation.navigate("Login");
                      navigation.dispatch(
                        CommonActions.reset({
                          index: 0,
                          routes: [{ name: "Login" }], // Make sure "Main" matches your MainComponent screen name
                        })
                      );
                    },
                  },
                ],
                { cancelable: false }
              );

              setAlertShown(true);
            }
          } else {
            console.log("DOESTN EXISTTTTTT!@");
            console.log(token);
            //token not found, show the login screen
          }
        } catch (error) {
          console.log("error", error);
        }
      };

      //   // Check token expiration every 10 seconds (adjust this interval as needed)
      const tokenCheckInterval = setInterval(checkTokenExpiration, 60000);

      // Initial check when the component mounts
      checkTokenExpiration();

      //   // Cleanup interval on unmount
      return () => {
        clearInterval(tokenCheckInterval);
      };
    }, []);
  } catch (err) {
    console.log(err, "THIS IS ERROR");
  }

  // return (
  //   <>
  //     {alertShown && (
  //       <View
  //         style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
  //       >
  //         <View
  //           style={{ width: windowWidth / 1.5, height: windowHeight / 1.5 }}
  //         >
  //           <Text>Ca bone plako!</Text>
  //         </View>
  //       </View>
  //     )}
  //   </>
  // );
};

export default TokenPopUp;
