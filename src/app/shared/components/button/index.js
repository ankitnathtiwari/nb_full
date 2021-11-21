import React, { useState, useEffect } from "react";
import { formItems } from "../../../body/body-components/create/formItems";
import "./index.css";

//if icons is also associated with the button then change location
//then provid the img tag or not
export const Button = ({ children, onClick, disabled, item }) => {
  if (disabled) {
    return (
      <button className='button' disabled onClick={() => onClick()}>
        {children}
      </button>
    );
  }

  if (item.icon) {
    return (
      <div
        className={item.className ? item.className : "button"}
        onClick={() => onClick()}>
        {
          <div className='icon'>
            <div>
              <img src={item.icon} />
            </div>
            <div className='icon-text'>{children}</div>
          </div>
        }
      </div>
    );
  }

  return (
    <button
      className={item.className ? item.className : "button"}
      onClick={() => onClick()}>
      {children}
    </button>
  );
};
