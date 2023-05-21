import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import ShimmerUIComponent from "./ShimmerUIComponenet";
import { LOGO_URL } from "../utils/constants";
import useRestrauant from "../utils/hooks/useRestrauant";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const RestaurentDetails = () => {
  const { id } = useParams();

  const restaurant = useRestrauant(id);
  const dispatch = useDispatch();

  const addFoodItem = (item) => {
    console.log("++ ", item);
    dispatch(addItem(item));
  };

  return !restaurant ? (
    <ShimmerUIComponent />
  ) : (
    <div className="flex">
      <div className="restaurant_info">
        <h1>{restaurant?.cards[0]?.card?.card?.info?.name}</h1>
        <img className="restaurant-menu-img" src={LOGO_URL} />
        <h2>{restaurant?.cards[0]?.card?.card?.info?.areaName}</h2>
        <h3>{restaurant?.cards[0]?.card?.card?.info?.city}</h3>
        <h3>{restaurant?.cards[0]?.card?.card?.info?.avgRating} stars</h3>
        <h4>{restaurant?.cards[0]?.card?.card?.info?.cuisines?.join(", ")}</h4>
      </div>
      <div>
        {/* <button
          className="p-2 m-5 bg-green-200 font-sans text-sm"
          onClick={() => handleAddItem()}
        >
          Add Item
        </button> */}
      </div>
      <div className="">
        <h1>Menu</h1>
        <ul>
          {restaurant?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards?.map(
            (card) => {
              return (
                <li key={card?.card?.info?.id}>
                  {card?.card?.info?.name} -{" "}
                  <button
                    className="p-1 bg-green-200 font-sans text-xs"
                    onClick={() => addFoodItem(card?.card?.info)}
                  >
                    Add
                  </button>
                </li>
              );
            }
          )}
        </ul>
      </div>
    </div>
  );
};

export default RestaurentDetails;
