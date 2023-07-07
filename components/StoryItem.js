import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

const StoryItem = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainerView}>
        <TouchableOpacity
          style={styles.imageContainer}
          onPress={() => console.log("Story Opened")}
        >
          <Image
            style={styles.image}
            source={require("../assets/images/unnamed.png")}
          ></Image>
        </TouchableOpacity>
      </View>

      <View style={styles.textContainer}>
        <Text style={styles.text}>{props.text}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    gap: 5,
    padding: 7,
    marginRight: 10,
    maxWidth: 90,
    height: "100%",
  },

  imageContainerView: {
    height: "60%",
    alignItems: "center",
    justifyContent: "center",
    // backgroundColor: "black",
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

  textContainer: {
    height: "40%",
    alignItems: "center",
    justifyContent: "center",
    // backgroundColor: "red",
  },

  text: {
    color: "white",
    textAlign: "center",
  },
});

export default StoryItem;
