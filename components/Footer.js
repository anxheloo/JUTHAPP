import React from "react";
import { StyleSheet, View, TouchableOpacity, Text, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Feather } from "@expo/vector-icons";

const Footer = ({ navigation }) => {
  return (
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

        <View style={styles.middleButton}>
          <TouchableOpacity
            activeOpacity={0.5}
            onPress={() => {
              console.log("Middle");
            }}
          >
            <Feather name="smartphone" size={40} color="white" />
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          style={styles.rightButton}
          onPress={() => {
            console.log("Gigamarket");
            navigation.navigate("GigaMarketScreen");
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
    alignItems: "center",
    height: 65,
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
    top: -25,
    left: "41.5%",
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
