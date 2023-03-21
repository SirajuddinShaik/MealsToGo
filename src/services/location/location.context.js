import React, { useEffect, useState } from "react";

import { loactionTransformed, locationRequest } from "./location.service";

export const LocationContext = React.createContext();

export const LocationContextProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [location, setLocation] = useState(null);
  const [keyword, setKeyword] = useState("san francisco");
  const [error, setError] = useState(null);

  const onSearch = (searchKeyword) => {
    setIsLoading(true);
    setKeyword(searchKeyword);
    if (!searchKeyword.length) {
      return;
    }
    locationRequest(searchKeyword)
      .then(loactionTransformed)
      .then((result) => {
        setIsLoading(false);
        setLocation(result);
        console.log(result);
      })
      .catch((err) => {
        setIsLoading(false);
        setError(err);
        console.log(err);
      });
  };

  return (
    <LocationContext.Provider
      value={{
        isLoading,
        error,
        location,
        search: onSearch,
        keyword,
      }}
    >
      {children}
    </LocationContext.Provider>
  );
};
