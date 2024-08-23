import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import MapView, { Marker, PROVIDER_DEFAULT } from "react-native-maps";
import { useDriverStore, useLocationStore } from "@/store";
import { calculateRegion, generateMarkersFromData } from "@/lib/map";
import { mockDriverData } from "@/mock-data/driver";
import { MarkerData } from "@/types/type";
import { icons } from "@/constants";
const Map = () => {
  const {
    userLongitude,
    userLatitude,
    destinationLatitude,
    destinationLongitude,
  } = useLocationStore();
  const region = calculateRegion({
    userLongitude,
    userLatitude,
    destinationLatitude,
    destinationLongitude,
  });
  const { selectedDriver, setDrivers } = useDriverStore();
  const [markers, setMarkers] = useState<MarkerData[]>([]);
  useEffect(() => {
    setDrivers(mockDriverData);
    if (Array.isArray(mockDriverData)) {
      if (!userLatitude || !userLongitude) return;
      const newMarkers = generateMarkersFromData({
        data: mockDriverData,
        userLatitude,
        userLongitude,
      });
      setMarkers(newMarkers);
    }
  }, [mockDriverData]);
  return (
    <MapView
      tintColor="black"
      mapType="mutedStandard"
      showsPointsOfInterest={false}
      provider={PROVIDER_DEFAULT}
      initialRegion={region}
      className="w-full h-full rounded-2xl"
      showsUserLocation={true}
      userInterfaceStyle="light"
    >
      {markers.map((marker) => (
        <Marker
          key={marker.id}
          coordinate={{
            latitude: marker.latitude,
            longitude: marker.longitude,
          }}
          title={marker.title}
          image={
            selectedDriver === marker.id ? icons.selectedMarker : icons.marker
          }
        />
      ))}
    </MapView>
  );
};

export default Map;
