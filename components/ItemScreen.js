import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import GigaMarketScreenHeader from "./GigaMarketScreenHeader";
import { FontAwesome } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import ImageSlider from "./ImageSlider";

const ItemScreen = ({ navigation }) => {
  const insets = useSafeAreaInsets();

  const handleNavigation = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.safeArea}>
      <StatusBar style="auto"></StatusBar>
      <LinearGradient
        style={[styles.linearGradientContainer, { paddingTop: insets.top }]}
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
        {/* <View style={{ flex: 1, backgroundColor: "rgba(0,0,0,0.3)" }}> */}
        <GigaMarketScreenHeader
          navigation={handleNavigation}
        ></GigaMarketScreenHeader>

        <ScrollView style={{ flex: 1 }}>
          <View style={{ paddingVertical: 10 }}>
            {/* <ScrollView>
              <View>
                <Image
                  style={{ height: 200, width: "100%" }}
                  source={require("../assets/images/unnamed.png")}
                ></Image>
              </View>
            </ScrollView> */}
            <ImageSlider></ImageSlider>
          </View>

          <View style={{ paddingHorizontal: 25 }}>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                borderBottomWidth: 1,
                borderBottomColor: "rgba(255,255,255,0.5)",
                paddingBottom: 30,
                paddingTop: 10,
              }}
            >
              <Text style={{ fontSize: 20, color: "white" }}>Emri</Text>
              <Text style={{ fontSize: 20, color: "white" }}>200MB</Text>
            </View>

            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                borderBottomWidth: 1,
                borderBottomColor: "rgba(255,255,255,0.5)",
                paddingBottom: 30,
                paddingTop: 10,
              }}
            >
              <Text style={{ fontSize: 20, color: "white" }}>Pagesa</Text>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-around",
                  alignItems: "center",
                }}
              >
                <Text style={{ fontSize: 20, color: "white" }}>VCoins</Text>
                <Image
                  style={{
                    height: 20,
                    width: 20,
                    borderRadius: 20,
                    marginLeft: 12,
                  }}
                  source={require("../assets/images/unnamed.png")}
                ></Image>
              </View>
            </View>

            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                borderBottomWidth: 1,
                borderBottomColor: "rgba(255,255,255,0.5)",
                paddingBottom: 30,
                paddingTop: 10,
              }}
            >
              <Text style={{ fontSize: 20, color: "white" }}>Cmimi</Text>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-around",
                  alignItems: "center",
                }}
              >
                <Text style={{ fontSize: 18, color: "white" }}>80</Text>
                <Text
                  style={{
                    borderRadius: 20,
                    marginLeft: 10,
                    fontSize: 18,
                    color: "white",
                  }}
                >
                  VCoins
                </Text>
              </View>
            </View>

            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                borderBottomWidth: 1,
                borderBottomColor: "rgba(255,255,255,0.5)",
                paddingBottom: 30,
                paddingTop: 10,
              }}
            >
              <Text style={{ fontSize: 20, color: "white" }}>Publikuar</Text>
              <Text style={{ fontSize: 20, color: "white" }}>Sot</Text>
            </View>
          </View>

          <View
            style={{ marginTop: 15, paddingVertical: 5, paddingHorizontal: 25 }}
          >
            <Text style={{ color: "white", fontSize: 17 }}>
              Interneti i ketij produkti eshte i vlefshem per 24 ore ne
              shpejtesite 3G/4G
            </Text>

            <View>
              <TouchableOpacity
                style={{
                  maxWidth: 270,
                  height: 60,
                  backgroundColor: "green",
                  marginTop: 30,
                  borderRadius: 17,
                  justifyContent: "center",
                  alignItems: "center",
                  paddingHorizontal: 5,
                }}
              >
                <Text style={{ color: "white", fontSize: 18 }}>
                  Kontakto +355 69 24 678 90
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={{
                  maxWidth: 200,
                  height: 60,
                  backgroundColor: "orange",
                  marginTop: 10,
                  borderRadius: 17,
                  justifyContent: "center",
                  alignItems: "center",
                  paddingHorizontal: 5,
                }}
              >
                <Text style={{ color: "white", fontSize: 20 }}>
                  BLI ME VCOINS
                </Text>
              </TouchableOpacity>
            </View>
          </View>

          <View
            style={{
              width: "100%",
              height: 400,
              backgroundColor: "#0f1525",
              borderTopLeftRadius: 15,
              borderTopRightRadius: 15,
              marginTop: 20,
            }}
          >
            <View
              style={{
                height: 50,
                justifyContent: "center",
                paddingHorizontal: 25,
              }}
            >
              <Text style={{ color: "white", fontSize: 23, letterSpacing: -1 }}>
                PRODUKTE TE NGJASHME
              </Text>
            </View>
          </View>
        </ScrollView>
        {/* </View> */}

        <View
          style={[
            styles.footerButtons,
            {
              height: 60 + insets.bottom,
            },
          ]}
        >
          <TouchableOpacity
            style={styles.buttons}
            onPress={() => console.log("user Button")}
          >
            <FontAwesome name="user-o" size={35} color="white" />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttons}
            onPress={() => console.log("plus Button")}
          >
            <Ionicons name="add" size={55} color="white" />
          </TouchableOpacity>
        </View>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },

  linearGradientContainer: {
    flex: 1,
  },

  footerButtons: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 30,
    backgroundColor: "#0f1525",
  },

  buttons: {},
});

export default ItemScreen;
