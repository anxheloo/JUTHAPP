import React, { useState, useRef } from "react";
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

const { width, height } = Dimensions.get("window");

const ImageSlider = () => {
  const scrollViewRef = useRef(null);
  const [currentPage, setCurrentPage] = useState(0);

  const handleScroll = (event) => {
    const contentOffset = event.nativeEvent.contentOffset;
    const viewSize = event.nativeEvent.layoutMeasurement;
    const pageNum = Math.floor(contentOffset.x / viewSize.width);
    setCurrentPage(pageNum);
  };

  const scrollToPage = (page) => {
    scrollViewRef.current.scrollTo({
      x: page * width,
      y: 0,
      animated: true,
    });
    setCurrentPage(page);
  };

  const scrollNextPage = () => {
    const nextPage = currentPage + 1;
    if (nextPage < data.length) {
      scrollToPage(nextPage);
    }
  };

  const scrollPreviousPage = () => {
    const previousPage = currentPage - 1;
    if (previousPage >= 0) {
      scrollToPage(previousPage);
    }
  };

  const data = [
    { id: 1, image: require("../assets/images/unnamed.png") },
    { id: 2, image: require("../assets/images/unnamed.png") },
    { id: 3, image: require("../assets/images/unnamed.png") },
  ];

  return (
    <View style={styles.container}>
      <ScrollView
        ref={scrollViewRef}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={handleScroll}
        scrollEventThrottle={16}
      >
        {data.map((item) => (
          <View key={item.id} style={styles.page}>
            <Image style={styles.image} source={item.image} />
          </View>
        ))}
      </ScrollView>

      <TouchableOpacity
        style={[styles.arrowButton, styles.leftArrowButton]}
        onPress={scrollPreviousPage}
        disabled={currentPage === 0}
      >
        <MaterialIcons name="keyboard-arrow-left" size={28} color="white" />
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.arrowButton, styles.rightArrowButton]}
        onPress={scrollNextPage}
        disabled={currentPage === data.length - 1}
      >
        <MaterialIcons name="keyboard-arrow-right" size={28} color="white" />
      </TouchableOpacity>

      <View style={styles.dotContainer}>
        {[...Array(data.length)].map((_, index) => (
          <TouchableOpacity
            key={index}
            style={[styles.dot, currentPage === index && styles.activeDot]}
            onPress={() => scrollToPage(index)}
          />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "relative",
  },

  page: {
    width,
    justifyContent: "space-around",
    paddingHorizontal: 10,
  },

  image: { height: 250, width: "100%" },

  arrowButton: {
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    top: "35%",
    width: 30,
    height: 30,
    borderRadius: 20,
    backgroundColor: "rgba(255, 255, 255, 0.4)",
  },

  leftArrowButton: {
    left: 20,
  },
  rightArrowButton: {
    right: 20,
  },

  dotContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "flex-end",
    padding: 15,
    marginTop: 10,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "gray",
    marginHorizontal: 4,
  },
  activeDot: {
    backgroundColor: "white",
  },

  text: {
    color: "white",
    fontSize: 15,
    fontWeight: "bold",
  },
});

export default ImageSlider;
