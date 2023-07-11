// import React from "react";
// import { StyleSheet, View, Text, Dimensions, Image } from "react-native";
// import { TouchableOpacity } from "react-native-gesture-handler";
// import ViewSlider from "react-native-view-slider";

// const { width, height } = Dimensions.get("window");

// function SliderComponent(props) {
//   return (
//     // <View style={styles.container}>
//     <ViewSlider
//       renderSlides={
//         <>
//           <View style={styles.viewBox}>
//             <TouchableOpacity
//               style={styles.content1}
//               onPress={console.log("content 1 pressed")}
//             ></TouchableOpacity>
//             <TouchableOpacity style={styles.content2}></TouchableOpacity>
//           </View>

//           <View style={styles.viewBox}>
//             <TouchableOpacity style={styles.content1}></TouchableOpacity>
//             <TouchableOpacity style={styles.content2}></TouchableOpacity>
//           </View>
//         </>
//       }
//       style={styles.slider} //Main slider container style
//       height={200} //Height of your slider
//       slideCount={2} //How many views you are adding to slide
//       dots={true} // Pagination dots visibility true for visibile
//       dotActiveColor="white" //Pagination dot active color
//       dotInactiveColor="gray" // Pagination do inactive color
//       dotsContainerStyle={styles.dotContainer} // Container style of the pagination dots
//       autoSlide={true} //The views will slide automatically
//       // slideInterval={1000} //In Miliseconds
//     />
//     // </View>
//   );
// }

// const styles = StyleSheet.create({
//   slider: {
//     flex: 1,
//   },

//   dotContainer: {
//     justifyContent: "center",
//   },

//   content1: {
//     width: "30%",
//     backgroundColor: "white",
//     borderRadius: 10,
//     height: 100,
//   },
// });

// export default SliderComponent;

// import React from "react";
// import {
//   StyleSheet,
//   View,
//   Text,
//   Dimensions,
//   Image,
//   ScrollView,
// } from "react-native";
// import { TouchableOpacity } from "react-native-gesture-handler";
// import ViewSlider from "react-native-view-slider";
// import { ImageBackground } from "react-native-web";

// const SliderComponent = () => {
//   return (
//     <View>
//       <ScrollView
//         style={styles.contentContainer}
//         horizontal={true}
//         showsHorizontalScrollIndicator={true}
//         indicatorStyle=""
//       >
//         <View style={styles.firstContent}>
//           <TouchableOpacity style={styles.container}></TouchableOpacity>
//           <TouchableOpacity style={styles.container}></TouchableOpacity>
//         </View>

//         <View style={styles.firstContent}>
//           <TouchableOpacity style={styles.container}></TouchableOpacity>
//           <TouchableOpacity style={styles.container}></TouchableOpacity>
//         </View>

//         <View style={styles.firstContent}>
//           <TouchableOpacity style={styles.container}></TouchableOpacity>
//           <TouchableOpacity style={styles.container}></TouchableOpacity>
//         </View>

//         <View style={styles.firstContent}>
//           <TouchableOpacity style={styles.container}></TouchableOpacity>
//           <TouchableOpacity style={styles.container}></TouchableOpacity>
//         </View>

//         <View style={styles.firstContent}>
//           <TouchableOpacity style={styles.container}></TouchableOpacity>
//           <TouchableOpacity style={styles.container}></TouchableOpacity>
//         </View>
//       </ScrollView>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   contentContainer: {
//     flexDirection: "row",
//     gap: 20,
//     height: 130,
//     paddingHorizontal: "3%",
//     paddingTop: 10,
//     marginBottom: "3%",
//     backgroundColor: "red",
//   },

//   firstContent: {
//     flex: 1,
//     flexDirection: "row",
//     width: "100%",
//     height: 120,
//     backgroundColor: "white",
//   },

//   container: {
//     backgroundColor: "blue",
//     width: 50,
//     height: 50,
//   },
// });

// export default SliderComponent;

import React, { useState, useRef } from "react";
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  Image,
  ScrollView,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import ViewSlider from "react-native-view-slider";

const { width, height } = Dimensions.get("window");

