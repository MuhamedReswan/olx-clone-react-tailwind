import React from "react";
import { FaCircle, FaRegHeart } from "react-icons/fa";

const Card = () => {
  return (
    <div className="relative h-min mx-auto   sm:col-span-3 flex flex-col border-2 border-black rounded-md bg-gray-100">
      <div className="mx-auto">
        <img
          className=" m-3 max-w-60"
          src="https://apollo.olx.in/v1/files/k774xqfchf9j-IN/image;s=300x600;q=60"
          alt=""
        />
        <FaCircle className="absolute top-4 right-7 w-9 h-9 text-white">
          {" "}
        </FaCircle>
        <FaRegHeart className="absolute top-6 right-9 w-5 h-5"></FaRegHeart>
      </div>
      <div className=" ps-5 pb-3 text-start m-auto  ">
        <h2 className="font-bold">$ 734534.00</h2>
        <p className="font-semibold">Name</p>
        <p>Description </p>
        <p>
          3bhk & servant apartment in society with good location , all amenities
        </p>
        <p className="text-sm">location</p>
      </div>
    </div>
  );
};

export default Card;
