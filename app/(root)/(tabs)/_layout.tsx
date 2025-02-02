import { Tabs } from "expo-router";
import { Image, ImageSourcePropType, View, Text } from "react-native";

import { icons } from "@/constants";

const TabIcon = ({
  source,
  focused,
}: {
  source: ImageSourcePropType;
  focused: boolean;
}) => (
  <View className={`flex flex-row justify-center items-center rounded-full `}>
    <View className={`rounded-full w-12 h-12 items-center justify-center `}>
      <Image
        source={source}
        tintColor={focused ? "white" : "#333333"}
        resizeMode="contain"
        className="w-7 h-7"
      />
    </View>
  </View>
);

export default function Layout() {
  return (
    <Tabs
      initialRouteName="index"
      screenOptions={{
        tabBarActiveTintColor: "white",
        tabBarInactiveTintColor: "white",
        tabBarShowLabel: true,
        tabBarStyle: {
          backgroundColor: "#000000",
          // borderRadius: 50,
          paddingBottom: 30, // ios only
          paddingTop: 10,

          overflow: "hidden",
          marginHorizontal: 0,
          // marginBottom: 20,
          height: 90,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexDirection: "row",
          position: "absolute",
        },
        tabBarLabelStyle: {
          marginTop: 18,
        },
        tabBarIconStyle: {
          marginTop: 15,
        },
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: "Home",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon source={icons.home} focused={focused} />
          ),
        }}
      />
      <Tabs.Screen
        name="rides"
        options={{
          title: "Rides",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon source={icons.list} focused={focused} />
          ),
        }}
      />
      <Tabs.Screen
        name="chat"
        options={{
          title: "Chat",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon source={icons.chat} focused={focused} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon source={icons.profile} focused={focused} />
          ),
        }}
      />
    </Tabs>
  );
}
