import React, { useState, useEffect } from "react";
export const useGeoLocation = (setCurrentLocation, setLocationPermission) => {
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setCurrentLocation({
          id: "current",
          place_name: "",
          lat: position.coords.latitude,
          long: position.coords.longitude,
        });
      },
      (error) => {
        switch (error.code) {
          case error.PERMISSION_DENIED:
            return setLocationPermission(true);
          case error.POSITION_UNAVAILABLE:
            return setLocationPermission(true);
          case error.TIMEOUT:
            return setLocationPermission(true);
          case error.UNKNOWN_ERROR:
            return console.log("unknown error");
        }
      }
    );
    return () => {};
  }, []);
};
