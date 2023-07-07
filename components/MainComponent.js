import React from "react";
import { StyleSheet } from "react-native";
import Header from "./Header";
import { LinearGradient } from "expo-linear-gradient";
import Story from "./Story";
import ButtonGroup from "./ButtonGroup";
import TabViewExample from "./TabViewExample";
import Footer from "./Footer";

const MainComponent = () => {
  return (
    // <SafeAreaView style={styles.container}>
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
      <Story></Story>
      <ButtonGroup></ButtonGroup>
      <TabViewExample></TabViewExample>
      <Footer style={styles.footer}></Footer>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // padding: 10,
  },
});

export default MainComponent;
