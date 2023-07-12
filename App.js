import React from "react";
import LoginPage from "./components/LoginPage";
import MainComponent from "./components/MainComponent";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import GigaMarketScreen from "./components/GigaMarketScreen";
import { SafeAreaProvider } from "react-native-safe-area-context";
import ItemScreen from "./components/ItemScreen";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <SafeAreaProvider>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="Login" component={LoginPage} />
          <Stack.Screen name="Main" component={MainComponent} />
          <Stack.Screen name="GigaMarketScreen" component={GigaMarketScreen} />
          <Stack.Screen name="ItemScreen" component={ItemScreen} />
        </Stack.Navigator>
      </SafeAreaProvider>
    </NavigationContainer>
  );
};

// registerRootComponent(App);

export default App;
