import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  ScrollView,
  RefreshControl,
  Alert,
} from "react-native";
import Header from "./Header";
import { LinearGradient } from "expo-linear-gradient";
import Story from "./Story";
import ButtonGroup from "./ButtonGroup";
import TabViewExample from "./TabViewExample";
import Footer from "./Footer";
import { StatusBar } from "expo-status-bar";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation, useIsFocused } from "@react-navigation/native";
import jwt_decode from "jwt-decode";
import { tokenAlert } from "./tokenAlert";
import TokenPopUp from "./TokenPopUp";

const MainComponent = () => {
  // {navigation;}

  const navigation = useNavigation();
  const isFocused = useIsFocused();

  const insets = useSafeAreaInsets();
  const [refreshing, setRefreshing] = useState(false);
  const [userLogin, setUserLogin] = useState(false);
  const [userData, setUserData] = useState(null);
  const [alertShown, setAlertShown] = useState(false);

  // tokenAlert(navigation);

  // const checkTokenExpiration = async () => {
  //   try {
  //     const token = await AsyncStorage.getItem("token");

  //     if (token) {
  //       const { exp } = jwt_decode(token);
  //       const currentTimestamp = Math.floor(Date.now() / 1000);

  //       if (exp <= currentTimestamp && !alertShown) {
  //         // Token has expired, show an alert
  //         Alert.alert(
  //           "Token has expired",
  //           "Log in again!",
  //           [
  //             {
  //               text: "Log in again",
  //               onPress: async () => {
  //                 setAlertShown(false);
  //                 const id = await AsyncStorage.getItem("id");
  //                 const userId = `user${JSON.parse(id)}`;
  //                 await AsyncStorage.multiRemove([userId, "id", "token"]);
  //                 navigation.replace("Login");
  //               },
  //             },
  //           ],
  //           { cancelable: false }
  //         );

  //         setAlertShown(true);
  //       }
  //     }
  //   } catch (error) {
  //     console.log("Error checking token expiration:", error);
  //   }
  // };

  // useEffect(() => {
  //   // Check token expiration every 10 seconds (adjust this interval as needed)
  //   const tokenCheckInterval = setInterval(checkTokenExpiration, 10000);

  //   // Initial check when the component mounts
  //   checkTokenExpiration();

  //   // Cleanup interval on unmount
  //   return () => {
  //     clearInterval(tokenCheckInterval);
  //   };
  // }, []);

  // useEffect(() => {
  //   // Initial check when the component mounts
  //   // checkTokenExpiration();

  //   console.log("THIS IS USE EFFECT");
  // }, [navigation]);

  //This is the 2-Way to use to prevent going back in LoginPage when im currently in HomePage. Go to KodiVerifikimit for WAY-1
  /*
  const handleBackButton = () => {
    if (isFocused) {
      // Handle the back button press here for MainComponent
      // You can either do nothing or show a message to the user
      return true; // Prevent the default behavior
    }

    // Allow the default behavior on other screens
    return false;
  };
  useEffect(() => {
    BackHandler.addEventListener("hardwareBackPress", handleBackButton);

    return () => {
      BackHandler.removeEventListener("hardwareBackPress", handleBackButton);
    };
  }, [isFocused]);


  */

  useEffect(() => {
    checkExistingUser();
  }, []);

  const checkExistingUser = async () => {
    const id = await AsyncStorage.getItem("id");
    const userId = `user${JSON.parse(id)}`;
    const token = await AsyncStorage.getItem("token");

    console.log("INSIDE MAINCOMPONENT:", token);

    // if(token){

    //        const { exp } = jwt_decode(token);

    //       // Get the current timestamp (in seconds)
    //       const currentTimestamp = Math.floor(Date.now() / 1000);

    //       console.log("THIS IS EXP:", exp);
    //       console.log("THIS IS currentTimestamp:", currentTimestamp);

    //       if (exp > currentTimestamp) {
    //         // Token is not expired, navigate to the home page
    //         navigation.dispatch(
    //           CommonActions.reset({
    //             index: 0,
    //             routes: [{ name: "Main" }], // Redirect to the home page
    //           })
    //         );
    // }

    try {
      const currentUser = await AsyncStorage.getItem(userId);

      if (currentUser !== null) {
        const parsedData = JSON.parse(currentUser);
        setUserData(parsedData);
        setUserLogin(true);

        return currentUser;
        console.log("THIS ARE USERDATA :", parsedData);
      }
    } catch (error) {
      console.log("Error retrieving the data: ", error);
    }
  };

  const onRefresh = () => {
    // Perform the refresh action here
    setRefreshing(true);
    // Call the function to refresh or load more data
    // You can update your data here or make an API request to fetch more data
    // After updating the data, setRefreshing(false) to stop the refresh indicator
    // setTimeout(() => {
    //   setRefreshing(false);
    // }, 1500);

    const currentUser = checkExistingUser();
    if (currentUser !== null) {
      const parsedData = JSON.parse(currentUser);
      setUserData(parsedData);
      setRefreshing(false);
    }
  };

  return (
    <>
      {/* <TokenPopUp navigation={navigation}></TokenPopUp> */}
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
          <Header userData={userData} navigation={navigation} />
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
    </>
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
