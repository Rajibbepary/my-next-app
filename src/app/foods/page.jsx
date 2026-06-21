'use client'
import FoodCard from "@/components/FoodCard";
import { foods } from "../../../public/assects";
import { useState } from "react";

export default function FoodPage() {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = [
    "All",
    ...new Set(foods.map((food) => food.category)),
  ];

  const filteredFoods = foods.filter((food) => {
    const matchSearch = food.title
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchCategory =
      selectedCategory === "All" ||
      food.category === selectedCategory;

    return matchSearch && matchCategory;
  });

  return (
    <div className="max-w-7xl mx-auto p-6">
      {/* Search + Filter */}
      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <input
          type="text"
          placeholder="Search food..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="flex-1 border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-orange-500"
        />

        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-orange-500"
        >
          {categories.map((category) => (
            <option className="text-blue-500" key={category}>{category}</option>
          ))}
        </select>
      </div>

      {/* Food Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredFoods.length > 0 ? (
          filteredFoods.map((food) => (
            <FoodCard key={food.id} food={food} />
          ))
        ) : (
          <h2 className="text-xl font-semibold text-gray-500">
            No food found!
          </h2>
        )}
      </div>
    </div>
  );
}