import React, { useContext } from "react";
import styled from "styled-components";
import { AntDesign } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";

const FavoriteButton = styled(TouchableOpacity)`
  backgroud-color: transparent;
  border-color: #20232a;
  position: absolute;
  top: 25px;
  right: 0px;
  width: 64px;
  z-index: 9;
`;

import { FavoriteContext } from "../../services/favorites/favorites.context";
export const Favorites = ({ restaurant }) => {
  const { favorites, addToFavorites, removeFromFavorites } =
    useContext(FavoriteContext);
  const isFavorite = favorites.find((x) => x.placeId === restaurant.placeId);
  return (
    <FavoriteButton
      onPress={() => {
        isFavorite
          ? removeFromFavorites(restaurant)
          : addToFavorites(restaurant);
      }}
    >
      <AntDesign
        name={isFavorite ? "heart" : "hearto"}
        size={24}
        color={isFavorite ? "red" : "white"}
      />
    </FavoriteButton>
  );
};
