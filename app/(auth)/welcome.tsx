import { View, Text, TouchableOpacity, Image } from "react-native";
import React, { useRef, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";
import Swiper from "react-native-swiper";
import { onboarding } from "@/constants";
import CustomButton from "@/components/CustomButton";

const Onboarding = () => {
  const swiperRef = useRef<Swiper>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const isLastSlide = currentSlide === onboarding.length - 1;
  return (
    <SafeAreaView className="flex h-full items-center justify-between">
      <TouchableOpacity
        className="w-full flex justify-end items-end p-5"
        onPress={() => router.replace("/(auth)/sign-up")}
      >
        <Text className="text-black text-md font-JakartaBold">Skip</Text>
      </TouchableOpacity>
      <Swiper
        ref={swiperRef}
        dot={
          <View className="w-[32px] mt-4 h-[4px] mx-1 bg-[#E2E8F0] rounded-full" />
        }
        activeDot={
          <View className="w-[32px] mt-4 h-[4px] mx-1 bg-[#000000] rounded-full" />
        }
        loop={false}
        onIndexChanged={(index) => setCurrentSlide(index)}
      >
        {onboarding.map((item) => (
          <View key={item.id} className="flex items-center justify-center p-5">
            <Image
              source={item.image}
              className="w-full h-[280px]"
              resizeMode="contain"
            />
            <View className="flex flex-row items-center justify-center w-full mt-7r">
              <Text className="text-black  text-3xl font-bold mx-10 text-center">
                {item.title}
              </Text>
            </View>
            <Text className="  text-[#858585] text-lg  font-JakartaSemiBold mx-10 mt-3 text-center">
              {item.description}
            </Text>
          </View>
        ))}
      </Swiper>
      <CustomButton
        title={isLastSlide ? "Get Started" : "Next"}
        className="w-11/12 mt-10"
        onPress={() =>
          isLastSlide
            ? router.replace("/(auth)/sign-up")
            : swiperRef.current?.scrollBy(1)
        }
      />
    </SafeAreaView>
  );
};

export default Onboarding;
