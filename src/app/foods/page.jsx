import { foods } from "../../../public/assects";

const FoodPage = () => {

const allFood = foods || []

    return (
        <div>
            {
                allFood.map((food)=>(
                    <h1 key={food.id}>{food.title}</h1>
                ))
            }
            <h1>Foods page</h1>
        </div>
    );
};

export default FoodPage;