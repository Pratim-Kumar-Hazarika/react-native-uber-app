import { Image, Text, View } from "react-native";

import { icons, images } from "@/constants";
import { formatDate, formatTime } from "@/lib/utils";
import { Ride } from "@/types/type";

const RideCard = ({ ride }: { ride: Ride }) => {
  return (
    <View className="flex h-[150px]  flex-row items-center justify-center bg-white rounded-lg  border border-gray-100 shadow-neutral-300 mb-3">
      <View className="flex flex-row items-start justify-center p-3">
        <View className="flex flex-row items-center justify-between">
          <Image
            resizeMode="contain"
            source={images.uberx}
            className="w-[100px] max-h-[90px] rounded-lg"
          />

          <View className="flex flex-col  items-start   gap-y-3 flex-1">
            <View className="flex flex-col ">
              <Text className="text-lg  font-JakartaSemiBold" numberOfLines={3}>
                {ride.destination_address}
              </Text>
              <Text className="text-md  flex  flex-row items-start mt-2 font-JakartaMedium">
                {formatDate(ride.created_at)}, {formatTime(ride.ride_time)}
              </Text>
              <Text className={`text-md capitalize mt-2  font-Jakarta `}>
                ₹{ride.fare_price}
              </Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default RideCard;
