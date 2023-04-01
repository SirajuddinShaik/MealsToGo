import React from "react";
import { ScrollView } from "react-native";
import styled from "styled-components";
import { TouchableOpacity } from "react-native";

import { CompactRestaurantInfo } from "../restaurant/compact-restaurant-info.component";
import { Spacer } from "../spacer/spacer.component";
import { Text } from "../typography/text.component";

const FavouriteWrapper = styled.View`
  padding: 5px;
`;

let key;
export const FavouriteBar = ({ favourites, onNavigate }) => {
  if (!favourites.length) {
    return null;
  }
  return (
    <FavouriteWrapper>
      <Spacer varient="left.large">
        <Text>Favourites</Text>
      </Spacer>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {favourites.map((restaurant) => {
          key = restaurant.name.split(" ").join("");
          return (
            <TouchableOpacity
              key={key}
              onPress={() => {
                onNavigate("RestaurantDetail", { restaurant });
              }}
            >
              <Spacer pos="left" size="medium">
                <CompactRestaurantInfo restaurant={restaurant} />
              </Spacer>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </FavouriteWrapper>
  );
};
