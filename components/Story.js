import React from "react";
import { View, Text, Image, StyleSheet, ScrollView } from "react-native";
import StoryItem from "./StoryItem";

const Story = () => {
  return (
    <View>
      <ScrollView
        style={styles.contentContainer}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      >
        <StoryItem text={"Unlimited"}></StoryItem>
        <StoryItem text={"New Dashboard"}></StoryItem>
        <StoryItem text={"Tik Tok Pass"}></StoryItem>
        <StoryItem text={"JUTH with a Purpose"}></StoryItem>
        <StoryItem text={"Spin the wheel"}></StoryItem>
        <StoryItem text={"Gigamarket"}></StoryItem>
        <StoryItem text={"Born to Change"}></StoryItem>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    height: "16%",
    paddingHorizontal: "3%",
    paddingTop: "4%",
    marginBottom: "3%",
    // backgroundColor: "white",
  },
});

export default Story;
