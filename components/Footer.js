import React from "react";
import { StyleSheet, View, TouchableOpacity, Text, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Feather } from "@expo/vector-icons";

const Footer = () => {
  return (
    // <SafeAreaView style={styles.safeArea}>
    <View style={styles.mainContainer}>
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.leftButton}
          onPress={() => {
            console.log("Portofoli");
          }}
        >
          <Text style={styles.text}>Portofoli</Text>
        </TouchableOpacity>

        <TouchableOpacity
          activeOpacity={0.8}
          style={styles.middleButton}
          onPress={() => {
            console.log("Middle");
          }}
        >
          {/* <Image
            style={styles.image}
            source={require("../assets/images/unnamed.png")}
          ></Image> */}
          <Feather name="smartphone" size={40} color="white" />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.rightButton}
          onPress={() => {
            console.log("Gigamarket");
          }}
        >
          <Text style={styles.text}>Gigamarket</Text>
        </TouchableOpacity>
      </View>
    </View>
    // </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    // flex: 1,
    alignItems: "center",
    height: "8.5%",
    width: "100%",
  },

  container: {
    flexDirection: "row",
    width: "100%",
    height: "100%",
    backgroundColor: "#00364e",
    justifyContent: "center",
    justifyContent: "space-between",
    borderTopLeftRadius: 28,
    borderTopRightRadius: 28,
    position: "relative",
  },

  leftButton: {
    width: "37%",
    alignItems: "center",
    justifyContent: "center",
  },

  middleButton: {
    position: "absolute",
    // top: -25,
    top: "-35%",
    left: "41%",
    width: "17%",
    height: "140%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#00364e",
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
  },

  rightButton: {
    width: "37%",
    alignItems: "center",
    justifyContent: "center",
  },

  image: {
    width: 30,
    height: 30,
    padding: 10,
    marginBottom: 20,
  },

  text: {
    color: "white",
    fontSize: 20,
  },
});

export default Footer;
