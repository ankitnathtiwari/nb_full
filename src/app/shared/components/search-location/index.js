import React, { useState, useEffect } from "react";
import { locations } from "../../../../mocks/database/location";
import { suggestionList } from "./suggestions";
import "./index.css";
import { Button } from "../button";
import { PermissionMessage } from "./permission_message";
import { useGeoLocation } from "./useGeoLocation";
import { initLocation } from "./init_state";

export const SearchLocation = ({ locationHandler }) => {
  const [currentLocation, setCurrentLocation] = useState(initLocation);
  const [selectedLocation, setSelectedLocation] = useState(initLocation);
  const [inputValue, setInputValue] = useState("");
  const [toggleSuggestion, setToggleSuggestion] = useState(true);
  const [msg, setMsg] = useState(false);
  const [locationPermission, setLocationPermission] = useState(false);
  const suggestedLocations = suggestionList(inputValue);
  const handleToggleSuggestion = (item) => {
    setToggleSuggestion(item);
  };

  const handleInput = (e) => {
    setInputValue(e.target.value);
    handleToggleSuggestion(true);
    setMsg(false);
  };
  const handleCurrenLocation = () => {
    //after click check if lat long of current location is present or not
    //if present fill the input with current location
    //else print a message "location access permission denied on you device.
    //please enable it. for help click here".
    setCurrentLocation(currentLocation);
  };
  const handleSuggestionSelect = (item) => {
    setInputValue(item.place_name);
    setSelectedLocation(item);
    handleToggleSuggestion(false);
  };
  const handleSubmit = () => {
    if (selectedLocation.id) {
      locationHandler(currentLocation, selectedLocation);
    } else {
      setMsg(true);
    }
  };
  useGeoLocation(setCurrentLocation, setLocationPermission);

  return (
    <div className='search-location'>
      <div>
        <PermissionMessage locationPermission={locationPermission} />

        <input
          className='search-location-input'
          placeholder='Type Your District Name'
          value={inputValue}
          onChange={handleInput}
        />
      </div>

      {toggleSuggestion ? (
        <ul className='search-location-list'>
          {msg ? (
            <li style={{ color: "red" }}>Please Select The Location</li>
          ) : null}
          <li onClick={handleCurrenLocation}>Current Location</li>

          {suggestedLocations.map((location) => {
            return (
              <li
                key={location.place_name}
                onClick={() => {
                  handleSuggestionSelect(location);
                }}>
                {location.place_name}
              </li>
            );
          })}
        </ul>
      ) : null}

      <Button
        onClick={handleSubmit}
        item={{
          type: "BUTTON",
          id: "submit",
          value: "submit",
        }}>
        Submit
      </Button>
    </div>
  );
};