const SliderComponent = () => {
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
        <View style={styles.page}>
          <View
            style={{
              gap: 20,
              flexDirection: "row",
              width,
              justifyContent: "center",
              width,
            }}
          >
            <TouchableOpacity
              onPress={() => console.log("content 1")}
              style={[styles.content, styles.content1]}
            >
              <View style={styles.insideContent1}>
                <Image
                  style={styles.image}
                  source={require("../assets/images/unnamed.png")}
                ></Image>
                <View
                  style={{
                    borderBottomColor: "white",
                    borderBottomWidth: 1,
                    width: 15,
                    marginTop: 5,
                  }}
                />
                <Text style={styles.text}>VODAFONE</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => console.log("content 2")}
              style={[styles.content, styles.content2]}
            >
              <View style={styles.insideContent2}>
                <Image
                  style={styles.image}
                  source={require("../assets/images/unnamed.png")}
                ></Image>
                <View
                  style={{
                    borderBottomColor: "white",
                    borderBottomWidth: 1,
                    width: 15,
                    marginTop: 5,
                  }}
                />
                <Text style={styles.text}>DIGITAL</Text>
              </View>
            </TouchableOpacity>
          </View>

          <View
            style={{
              gap: 20,
              flexDirection: "row",
              width,
              justifyContent: "center",
            }}
          >
            <TouchableOpacity
              onPress={() => console.log("content 3")}
              style={[styles.content, styles.content3]}
            >
              <View style={styles.insideContent1}>
                <Image
                  style={styles.image}
                  source={require("../assets/images/unnamed.png")}
                ></Image>
                <View
                  style={{
                    borderBottomColor: "white",
                    borderBottomWidth: 1,
                    width: 15,
                    marginTop: 5,
                  }}
                />
                <Text style={styles.text}>TEKNOLOGJI</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => console.log("content 4")}
              style={[styles.content, styles.content4]}
            >
              <View style={styles.insideContent1}>
                <Image
                  style={styles.image}
                  source={require("../assets/images/unnamed.png")}
                ></Image>
                <View
                  style={{
                    borderBottomColor: "white",
                    borderBottomWidth: 1,
                    width: 15,
                    marginTop: 5,
                  }}
                />
                <Text style={styles.text}>EDUKIM</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.page2}>
          <View style={{ gap: 15 }}>
            <TouchableOpacity
              onPress={() => console.log("content 5")}
              style={[styles.content, styles.content5]}
            >
              <View style={styles.insideContent1}>
                <Image
                  style={styles.image}
                  source={require("../assets/images/unnamed.png")}
                ></Image>
                <View
                  style={{
                    borderBottomColor: "white",
                    borderBottomWidth: 1,
                    width: 15,
                    marginTop: 5,
                  }}
                />
                <Text style={styles.text}>MODE</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => console.log("content 6")}
              style={[styles.content, styles.content6]}
            >
              <View style={styles.insideContent1}>
                <Image
                  style={styles.image}
                  source={require("../assets/images/unnamed.png")}
                ></Image>
                <View
                  style={{
                    borderBottomColor: "white",
                    borderBottomWidth: 1,
                    width: 15,
                    marginTop: 5,
                  }}
                />
                <Text style={styles.text}>TJETER</Text>
              </View>
            </TouchableOpacity>
          </View>

          <View>
            <TouchableOpacity
              onPress={() => console.log("content 7")}
              style={[styles.content, styles.content7]}
            >
              <View style={styles.insideContent1}>
                <Image
                  style={styles.image}
                  source={require("../assets/images/unnamed.png")}
                ></Image>
                <View
                  style={{
                    borderBottomColor: "white",
                    borderBottomWidth: 1,
                    width: 15,
                    marginTop: 5,
                  }}
                />
                <Text style={styles.text}>ART</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>

      <View style={styles.dotContainer}>
        {[...Array(2)].map((_, index) => (
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
    flex: 1,
  },

  page: {
    width,
    gap: 15,
  },

  page2: {
    flexDirection: "row",
    justifyContent: "center",
    width,
    gap: 20,
  },

  content: {
    borderRadius: 20,
    height: 112,
    justifyContent: "flex-end",
    padding: 7,
  },

  content1: {
    // flex: 1,
    backgroundColor: "red",
    width: 175,
  },

  content2: {
    backgroundColor: "orange",
    width: 140,
  },

  content3: {
    backgroundColor: "blue",
    width: 140,
  },

  content4: {
    backgroundColor: "yellow",
    width: 175,
  },

  content5: {
    backgroundColor: "pink",
    width: 175,
  },

  content6: {
    backgroundColor: "purple",
    width: 140,
  },

  content7: {
    backgroundColor: "green",
    width: 140,
  },

  dotContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "flex-end",
    padding: 5,
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

  image: {
    width: 30,
    height: 30,
    borderRadius: 20,
  },

  text: {
    color: "white",
    fontSize: 15,
    fontWeight: "bold",
  },
});

export default SliderComponent;
