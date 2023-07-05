import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

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

      <View>
        <View style={styles.profileContainer}>
          <Text>Hi Nixho</Text>
          <Image
            style={styles.profileImage}
            source={require("../assets/images/unnamed.png")}
          ></Image>
        </View>

        <View style={styles.supportIcons}>
          <Image
            style={styles.supportImage}
            source={require("../assets/images/unnamed.png")}
          ></Image>
          <Image
            style={styles.supportImage}
            source={require("../assets/images/unnamed.png")}
          ></Image>
          <Image
            style={styles.supportImage}
            source={require("../assets/images/unnamed.png")}
          ></Image>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 20,
    marginTop: 30,
  },

  logoContainer: {
    flexDirection: "row",
    gap: 10,
  },

  profileContainer: {
    flexDirection: "row",
    gap: 10,
  },

  supportIcons: {
    flexDirection: "row",
    justifyContent: "flex-end",
    justifyContent: "space-between",
    paddingTop: 10,
  },

  image: {
    width: 50,
    height: 50,
  },
  profileImage: {
    width: 30,
    height: 30,
  },
  supportImage: {
    width: 20,
    height: 20,
  },
});

export default Header;
