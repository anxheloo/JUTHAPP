import React, { useState, useEffect, useCallback } from "react";
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

const productData = [
  {
    id: 0,
    image: require("../assets/images/unnamed.png"),
    mb: "200MB",
    description:
      "Interneti i ketij produkti eshte i vlefshem per 24 ore ne shpejtesite 3G/4G",
    vcoins: 80,
    offerDayValidity: "Sot",
    screen: "ItemScreen",
  },

  {
    id: 1,
    image: require("../assets/images/unnamed.png"),
    mb: "100MB",
    description:
      "Interneti i ketij produkti eshte i vlefshem per 24 ore ne shpejtesite 3G/4G",
    vcoins: 40,
    offerDayValidity: "Sot",
    screen: "ItemScreen",
  },

  {
    id: 2,
    image: require("../assets/images/unnamed.png"),
    mb: "1GB",
    description:
      "Interneti i ketij produkti eshte i vlefshem per 24 ore ne shpejtesite 3G/4G",
    vcoins: 200,
    offerDayValidity: "Sot",
    screen: "ItemScreen",
  },
  {
    id: 3,
    image: require("../assets/images/unnamed.png"),
    mb: "400MB",
    description:
      "Interneti i ketij produkti eshte i vlefshem per 24 ore ne shpejtesite 3G/4G",
    vcoins: 100,
    offerDayValidity: "Sot",
    screen: "ItemScreen",
  },
  {
    id: 4,
    image: require("../assets/images/unnamed.png"),
    mb: "1GB",
    description:
      "Interneti i ketij produkti eshte i vlefshem per 24 ore ne shpejtesite 3G/4G",
    vcoins: 400,
    offerDayValidity: "2 dite me pare",
    screen: "ItemScreen",
  },
];

const GigaMarketScreen = ({ navigation }) => {
  const [myData, setMyData] = useState(productData);

  const handleDelete = (id) => {
    setMyData((currentDatas) => {
      return currentDatas.filter((element) => {
        return element.id !== id;
      });
    });
    navigation.goBack();
  };

  const { width, height } = Dimensions.get("window");
  const insets = useSafeAreaInsets();

  const handleNavigation = () => {
    navigation.goBack();
  };

  const handleItemPress = (screenName, productId, product, handleDelete) => {
    if (productId === 0) {
      navigation.navigate(screenName, {
        product,
        handleDelete: () => handleDelete(productId),
      });
    }
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
              {myData.map((product) => (
                <GigamarketItemContainer
                  key={product.id}
                  data={product}
                  onPress={() =>
                    handleItemPress(
                      product.screen,
                      product.id,
                      product,
                      handleDelete
                    )
                  }
                  // onPress={() => handleItemPress(product)}
                ></GigamarketItemContainer>
              ))}
            </ScrollView>

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
