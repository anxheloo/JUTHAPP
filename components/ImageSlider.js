import React, { useState, useRef } from "react";
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  Image,
  ScrollView,
  TouchableOpacity,
  Modal,
  Pressable,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

const { width, height } = Dimensions.get("window");

const ImageSlider = (props) => {
  const scrollViewRef = useRef(null);
  const [currentPage, setCurrentPage] = useState(0);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const handleScroll = (event) => {
    const contentOffset = event.nativeEvent.contentOffset;
    const viewSize = event.nativeEvent.layoutMeasurement;
    const pageNum = Math.floor(contentOffset.x / viewSize.width);
    setCurrentPage(pageNum);
    console.log(contentOffset);
    console.log(viewSize);
    console.log(pageNum);
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

  const data = props.images.map((image, index) => ({
    id: index + 1,
    image,
  }));

  return (
    <View style={styles.container}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Image
              style={styles.modalImage}
              source={data[selectedImageIndex].image}
            />
            {/* Add any additional content for the modal */}
          </View>
        </View>

        <TouchableOpacity
          style={styles.closeButton}
          onPress={() => setModalVisible(false)}
        >
          <MaterialIcons name="close" size={40} color="white" />
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.arrowButtonModal, styles.leftArrowButton]}
          onPress={() => {
            const previousImageIndex = selectedImageIndex - 1;
            if (previousImageIndex >= 0) {
              setSelectedImageIndex(previousImageIndex);
            }
          }}
          disabled={selectedImageIndex === 0}
        >
          <MaterialIcons name="keyboard-arrow-left" size={50} color="white" />
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.arrowButtonModal, styles.rightArrowButton]}
          onPress={() => {
            const nextImageIndex = selectedImageIndex + 1;
            if (nextImageIndex < data.length) {
              setSelectedImageIndex(nextImageIndex);
            }
          }}
          disabled={selectedImageIndex === data.length - 1}
        >
          <MaterialIcons name="keyboard-arrow-right" size={50} color="white" />
        </TouchableOpacity>
      </Modal>

      <ScrollView
        ref={scrollViewRef}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={handleScroll}
        scrollEventThrottle={16}
      >
        {data.map((item) => (
          <Pressable
            key={item.id}
            onPress={() => {
              setModalVisible(true);
              setSelectedImageIndex(item.id - 1);
            }}
          >
            <View key={item.id} style={styles.page}>
              <Image style={styles.image} source={item.image} />
            </View>
          </Pressable>
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

  arrowButtonModal: {
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    top: "50%",
    marginTop: -20,
    width: 50,
    borderRadius: 20,
    // backgroundColor: "rgba(255, 255, 255, 0.4)",
    // backgroundColor: "red",
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

  modalContainer: {
    position: "relative",
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    borderRadius: 10,
    padding: 20,
    alignItems: "center",
  },
  modalImage: {
    height: 300,
    width: 300,
    resizeMode: "contain",
  },
  closeButton: {
    position: "absolute",
    top: 20,
    right: 10,
    padding: 10,
  },
});

export default ImageSlider;
