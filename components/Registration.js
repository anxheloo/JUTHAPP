import React from "react";
import { Text, View, StyleSheet, Dimensions, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { ScrollView, TextInput } from "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";

const Registration = () => {
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
      <StatusBar style="auto"></StatusBar>

      <View style={styles.logoContainer}>
        <Image
          style={styles.image}
          source={require("../assets/images/unnamed.png")}
        ></Image>
      </View>

      <View style={styles.formContainer}>
        <View>
          <Text></Text>
          <TextInput></TextInput>
        </View>

        <View>
          <Text></Text>
          <TextInput></TextInput>
        </View>

        <View>
          <Text></Text>
          <TextInput></TextInput>
        </View>

        <View>
          <Text></Text>
          <TextInput></TextInput>
        </View>
      </View>
    </LinearGradient>
  );
};

const windowHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },

  logoContainer: {
    marginBottom: 20,
    flex: 2,
    alignItems: "center",
    justifyContent: "center",
    // marginTop: windowHeight * 0.1,
  },

  image: {
    width: 100,
    height: 100,
    margin: 20,
  },
});

export default Registration;
