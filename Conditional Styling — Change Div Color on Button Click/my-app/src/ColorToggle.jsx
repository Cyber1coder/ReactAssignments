import { useState } from "react";

const ColorToggle = () => {
  const [isRed, setIsRed] = useState(true);

  return (
    <div>
      <div
        style={{
          backgroundColor: isRed ? "red" : "blue",
          color: "white",
          padding: "20px",
          height:"50px",
          width:"60px",
          textAlign:"center",
        }}
      >
        Color Box
      </div>

      <button onClick={() => setIsRed(!isRed)}>
        Toggle Color
      </button>
    </div>
  );
};

export default ColorToggle;
