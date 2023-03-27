import React from "react";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import { Platform } from "react-native";

import { RestaurantsScreen } from "../../features/restaurants/screens/restaurants.screen";
import { RestaurantDetailScreen } from "../../features/restaurants/screens/restaurant-detail.screen";

const RestaurantStack = createStackNavigator();

export const RestaurantsNavigator = () => {
  return (
    <RestaurantStack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: { backgroundColor: "#fff" },
        ...(Platform.OS === "android"
          ? {
              animationEnabled: true,
              gestureEnabled: true,
              cardStyleInterpolator: ({ current: { progress } }) => {
                return {
                  cardStyle: {
                    transform: [
                      {
                        translateY: progress.interpolate({
                          inputRange: [0, 1],
                          outputRange: [500, 0],
                        }),
                      },
                    ],
                  },
                  overlayStyle: {
                    opacity: progress.interpolate({
                      inputRange: [0, 1],
                      outputRange: [0, 0.5],
                    }),
                  },
                };
              },
            }
          : TransitionPresets.SlideFromBottomIOS), // Add slide-up transition
      }}
    >
      <RestaurantStack.Screen
        name="Restaurants"
        component={RestaurantsScreen}
      />
      <RestaurantStack.Screen
        name="RestaurantDetail"
        component={RestaurantDetailScreen}
      />
    </RestaurantStack.Navigator>
  );
};
