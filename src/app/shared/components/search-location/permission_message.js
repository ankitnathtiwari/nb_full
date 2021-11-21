import React, { useState, useEffect } from "react";
export const PermissionMessage = ({ locationPermission }) => {
  return locationPermission ? (
    <div>
      Please Allow Location Permission from browser settings
      <a
        href='https://support.google.com/chrome/answer/142065?hl=en'
        target='_blank'>
        Help
      </a>
    </div>
  ) : null;
};
