import React from "react";
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

const Stack = createNativeStackNavigator();

const App = () => {
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
          <Stack.Screen name="GigaMarketScreen" component={GigaMarketScreen} />
          <Stack.Screen name="ItemScreen" component={ItemScreen} />
          <Stack.Screen name="Registration" component={Registration} />
          <Stack.Screen name="KodiVerifikimit" component={KodiVerifikimit} />
        </Stack.Navigator>
      </SafeAreaProvider>
      <InternetPopup></InternetPopup>
    </NavigationContainer>
  );
};

// registerRootComponent(App);

export default App;
