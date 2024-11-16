import React from "react";
import BoxColor from "./BoxColor";

function ListColor({ changeColor}) {
    const colors = [
        { text: "Red", bgColor: "bg-red-500" },
        { text: "orange", bgColor: "bg-orange-500" },
        { text: "yellow", bgColor: "bg-yellow-500" },
        { text: "Green", bgColor: "bg-green-500" },
        { text: "Blue", bgColor: "bg-blue-500" },
        { text: "fuchsia", bgColor: "bg-fuchsia-500" },
        
      ];
  return (
  <>

    <ul className="w-64  grid grid-cols-3 grid-rows-3   gap-2  justify-center items-center ">
      {colors.map((color, idx) => (
        <li
          key={idx}
          className={`cursor-pointer text-white  px-4 py-2 rounded ${color.bgColor}`}
          onClick={() => changeColor(color.bgColor)}
        >
          {color.text}
        </li>
      ))}
    </ul></>
  );
}

export default ListColor;
