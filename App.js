import React from "react";
import { View } from "react-native";
import LoginPage from "./components/LoginPage";
import MainComponent from "./components/MainComponent";

const App = () => {
  return (
    <View style={{ flex: 1 }}>
      {/* <LoginPage></LoginPage> */}
      <MainComponent></MainComponent>
    </View>
  );
};
export default App;
