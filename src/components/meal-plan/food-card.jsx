import React, { useState, useEffect } from "react";
import OrderItemModal from "../order/order-item-modal";

const FoodCard = ({
  type,
  food,
  icons,
  kibble,
  selectCookedFood,
  selectedCookedRecipes,
  selectKibbleRecipe,
  selected,
  selectedLength,
}) => {
  if (!selectedCookedRecipes && !kibble) return null

  const [details, openDetails] = useState(false);
  const kibbleOnlyNull = kibble.some(function (el) {
    return el !== null;
  });
  //const [recipe_, setRecipe] = useState("");


  const selectedText = "bg-green-700 border border-green-700 hover:border-transparent focus:outline-none text-white text-sm md:text-base font-bold p-1 md:py-2 md:px-5 w-4/5 rounded-xl mt-2 md:mt-0"
  const unSelectedText = "bg-transparent border border-green-700 hover:border-transparent focus:outline-none hover:bg-green-700 text-primary hover:text-white font-bold text-sm md:text-base w-4/5 p-1 md:py-2 md:px-5 rounded-xl border-green  mt-2 md:mt-0"
  return (
    <div className="rounded-xl md:h-40 w-full mb-4 flex md:flex-row flex-col overflow-hidden">
      <div
        className={
          type === "kibble"
            ? `bg-kibble-${food.recipe} w-auto md:w-1/2 h-full flex items-center justify-center h-1/2 md:h-auto relative`
            : `bg-${food.recipe} w-auto md:w-1/2 h-full flex items-center justify-center h-1/2 md:h-auto relative`
        }
      >
        {food.new && (
          <div className="recipeBadge">
            <span className="font-messina">NEW</span>
          </div>
        )}

        <img src={food.image_url} className="h-4/5 max-h-28 md:mx-h-none" />
      </div>
      <div
        className={
          selected
            ? "md:w-2/3 w-full bg-green-100 focus:bg-green-100 py-5 flex flex-col items-center justify-between"
            : "md:w-2/3 w-full bg-white focus:bg-green-100 py-5 flex flex-col items-center justify-between"
        }
      >
        <div className="font-cooper md:text-xl text-sm text-black text-center">
          {food.name}
        </div>
        <div onClick={() => { openDetails(true) }} className="text-primary font-bold text-sm md:text-base mt-2 md:mt-0 font-messina cursor-pointer">See Details</div>
        {type === "kibble" ? (
          <button
            className={selected ? selectedText : unSelectedText}
            onClick={() => selectKibbleRecipe(food)}
            disabled={selectedLength >= 2 && !selected && !kibbleOnlyNull}
          >
            {selected ? 'Remove Recipe' : 'Add Recipe'}
          </button>
        ) : (
            <button
              className={selected ? selectedText : unSelectedText}
              onClick={() => selectCookedFood(food)}
              disabled={selectedLength >= 2 && !selected}
            >
              {selected ? 'Remove Recipe' : 'Add Recipe'}
            </button>
          )}
        <OrderItemModal item={food} showModal={details} onClose={() => { openDetails(false) }} />
        {/* <label
          htmlFor={type}
          className="rounded-xl cursor-pointer w-2/3 border border-green text-primary font-bold py-2 flex justify-center items-center"
        >
          {type === "kibble" ? (
            <input
              onChange={() => selectKibbleRecipe(food)}
              name={type}
              checked={kibble_}
              disabled={
                (!kibble_ && selectedCookedRecipes.length === 2) ||
                (!kibble_ && kibble.length === 1)
              }
              className="hiden mr-2"
              type="checkbox"
            />
          ) : (
            <input
              onChange={() => selectCookedFood(food)}
              name={type}
              checked={cooked}
              disabled={
                (!cooked && selectedCookedRecipes.length === 2) ||
                (!cooked &&
                  kibble.length > 0 &&
                  selectedCookedRecipes.length === 1)
              }
              className="hiden mr-2"
              type="checkbox"
            />
          )}
          Add Recipe
        </label> */}
      </div>
    </div>
  );
};

export default FoodCard;