import React from "react";
import { View } from "react-native";
import LoginPage from "./components/LoginPage";
import MainComponent from "./components/MainComponent";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import GigaMarketScreen from "./components/GigaMarketScreen";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import GigaMarketScreenHeader from "./components/GigaMarketScreenHeader";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    // <NavigationContainer>
    //   <Stack.Navigator
    //     screenOptions={{
    //       headerShown: false,
    //     }}
    //   >
    //     <Stack.Screen name="Login" component={LoginPage} />
    //     <Stack.Screen name="Main" component={MainComponent} />
    //   </Stack.Navigator>
    // </NavigationContainer>

    <SafeAreaView style={{ flex: 1 }}>
      {/* <GigaMarketScreenHeader></GigaMarketScreenHeader> */}
      <GigaMarketScreen></GigaMarketScreen>
    </SafeAreaView>

    // <LoginPage></LoginPage>
  );
};

// registerRootComponent(App);

export default App;
