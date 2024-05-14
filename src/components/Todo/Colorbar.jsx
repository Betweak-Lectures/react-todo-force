import React from "react";

export default function Colorbar({ colors, onChangeColor }) {
  return (
    <div style={{ display: "flex", flexDirection: "row", margin: 20 }}>
      {colors.map((color, idx) => (
        <div
          key={idx}
          style={{
            borderRadius: 50,
            backgroundColor: color,
            width: 10,
            height: 10,
            cursor: "pointer",
          }}
          onClick={(e) => {
            onChangeColor(color);
          }}
        ></div>
      ))}
    </div>
  );
}
