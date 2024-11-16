import { useState } from "react";

import BoxClear from "./component/task1/BoxClear";
import ListColor from "./component/task1/ListColor";
import BoxColor from "./component/task1/BoxColor";
//==========task1========
// I made some adjustments so that the code looks clean.
// 1) Using the variable for the function
// 2) made a component for the button
// 3) same additional styles
// 4) Add more colors to try out the ease of adding and modifying.
export default function App() {
  const [color, setColor] = useState("");
  const changeColor = (newColor) => setColor(newColor);
  return (
    <div className="flex flex-row gap-[50px] items-center justify-center h-screen bg-gray-100">
   
        <ListColor changeColor={changeColor} />
      
      <div>
        <BoxColor color={color} />
        <BoxClear Black={() => setColor("bg-black")} />
      </div>
    </div>
  );
}
