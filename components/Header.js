import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

const Header = () => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.logoContainer}>
        <Image
          style={styles.image}
          source={require("../assets/images/unnamed.png")}
        ></Image>

        <Image
          style={styles.image}
          source={require("../assets/images/unnamed.png")}
        ></Image>
      </View>

      <View style={styles.rightSection}>
        <TouchableOpacity
          style={styles.profileContainer}
          onPress={() => console.log("Profile Opened")}
        >
          <Text>Hi Nixho</Text>
          <Image
            style={styles.profileImage}
            source={require("../assets/images/unnamed.png")}
          ></Image>
        </TouchableOpacity>

        <View style={styles.supportIcons}>
          <TouchableOpacity onPress={() => console.log("Settings")}>
            <Image
              style={styles.supportImage}
              source={require("../assets/images/unnamed.png")}
            ></Image>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => console.log("Support")}>
            <Image
              style={styles.supportImage}
              source={require("../assets/images/unnamed.png")}
            ></Image>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => console.log("Notifications")}>
            <Image
              style={styles.supportImage}
              source={require("../assets/images/unnamed.png")}
            ></Image>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    // flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "5%",
    marginTop: "5%",
  },

  logoContainer: {
    flexDirection: "row",
    // alignItems: "center",
    // justifyContent: "center",
    gap: 10,
  },

  rightSection: {
    // alignItems: "center",
    // justifyContent: "center",
  },

  profileContainer: {
    flexDirection: "row",
    gap: 8,
    alignItems: "center",
    paddingTop: "10%",
    // justifyContent: "center",
  },

  supportIcons: {
    flexDirection: "row",
    justifyContent: "flex-end",
    justifyContent: "space-between",
    paddingTop: "10%",
  },

  image: {
    width: 50,
    height: 50,
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 30,
  },
  supportImage: {
    width: 20,
    height: 20,
  },
});

export default Header;
