import React, { useEffect } from "react";
import { Alert } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import jwt_decode from "jwt-decode";

export const tokenAlert = (navigation) => {
  useEffect(() => {
    const checkTokenExpiration = async () => {
      try {
        const token = await AsyncStorage.getItem("token");

        if (token) {
          const { exp } = jwt_decode(token);
          const currentTimestamp = Math.floor(Date.now() / 1000);

          if (exp <= currentTimestamp) {
            // Token has expired, show an alert
            Alert.alert(
              "Token has expired",
              "Log in again!",
              [
                {
                  text: "Log in again",
                  onPress: async () => {
                    const id = await AsyncStorage.getItem("id");
                    const userId = `user${JSON.parse(id)}`;
                    await AsyncStorage.multiRemove([userId, "id", "token"]);
                    navigation.replace("Login");
                  },
                },
              ],
              { cancelable: false }
            );
          }
        }
      } catch (error) {
        console.log("Error checking token expiration:", error);
      }
    };

    checkTokenExpiration();
  }, [navigation]);
};
