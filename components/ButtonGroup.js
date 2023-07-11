import React from "react";
import { View, StyleSheet, TouchableOpacity, Text, Image } from "react-native";

const ButtonGroup = () => {
  // const buttons = [
  //   { id: 1, label: "Button 1" },
  //   { id: 2, label: "Button 2" },
  //   { id: 3, label: "Button 3" },
  // ];

  return (
    <View style={styles.mainContainer}>
      <View style={styles.container}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => console.log("Button 1")}
          >
            <Image
              style={styles.buttonImage}
              source={require("../assets/images/unnamed.png")}
            ></Image>
            <Text style={styles.buttonText}>32282</Text>
          </TouchableOpacity>
        </View>

        <View style={[styles.buttonContainer, styles.middleBorders]}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => console.log("Button 1")}
          >
            <Image
              style={styles.buttonImage}
              source={require("../assets/images/unnamed.png")}
            ></Image>
            <Text style={styles.buttonText}>13.95 GB</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => console.log("Button 1")}
          >
            <Image
              style={styles.buttonImage}
              source={require("../assets/images/unnamed.png")}
            ></Image>
            <Text style={styles.buttonText}>0 All</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    alignItems: "center",
    justifyContent: "center",
    height: 35,
  },

  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginTop: "3%",
    width: "90%",
    height: "100%",
    paddingHorizontal: 15,
    backgroundColor: "rgba(255,255,255,0.2)",
    borderRadius: 30,
  },

  buttonContainer: {
    alignItems: "center",
    justifyContent: "center",
    height: "90%",
  },

  middleBorders: {
    borderRightWidth: 1,
    borderRightColor: "rgba(255,255,255,0.5)",
    borderLeftWidth: 1,
    borderLeftColor: "rgba(255,255,255,0.5)",
    paddingHorizontal: "6%",
  },

  button: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
  },

  buttonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },

  buttonImage: {
    width: 20,
    height: 20,
    borderRadius: 30,
  },
});

export default ButtonGroup;
