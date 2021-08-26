import React, { useState, useEffect } from "react";
export const Location = () => {
  const [coordinates, setCoordinates] = useState({
    latitude: "",
    longitude: "",
  });
  //Form Item for changing location
  //Current Locaiton Item
  const Position = (position) => {
    setCoordinates({
      latitude: position.coords.latitude,
      longitude: position.coords.longitude,
    });
  };
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(Position);
  }, []);

  return (
    <div>
      <h1>{`Latitude: ${coordinates.latitude} Longitude: ${coordinates.longitude}`}</h1>
      <h2>Form Items</h2>
    </div>
  );
};
