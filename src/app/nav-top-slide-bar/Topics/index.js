import React, { useState, useEffect } from "react";
import { Button } from "../../shared/components/button";
import "./index.css";

export const Topics = ({ globalDispatch }) => {
  // have to use custom div elements for topics
  const [topicValue, setTopicValue] = useState({
    all: "all",
    politics: "politics",
    sports: "sports",
    business: "business",
    entertainment: "entertainment",
    world: "world",
    scienceandtech: "scienceandtech",
  });
  const handleTopicChange = (e) => {
    setTopicValue(e.target.value);
  };

  useEffect(() => {
    return () => {};
  }, [topicValue]);
  return (
    <div className='custom-select'>
      <Button>Topics</Button>
      <div>
        <Button
          onClick={globalDispatch({
            type: "TOPIC_CHANGE",
            payload: "all",
          })}>
          All
        </Button>
        <Button
          onClick={globalDispatch({
            type: "TOPIC_CHANGE",
            payload: "politics",
          })}>
          Politics
        </Button>
        <Button
          onClick={globalDispatch({
            type: "TOPIC_CHANGE",
            payload: "business",
          })}>
          Business
        </Button>
        <Button
          onClick={globalDispatch({
            type: "TOPIC_CHANGE",
            payload: "entertainment",
          })}>
          Entertainment
        </Button>
        <Button
          onClick={globalDispatch({
            type: "TOPIC_CHANGE",
            payload: "world",
          })}>
          World
        </Button>
        <Button
          onClick={globalDispatch({
            type: "TOPIC_CHANGE",
            payload: "scienceandtech",
          })}>
          Science and Technology
        </Button>
      </div>
    </div>
  );
};
