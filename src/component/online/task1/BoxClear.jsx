import React from "react";

export default function BoxClear({Black}) {
  return (
    <button
      onClick={Black}
      className="bg-black w-64 text-white px-4 py-2 rounded mt-4 hover:bg-gray-800"
    >
      Clear Color
    </button>
  );
}

