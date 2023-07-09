import React from "react";
import { TouchableOpacity, View, Text, StyleSheet, Image } from "react-native";

const OptionComponent = (props) => {
  return (
    <TouchableOpacity style={styles.mainContainer} onPress={props.onPress}>
      <View style={styles.element1}>
        <Image
          source={require("../assets/images/unnamed.png")}
          style={styles.image1}
        ></Image>
        <Text style={styles.text}>{props.text}</Text>
      </View>
      <View style={styles.element2}>
        <Image
          source={require("../assets/images/unnamed.png")}
          style={styles.image2}
        ></Image>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    width: "42%",
    maxWidth: 250,
    height: 100,
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "green",
    borderRadius: 20,
  },
  element1: {
    flex: 2,
    justifyContent: "space-between",
    padding: 10,
  },

  image1: {
    width: 35,
    height: 35,
    borderRadius: 10,
  },

  element2: {
    flex: 1,
    alignItems: "flex-end",
    justifyContent: "center",
  },

  image2: {
    width: 50,
    height: 50,
  },

  text: {
    color: "white",
    maxWidth: "95%",
  },
});

export default OptionComponent;
