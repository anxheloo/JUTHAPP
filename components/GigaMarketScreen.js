import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Feather } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import GigaMarketScreenHeader from "./GigaMarketScreenHeader";
import { FontAwesome } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { Foundation } from "@expo/vector-icons";
import SliderComponent from "./SliderComponent";

const GigaMarketScreen = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar style="auto"></StatusBar>
      <LinearGradient
        style={styles.linearGradientContainer}
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
        <GigaMarketScreenHeader></GigaMarketScreenHeader>
        <View style={styles.mainContent}>
          <View style={styles.swipeUp}>
            <View style={styles.scrollContentHeader}>
              <Text style={styles.scrollContentHeaderText}> KATEGORITE</Text>
              <Foundation name="info" size={30} color="white" />
            </View>

            <View style={styles.sliderArea}>
              <SliderComponent></SliderComponent>
            </View>
          </View>

          <View style={styles.scrollContent}>
            <View style={styles.scrollContentHeader}>
              <Text style={styles.scrollContentHeaderText}> TE GJITHA</Text>
              <AntDesign name="rightcircleo" size={24} color="white" />
            </View>

            <View style={styles.middleContent}>
              {/* <SliderComponent></SliderComponent> */}
            </View>

            {/* <View style={styles.buttonContainer}> */}
            <View style={styles.footerButtons}>
              <TouchableOpacity style={styles.buttons}>
                <FontAwesome name="user-o" size={35} color="white" />
              </TouchableOpacity>
              <TouchableOpacity style={styles.buttons}>
                <Ionicons name="add" size={55} color="white" />
              </TouchableOpacity>
            </View>
            {/* </View> */}
          </View>
        </View>
      </LinearGradient>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },

  linearGradientContainer: {
    flex: 1,
  },

  mainContent: {
    // backgroundColor: "black",
    flex: 1,
  },

  swipeUp: {
    flex: 1,
  },

  sliderArea: {
    // backgroundColor: "red",
    flex: 1,
    // justifyContent: "center",
    // alignItems: "center",
  },

  scrollContent: {
    backgroundColor: "#0f1525",
    flex: 1,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },

  scrollContentHeader: {
    height: 50,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 25,
  },

  scrollContentHeaderText: {
    color: "white",
    fontSize: 23,
  },

  middleContent: {
    flex: 1,
    // backgroundColor: "white",
  },

  footerButtons: {
    height: 65,
    paddingVertical: 5,
    marginBottom: 5,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 30,
    // backgroundColor: "red",
  },

  buttons: {
    // padding: 5,
    // margin: 5,
  },
});

export default GigaMarketScreen;
