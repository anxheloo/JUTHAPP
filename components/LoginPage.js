import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  TouchableWithoutFeedback,
  Keyboard,
  Dimensions,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const LoginPage = () => {
  const defaultPhoneNumber = "+355 6 _ _ _ _ _ _ _ _";
  const [phoneNumber, setPhoneNumber] = useState(defaultPhoneNumber);

  const onClickMyButton = () => {
    setPhoneNumber("+355 6");
  };

  const handlePhoneNumberChange = (text) => {
    const formattedNumber = text
      .replace(/\D/g, "") // Remove all non-digit characters
      .slice(0, 8); // Limit the length to 8 digits
    setPhoneNumber(text);
  };

  const handleSubmit = () => {
    console.log(phoneNumber);
  };

  const dismissKeyboard = () => {
    Keyboard.dismiss();
  };

  return (
    <TouchableWithoutFeedback onPress={dismissKeyboard}>
      <LinearGradient
        style={styles.container}
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
        <View style={styles.logoContainer}>
          <Image
            style={styles.image}
            source={require("../assets/images/unnamed.png")}
          ></Image>
        </View>
        <View style={styles.formContainer}>
          <View>
            <Text style={styles.text}>Vendos numrin e telefonit</Text>
            <TextInput
              style={styles.input}
              keyboardType="phone-pad"
              value={phoneNumber}
              onChangeText={handlePhoneNumberChange}
              onPressIn={onClickMyButton}
              maxLength={13}
            />
          </View>
          <View>
            <TouchableOpacity
              style={styles.buttonContainer}
              onPress={handleSubmit}
            >
              <Text style={styles.buttonText}>HYR</Text>
            </TouchableOpacity>
          </View>
        </View>
      </LinearGradient>
    </TouchableWithoutFeedback>
  );
};

const windowHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },
  logoContainer: {
    marginBottom: 20,
    flex: 2,
    alignItems: "center",
    justifyContent: "center",
    marginTop: windowHeight * 0.1,
  },
  formContainer: {
    width: "80%",
    flex: 2,
  },
  input: {
    height: 52,
    padding: 10,
    paddingLeft: 20,
    backgroundColor: "white",
    borderRadius: 16,
    fontSize: 20,
  },
  buttonContainer: {
    backgroundColor: "#25a8dd", // Set your desired button background color
    paddingVertical: 12,
    alignItems: "center",
    borderRadius: 16,
    marginTop: windowHeight * 0.15,
  },
  buttonText: {
    color: "#FFF",
    fontSize: 25,
    fontWeight: "bold",
  },

  image: {
    width: 100,
    height: 100,
    margin: 20,
  },

  text: {
    color: "white",
    fontSize: 16,
    paddingBottom: 10,
  },
});

export default LoginPage;
