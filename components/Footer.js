import React from "react";
import { StyleSheet, View, TouchableOpacity, Text, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

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
          <Image
            style={styles.image}
            source={require("../assets/images/unnamed.png")}
          ></Image>
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
  },

  container: {
    flexDirection: "row",
    width: "100%",
    height: "100%",
    backgroundColor: "#00364e",
    justifyContent: "center",
    justifyContent: "space-between",
    borderRadius: 30,
    position: "relative",
  },

  leftButton: {
    width: "37%",
    alignItems: "center",
    justifyContent: "center",
  },

  middleButton: {
    position: "absolute",
    top: -25,
    left: "41%",
    width: "16%",
    height: "140%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#00364e",
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
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
