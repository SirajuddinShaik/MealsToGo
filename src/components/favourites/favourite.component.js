import React, { useContext } from "react";
import styled from "styled-components";
import { AntDesign } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";

const FavouriteButton = styled(TouchableOpacity)`
  backgroud-color: transparent;
  border-color: #20232a;
  position: absolute;
  top: 25px;
  right: 0px;
  width: 64px;
  z-index: 9;
`;

import { FavouriteContext } from "../../services/favourites/favourites.context";
export const Favourites = ({ restaurant }) => {
  const { favourites, addToFavourites, removeFromFavourites } =
    useContext(FavouriteContext);
  const isFavourite = favourites.find((x) => x.placeId === restaurant.placeId);
  return (
    <FavouriteButton
      onPress={() => {
        isFavourite
          ? removeFromFavourites(restaurant)
          : addToFavourites(restaurant);
      }}
    >
      <AntDesign
        name={isFavourite ? "heart" : "hearto"}
        size={24}
        color={isFavourite ? "red" : "white"}
      />
    </FavouriteButton>
  );
};
