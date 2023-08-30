import React from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity,
} from "react-native";
// import { TouchableOpacity } from "react-native-gesture-handler";

const GigamarketItemContainer = (props) => {
  const { width, height } = Dimensions.get("window");
  console.log(width, height);

  const handelClick = () => {
    props.onPress();
  };

  return (
    <TouchableOpacity
      style={{ flex: 1, paddingVertical: 5, marginRight: 20, maxHeight: 280 }}
      onPress={handelClick}
    >
      <View style={styles.mainContainer}>
        <View
          style={{
            backgroundColor: "pink",
            borderTopLeftRadius: 17,
            borderTopRightRadius: 17,
            height: "45%",
            padding: 3,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              backgroundColor: "white",
              borderRadius: 10,
              alignItems: "center",
              justifyContent: "space-evenly",
              paddingHorizontal: 5,
            }}
          >
            <Image
              style={{
                width: 10,
                height: 10,
                borderRadius: 20,
                marginRight: 5,
              }}
              source={require("../assets/images/unnamed.png")}
            ></Image>
            <Text
              style={{
                color: "red",
                fontWeight: "bold",
                letterSpacing: -1,
                fontSize: 12,
              }}
            >
              Vodafone Sponsored
            </Text>
          </View>

          <View
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
          >
            <Image
              style={{
                width: 45,
                height: 45,
                borderRadius: 10,
              }}
              source={props.data.image}
            ></Image>
          </View>
        </View>

        <View
          style={{
            backgroundColor: "white",
            height: "55%",
            borderBottomLeftRadius: 17,
            borderBottomRightRadius: 17,
            padding: 5,
            justifyContent: "space-between",
          }}
        >
          <View>
            <Text style={{ fontWeight: "bold", paddingVertical: 2 }}>
              {props.data.mb}
            </Text>
            <Text style={{ fontSize: 11 }}>{props.data.description}</Text>
          </View>

          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              padding: 6,
            }}
          >
            <Image
              style={{ width: 15, height: 15, borderRadius: 20 }}
              source={require("../assets/images/unnamed.png")}
            ></Image>
            <Text style={{ fontWeight: "bold" }}>{props.data.vcoins}</Text>
            <Text>VCoins</Text>
          </View>

          <View>
            <Text
              style={{
                color: "black",
                fontWeight: "bold",
                alignSelf: "center",
              }}
            >
              {props.data.offerDayValidity}
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    borderRadius: 17,
    width: 145,
  },

  subContainer: {
    flex: 1,
    // borderTopLeftRadius: 20,
    // borderTopRightRadius: 20,
    // marginBottom: 10,
  },
});

export default GigamarketItemContainer;
