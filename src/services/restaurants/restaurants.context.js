import React, { useState, createContext, useEffect, useMemo } from "react";

import {
  restaurantsRequest,
  restaurantsTransform,
} from "./restaurants.service";

export const RestaurantsContext = createContext();

export const RestaurantsContextProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [restaurants, setRestaurants] = useState([]);

  const retrieveRestaurants = () => {
    setIsLoading(true);
    setTimeout(() => {
      restaurantsRequest("37.7749295,-122.4194155")
        .then(restaurantsTransform)
        .then((restaurant) => {
          setRestaurants(restaurant);
          setIsLoading(false);
        })
        .catch((err) => {
          setError(err);
          console.log(err);
          setIsLoading(false);
        });
    }, 2000);
  };
  useEffect(() => {
    retrieveRestaurants();
  }, []);
  return (
    <RestaurantsContext.Provider
      value={{
        restaurants,
        isLoading,
        error,
      }}
    >
      {children}
    </RestaurantsContext.Provider>
  );
};
