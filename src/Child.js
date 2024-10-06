import React, { useEffect } from "react";

const Child = ({ returnComment }) => {
  useEffect(() => {
    console.log("Function is invoked");
  }, [returnComment]);
  return <div>{returnComment("Virat")}</div>;
};

export default Child;
