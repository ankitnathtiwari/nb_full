import React, { useState, useEffect } from "react";
export const Topics = () => {
  return (
    <select name='Topics' id='cars'>
      <option value='all'>All</option>
      <option value='politics'>Politics</option>
      <option value='sports'>Sports</option>
      <option value='business'>Business</option>
      <option value='entertainment'>Entertainment</option>
      <option value='world'>World</option>
      <option value='scienceandtech'>Science and Technology</option>
    </select>
  );
};
