import React, { useEffect } from "react";
import LoginPage from "./components/LoginPage";
import MainComponent from "./components/MainComponent";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import GigaMarketScreen from "./components/GigaMarketScreen";
import { SafeAreaProvider } from "react-native-safe-area-context";
import ItemScreen from "./components/ItemScreen";
import InternetPopup from "./components/InternetPopup";
import Registration from "./components/Registration";
import KodiVerifikimit from "./components/KodiVerifikimit";
import jwt_decode from "jwt-decode";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Alert } from "react-native";

const Stack = createNativeStackNavigator();

const App = () => {
  // useEffect(async () => {
  //   try {
  //     const token = await AsyncStorage.getItem("token");

  //     if (token) {
  //       const { exp } = jwt_decode(token);

  //       const currentTimestamp = Math.floor(Date.now() / 1000);

  //       if (exp > currentTimestamp) {
  //         // Token is not expired, navigate to the home page
  //         navigation.dispatch(
  //           CommonActions.reset({
  //             index: 0,
  //             routes: [{ name: "Main" }], // Redirect to the home page
  //           })
  //         );
  //       } else {
  //         Alert.alert(
  //           "Token has expired"[
  //             {
  //               text: "Log in again!",
  //               onPress: async () => {
  //                 const id = await AsyncStorage.getItem("id");
  //                 const userId = `user${JSON.parse(id)}`;

  //                 try {
  //                   await AsyncStorage.multiRemove([userId, "id"]);
  //                   // await AsyncStorage.multiRemove(["token", "secret"]);
  //                   await AsyncStorage.removeItem("token");
  //                   navigation.replace("Login");
  //                 } catch (error) {
  //                   console.log("Error logging out the user: ", error);
  //                 }
  //               },
  //             }
  //           ]
  //         );
  //       }
  //     }
  //   } catch {}
  // });

  return (
    <NavigationContainer>
      <SafeAreaProvider>
        <Stack.Navigator
          initialRouteName="Login"
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="Login" component={LoginPage} />
          <Stack.Screen name="Main" component={MainComponent} />
          <Stack.Screen name="KodiVerifikimit" component={KodiVerifikimit} />
          <Stack.Screen name="Registration" component={Registration} />
          <Stack.Screen name="GigaMarketScreen" component={GigaMarketScreen} />
          <Stack.Screen name="ItemScreen" component={ItemScreen} />
        </Stack.Navigator>
      </SafeAreaProvider>
      <InternetPopup></InternetPopup>
    </NavigationContainer>
  );
};

// registerRootComponent(App);

export default App;
