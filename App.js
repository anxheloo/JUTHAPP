import React from "react";
import { View } from "react-native";
import LoginPage from "./components/LoginPage";
import MainComponent from "./components/MainComponent";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const App = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginPage} />
        <Stack.Screen name="Main" component={MainComponent} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;
