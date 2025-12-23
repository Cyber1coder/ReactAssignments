import React, { useContext } from "react";
import Component6 from "./Component6";
import { AppContext } from "../Context/AppContext";

const Component5 = () => {
  const { f } = useContext(AppContext);

  return (
    <div>
      <h4>This is f value from Component5: {f}</h4>
      <Component6 />
    </div>
  );
};

export default Component5;
