import * as React from "react";
import { View, useWindowDimensions, StyleSheet } from "react-native";
import { TabView, SceneMap, TabBar } from "react-native-tab-view";
import OptionComponent from "./OptionComponent";

const FirstRoute = () => (
  <View style={styles.firstTab}>
    <View style={styles.firstRow}>
      <OptionComponent
        text={"Balanca"}
        onPress={() => {
          console.log("Balanca 1 pressed");
        }}
      ></OptionComponent>
      <OptionComponent
        text={"Transfero"}
        onPress={() => {
          console.log("Balanca 2 pressed");
        }}
      ></OptionComponent>
    </View>

    <View style={styles.secondRow}>
      <OptionComponent
        text={"Vodafone More"}
        onPress={() => {
          console.log("Balanca 3 pressed");
        }}
      ></OptionComponent>
      <OptionComponent
        text={"FlowerBox"}
        onPress={() => {
          console.log("Balanca 4 pressed");
        }}
      ></OptionComponent>
    </View>
  </View>
);

const SecondRoute = () => (
  <View style={styles.firstTab}>
    <View style={styles.firstRow}>
      <OptionComponent
        text={"Spin the Wheel"}
        onPress={() => {
          console.log("Balanca 5 pressed");
        }}
      ></OptionComponent>
      <OptionComponent
        text={"Giga Space"}
        onPress={() => {
          console.log("Balanca 6 pressed");
        }}
      ></OptionComponent>
    </View>

    <View style={styles.secondRow}>
      <OptionComponent
        text={"XP Events"}
        onPress={() => {
          console.log("Balanca 7 pressed");
        }}
      ></OptionComponent>
      <OptionComponent
        text={"Pupthi"}
        onPress={() => {
          console.log("Balanca 8 pressed");
        }}
      ></OptionComponent>
    </View>
  </View>
);

const ThirdRoute = () => (
  <View style={styles.thirdTab}>
    <OptionComponent
      text={"Junior Job Opportunities"}
      onPress={() => {
        console.log("Balanca 9 pressed");
      }}
    ></OptionComponent>
  </View>
);

const renderScene = SceneMap({
  first: FirstRoute,
  second: SecondRoute,
  third: ThirdRoute,
});

const TabViewExample = () => {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: "first", title: "Connectivity" },
    { key: "second", title: "Entertainment" },
    { key: "third", title: "Future" },
  ]);

  const renderTabBar = (props) => (
    <TabBar
      {...props}
      indicatorStyle={{
        backgroundColor: "white",
        width: 20,
        marginHorizontal: 60,
        marginTop: 20,
      }}
      labelStyle={{
        fontSize: 15,
        // fontWeight: "bold",
        textTransform: "none",
      }}
      style={{
        backgroundColor: "transparent",
        marginTop: 10,
      }}
    />
  );

  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      // initialLayout={{ width: layout.width }}
      style={styles.tabBar}
      renderTabBar={renderTabBar}
    />
  );
};

const styles = StyleSheet.create({
  firstTab: {
    flex: 1,
    padding: "2%",
    gap: 30,
    marginTop: "5%",
  },

  firstRow: {
    flexDirection: "row",
    justifyContent: "space-around",
  },

  secondRow: {
    flexDirection: "row",
    justifyContent: "space-around",
  },

  thirdTab: {
    flex: 1,
    padding: 20,
    alignItems: "center",
    marginTop: "2%",
  },

  tabBar: {
    marginTop: "5%",
  },
});

export default TabViewExample;
