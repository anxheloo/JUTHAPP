import React, { useState } from "react";
import {
  View,
  ScrollView,
  FlatList,
  TouchableOpacity,
  Text,
  StyleSheet,
} from "react-native";

const TabContent = ({ data }) => {
  return (
    <FlatList
      horizontal
      data={data}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <View style={styles.tabContent}>
          <Text style={styles.tabText}>{item.title}</Text>
        </View>
      )}
    />
  );
};

const TabBar = ({ tabs, activeTab, onPressTab }) => {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.tabBar}
    >
      {tabs.map((tab) => (
        <TouchableOpacity
          key={tab.id}
          style={[styles.tab, activeTab === tab.id ? styles.activeTab : null]}
          onPress={() => onPressTab(tab.id)}
        >
          <Text style={styles.tabText}>{tab.title}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

const TabbedComponent = () => {
  const [activeTab, setActiveTab] = useState(1);

  const tabs = [
    { id: 1, title: "Tab 1" },
    { id: 2, title: "Tab 2" },
    { id: 3, title: "Tab 3" },
  ];

  const data = [
    { id: 1, title: "Content 1" },
    { id: 2, title: "Content 2" },
    { id: 3, title: "Content 3" },
  ];

  const onPressTab = (tabId) => {
    setActiveTab(tabId);
  };

  return (
    <View style={styles.container}>
      <TabBar tabs={tabs} activeTab={activeTab} onPressTab={onPressTab} />
      <TabContent data={data} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  tabBar: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
  },
  tab: {
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  activeTab: {
    borderBottomWidth: 2,
    borderBottomColor: "blue",
  },
  tabText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  tabContent: {
    width: "100%",
    height: 200,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f2f2f2",
  },
});

export default TabbedComponent;
