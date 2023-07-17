import React, { useState } from "react";
import {
  StyleSheet,
  View,
  ScrollView,
  ActivityIndicator,
  RefreshControl,
} from "react-native";
import Header from "./Header";
import { LinearGradient } from "expo-linear-gradient";
import Story from "./Story";
import ButtonGroup from "./ButtonGroup";
import TabViewExample from "./TabViewExample";
import Footer from "./Footer";
import { StatusBar } from "expo-status-bar";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const MainComponent = ({ navigation }) => {
  const insets = useSafeAreaInsets();
  const [refreshing, setRefreshing] = useState(false);

  // const handleScroll = (event) => {
  //   const { layoutMeasurement, contentOffset, contentSize } = event.nativeEvent;

  //   const isCloseToBottom =
  //     layoutMeasurement.height + contentOffset.y >= contentSize.height - 50;

  //   if (isCloseToBottom && !refreshing) {
  //     // Perform the refresh action
  //     setRefreshing(true);
  //     // Call the function to refresh or load more data
  //     // You can update your data here or make an API request to fetch more data
  //     // After updating the data, setRefreshing(false) to stop the refresh indicator
  //     setTimeout(() => {
  //       setRefreshing(false);
  //     }, 1500);
  //   }
  // };

  const onRefresh = () => {
    // Perform the refresh action here
    setRefreshing(true);
    // Call the function to refresh or load more data
    // You can update your data here or make an API request to fetch more data
    // After updating the data, setRefreshing(false) to stop the refresh indicator
    setTimeout(() => {
      setRefreshing(false);
    }, 1500);
  };

  return (
    <View style={{ flex: 1 }}>
      <LinearGradient
        style={[styles.container, { paddingTop: insets.top }]}
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
        <StatusBar style="auto"></StatusBar>
        <Header />
        <ScrollView
          // onScroll={handleScroll}
          contentContainerStyle={styles.scrollContainer}
          // scrollEventThrottle={16}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
        >
          {/* {refreshing && (
            <View style={styles.indicatorContainer}>
              <ActivityIndicator size="large" color="#ffffff" />
            </View>
          )} */}
          <Story></Story>
          <ButtonGroup></ButtonGroup>
          <TabViewExample></TabViewExample>
        </ScrollView>
        <Footer navigation={navigation} style={styles.footer}></Footer>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // padding: 10,
  },

  scrollContainer: {
    flex: 1,
  },
});

export default MainComponent;
