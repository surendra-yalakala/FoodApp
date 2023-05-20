import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import "../index.css";
import ShimmerUIComponent from "./ShimmerUIComponenet";
import { LOGO_URL } from "../utils/constants";
import useRestrauant from "../utils/hooks/useRestrauant";

const RestaurentDetails = () => {
  const { id } = useParams();

  const restaurant = useRestrauant(id);

  return !restaurant ? (
    <ShimmerUIComponent />
  ) : (
    <div className="restaurant_details">
      <div className="restaurant_info">
        <h1>{restaurant?.cards[0]?.card?.card?.info?.name}</h1>
        <img className="restaurant-menu-img" src={LOGO_URL} />
        <h2>{restaurant?.cards[0]?.card?.card?.info?.areaName}</h2>
        <h3>{restaurant?.cards[0]?.card?.card?.info?.city}</h3>
        <h3>{restaurant?.cards[0]?.card?.card?.info?.avgRating} stars</h3>
        <h4>{restaurant?.cards[0]?.card?.card?.info?.cuisines?.join(", ")}</h4>
      </div>
      <div className="restaurant-menu">
        <h1>Menu</h1>
        {restaurant?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards?.map(
          (card) => {
            return <li key={card?.card?.info?.id}>{card?.card?.info?.name}</li>;
          }
        )}
      </div>
    </div>
  );
};

export default RestaurentDetails;
