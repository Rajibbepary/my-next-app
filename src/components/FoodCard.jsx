import React from "react";
import CardButton from "./button/CardButton";

const FoodCard = ({ food }) => {
  return (
    <div className="max-w-sm overflow-hidden rounded-2xl bg-white shadow-lg transition hover:shadow-xl">
      {/* Image */}
      <div className="h-56 overflow-hidden">
        <img
          src={food.image}
          alt={food.title}
          className="h-full w-full object-cover transition duration-300 hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="p-5">
        <span className="rounded-full bg-orange-100 px-3 py-1 text-sm font-medium text-orange-600">
          {food.category}
        </span>

        <h2 className="mt-3 text-2xl font-bold text-gray-800">
          {food.title}
        </h2>

        <div className="mt-4 flex items-center justify-between">
          <p className="text-xl font-bold text-orange-500">
            ${food.price}
          </p>

          <CardButton></CardButton>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;