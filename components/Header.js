import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { EvilIcons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const Header = ({ userData }) => {
  console.log(userData);

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
          {userData ? (
            <Text>Hi {userData.firstname}</Text>
          ) : (
            <Text>Hi Nixho</Text>
          )}

          <Image
            style={styles.profileImage}
            source={require("../assets/images/unnamed.png")}
          ></Image>
          {/* <MaterialCommunityIcons
            style={styles.profileImage}
            name="face-man-profile"
            size={24}
            color="black"
          /> */}
        </TouchableOpacity>

        <View style={styles.supportIcons}>
          <TouchableOpacity onPress={() => console.log("Settings")}>
            <Feather
              style={styles.supportImage}
              name="settings"
              size={27}
              color="white"
            />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => console.log("Support")}>
            <MaterialIcons
              style={styles.supportImage}
              name="support-agent"
              size={27}
              color="white"
            />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => console.log("Notifications")}>
            <EvilIcons
              style={styles.supportImage}
              name="bell"
              size={27}
              color="white"
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: "4%",
    // marginTop: 45,
  },

  logoContainer: {
    flexDirection: "row",
    gap: 10,
    alignItems: "baseline",
  },

  rightSection: {
    width: "30%",
  },

  profileContainer: {
    flexDirection: "row",
    gap: 8,
    alignItems: "center",
    justifyContent: "flex-end",
  },

  supportIcons: {
    // margin: 10,
    flexDirection: "row",
    justifyContent: "flex-end",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 8,
  },

  image: {
    width: 50,
    height: 50,
  },
  profileImage: {
    width: 35,
    height: 35,
    borderRadius: 30,
  },
  supportImage: {
    // width: 25,
    // height: 25,
    // marginLeft: 10,
  },
});

export default Header;
