import FoodCard from "@/components/FoodCard";
import { foods } from "../../../public/assects";

const FoodPage = () => {

const allFood = foods || []

    return (
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-4 mt-6">
            {
                allFood.map((food)=>(
                    <FoodCard key={food.id} food={food}></FoodCard>
                ))
            }
        </div>
    );
};

export default FoodPage;