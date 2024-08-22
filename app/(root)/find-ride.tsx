import { View, Text } from "react-native";
import React from "react";
import { useLocationStore } from "@/store";

const FindRide = () => {
  const { userAddress, destinationAddress } = useLocationStore();
  return (
    <View>
      <Text className="text-2xl">Your are here :{userAddress}</Text>
      <Text className="text-2xl">Your are gointo :{destinationAddress}</Text>
    </View>
  );
};

export default FindRide;
