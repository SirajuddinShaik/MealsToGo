import camelize from "camelize";

import { locations } from "./location.mock";

export const locationRequest = (searchTerm) => {
  return new Promise((resolve, reject) => {
    const locationMock = locations[searchTerm];
    if (!locationMock) {
      reject("Not Found");
    } else {
      resolve(locationMock);
    }
  });
};

export const loactionTransformed = (result) => {
  const { geometry = {} } = camelize(result.results[0]);
  const { lat, lng } = geometry.location;
  return { lat, lng };
};
