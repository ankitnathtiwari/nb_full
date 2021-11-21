import React, { useState, useEffect, useRef } from "react";

export const useOpen = () => {
  const [isOpen, setIsOpen] = useState(false);
  const editRef = useRef();

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  const handleIsOpen = (e) => {
    if (!editRef.current.contains(e.target)) {
      setIsOpen(false);
    }
  };
  useEffect(() => {
    document.addEventListener("mousedown", handleIsOpen);
    return () => {
      document.removeEventListener("mousedown", handleIsOpen);
    };
  }, []);

  return { isOpen, handleOpen, editRef };
};
