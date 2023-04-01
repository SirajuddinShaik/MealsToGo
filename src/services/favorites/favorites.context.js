import React, { createContext, useState } from "react";

export const FavoriteContext = createContext();

export const FavoritesContectProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);
  const add = (restaurant) => {
    setFavorites([...favorites, restaurant]);
  };
  const remove = (restaurant) => {
    const newFavorites = favorites.filter(
      (x) => x.placeId !== restaurant.placeId
    );
    setFavorites(newFavorites);
  };
  return (
    <FavoriteContext.Provider
      value={{ favorites, addToFavorites: add, removeFromFavorites: remove }}
    >
      {children}
    </FavoriteContext.Provider>
  );
};
