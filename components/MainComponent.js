import React from "react";
import { StyleSheet, View } from "react-native";
import Header from "./Header";
import { LinearGradient } from "expo-linear-gradient";
import Story from "./Story";
import ButtonGroup from "./ButtonGroup";
import TabViewExample from "./TabViewExample";
import Footer from "./Footer";
import { StatusBar } from "expo-status-bar";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const MainComponent = ({ navigation }) => {
  const insets = useSafeAreaInsets();

  return (
    <View style={{ flex: 1 }}>
      <LinearGradient
        style={[styles.container, { paddingTop: insets.top }]}
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
        <StatusBar style="auto"></StatusBar>
        <Header />
        <Story></Story>
        <ButtonGroup></ButtonGroup>
        <TabViewExample></TabViewExample>
        <Footer navigation={navigation} style={styles.footer}></Footer>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // padding: 10,
  },
});

export default MainComponent;
