import React, { useState, useEffect } from "react";
import { Button } from "../button";
import { Input } from "../input/index";
import { Select } from "../select/index";
import { Textarea } from "../textarea/index";
import { UploadInput } from "../upload-img/index";

export const Form = ({ formItems, dispatch, globalDispatch }) => {
  //map through the form itms and based on their type return element
  const forms = (item, dispatch) => {
    switch (item.type) {
      case "INPUT":
        return <Input key={item.id} item={item} dispatch={dispatch} />;
      case "TEXTAREA":
        return <Textarea key={item.id} item={item} dispatch={dispatch} />;
      case "SELECT":
        return <Select key={item.id} item={item} dispatch={dispatch} />;
      case "BUTTON":
        return (
          <Button
            key={item.id}
            onClick={() =>
              dispatch({
                type: "BUTTON_CLICKED",
                payload: {
                  current_item: item,
                  formItems: formItems,
                },
              })
            }>
            {item.value}
          </Button>
        );
      default:
        null;
    }
  };

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      {formItems.map((item) => {
        return <div key={item.id}>{forms(item, dispatch)}</div>;
      })}
    </form>
  );
};
