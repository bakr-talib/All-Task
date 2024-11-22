import React from "react";

export default function BoxColor({ color }) {
  return (
    <div
      className={`w-64 h-64 border-2 rounded-3xl border-gray-300 ${color}`}
    ></div>
  );
}


