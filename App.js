import React from "react";
import LoginPage from "./components/screens/LoginPage";
import MainComponent from "./components/screens/MainComponent";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import GigaMarketScreen from "./components/screens/GigaMarketScreen";
import { SafeAreaProvider } from "react-native-safe-area-context";
import ItemScreen from "./components/screens/ItemScreen";
import InternetPopup from "./components/InternetPopup";
import Registration from "./components/screens/Registration";
import KodiVerifikimit from "./components/screens/KodiVerifikimit";
import TokenPopUp from "./components/TokenPopUp";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      {/* <SafeAreaProvider> */}
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
      {/* </SafeAreaProvider> */}
      <TokenPopUp></TokenPopUp>
      <InternetPopup></InternetPopup>
    </NavigationContainer>
  );
};

// registerRootComponent(App);

export default App;
