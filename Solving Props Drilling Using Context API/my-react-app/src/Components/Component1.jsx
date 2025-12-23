import Component2 from "./Component2";
import { AppContext } from "../Context/AppContext";


const Component1 = () => {
  const values = {
    a: "apple",
    b: "batman",
    c: "cat",
    d: "dog",
    e: "elephant",
    f: "fish",
  };

  return (
    <div>
      <AppContext.Provider value={values}>
        <Component2 />
      </AppContext.Provider>
    </div>
  );
};

export default Component1;
