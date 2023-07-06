import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

const StoryItem = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.imageContainer}
        onPress={() => console.log("Story Opened")}
      >
        <Image
          style={styles.image}
          source={require("../assets/images/unnamed.png")}
        ></Image>
      </TouchableOpacity>
      <Text style={styles.text}>Unlimited</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
    padding: 5,
    marginRight: 12,
  },

  imageContainer: {
    width: 60,
    height: 60,
    borderWidth: 1,
    borderColor: "white",
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
  },

  image: {
    width: "85%",
    height: "85%",
    borderRadius: 50,
  },

  text: {
    // flex: 1,
    // marginLeft: 10,
    // overflow: "hidden",
    color: "white",
  },
});

export default StoryItem;
