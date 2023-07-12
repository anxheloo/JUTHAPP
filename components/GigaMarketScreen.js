import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";
import { AntDesign } from "@expo/vector-icons";
import GigaMarketScreenHeader from "./GigaMarketScreenHeader";
import { FontAwesome } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { Foundation } from "@expo/vector-icons";
import SliderComponent from "./SliderComponent";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import GigamarketItemContainer from "./GigaMarketItemComponent";

const GigaMarketScreen = ({ navigation }) => {
  const { width, height } = Dimensions.get("window");
  const insets = useSafeAreaInsets();

  const handleNavigation = () => {
    navigation.goBack();
  };

  const handleItemPress = (screenName) => {
    navigation.navigate(screenName);
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
        <View style={styles.mainContent}>
          <View style={styles.swipeUp}>
            <GigaMarketScreenHeader
              navigation={handleNavigation}
            ></GigaMarketScreenHeader>
            <View style={styles.scrollContentHeader}>
              <Text style={styles.scrollContentHeaderText}> KATEGORITE</Text>
              <TouchableOpacity onPress={() => console.log("info Button")}>
                <Foundation name="info" size={30} color="white" />
              </TouchableOpacity>
            </View>

            <View style={styles.sliderArea}>
              <SliderComponent></SliderComponent>
            </View>
          </View>

          <View style={styles.scrollContent}>
            <View style={styles.scrollContentHeader}>
              <Text style={styles.scrollContentHeaderText}> TE GJITHA</Text>
              <TouchableOpacity
                onPress={() => console.log("right arrow Button")}
              >
                <AntDesign name="rightcircleo" size={24} color="white" />
              </TouchableOpacity>
            </View>

            <ScrollView
              style={{
                paddingHorizontal: 20,
                flex: 1,
                width,
              }}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            >
              <GigamarketItemContainer
                // onPress={() => console.log("container1")}
                // navigation={navigation}
                onPress={() => handleItemPress("ItemScreen")}
              ></GigamarketItemContainer>
              <GigamarketItemContainer
                onPress={() => handleItemPress("ItemScreen")}
              ></GigamarketItemContainer>
              <GigamarketItemContainer
                onPress={() => handleItemPress("ItemScreen")}
              ></GigamarketItemContainer>
              <GigamarketItemContainer
                onPress={() => handleItemPress("ItemScreen")}
              ></GigamarketItemContainer>
              <GigamarketItemContainer
                onPress={() => handleItemPress("ItemScreen")}
              ></GigamarketItemContainer>
              <GigamarketItemContainer
                onPress={() => handleItemPress("ItemScreen")}
              ></GigamarketItemContainer>
              <GigamarketItemContainer
                onPress={() => handleItemPress("ItemScreen")}
              ></GigamarketItemContainer>
              <GigamarketItemContainer
                onPress={() => handleItemPress("ItemScreen")}
              ></GigamarketItemContainer>
              <GigamarketItemContainer
                onPress={() => handleItemPress("ItemScreen")}
              ></GigamarketItemContainer>
              <GigamarketItemContainer
                onPress={() => handleItemPress("ItemScreen")}
              ></GigamarketItemContainer>
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
            {/* </View> */}
          </View>
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

  mainContent: {
    flex: 1,
  },

  swipeUp: {
    flex: 1,
    marginBottom: 5,
  },

  sliderArea: {
    flex: 1,
  },

  scrollContent: {
    backgroundColor: "#0f1525",
    flex: 1,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    // backgroundColor: "red",
  },

  scrollContentHeader: {
    height: 50,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 25,
  },

  scrollContentHeaderText: {
    color: "white",
    fontSize: 23,
  },

  middleContent: {
    flex: 1,
    backgroundColor: "white",
  },

  footerButtons: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 30,
  },

  buttons: {},
});

export default GigaMarketScreen;
