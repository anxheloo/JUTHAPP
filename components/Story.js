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
        <StoryItem></StoryItem>
        <StoryItem></StoryItem>
        <StoryItem></StoryItem>
        <StoryItem></StoryItem>
        <StoryItem></StoryItem>
        <StoryItem></StoryItem>
        <StoryItem></StoryItem>
        <StoryItem></StoryItem>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    // flex: 2,
    height: "15%",
    padding: 20,
  },
});

export default Story;
