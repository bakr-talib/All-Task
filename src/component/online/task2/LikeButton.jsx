import React, { useState } from "react";
import Star from './star.png'
const LikeButton = () => {
  const [liked, setLiked] = useState(false);

  const handelChange = () => {
    setLiked((prevLiked) => !prevLiked);
  };

  return (
    <div className="w-[200px] h-[200px] bg-slate-400 rounded-3xl m-10 flex justify-center items-center">
            <button 
      onClick={ handelChange}
      className={`flex justify-center items-center text-[30px] px-4 py-2 rounded-full border-2 font-semibold transition duration-300 ${
        liked ? "bg-blue-500 text-white border-blue-500" : "bg-white text-black border-gray-300"
      }`}
    >
      {liked ? "Liked " : "Like "}
      <img className="w-[30px] inline mx-2 " src={Star}  alt="" />
    </button>
    </div>
  );
};

export default LikeButton;
