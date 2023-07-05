import React from "react";
import { View, StyleSheet } from "react-native";
import Header from "./Header";
import { LinearGradient } from "expo-linear-gradient";

const MainComponent = () => {
  return (
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
      <Header />
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default MainComponent;
