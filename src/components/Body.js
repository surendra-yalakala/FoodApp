/**
 * created by surendra yalakala
 */
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import restaurentList from "../utils/mocData";
import RestaurantCard from "./RestaurantCard";
import ShimmerUIComponent from "./ShimmerUIComponenet";
import { getFilteredData } from "../utils/Helper";
import useOnline from "../utils/hooks/useOnline";
import useRestaurantList from "../utils/hooks/useRestaurantList";

const Body = () => {
  const isOnline = useOnline();
  const listOfRestaurant = useRestaurantList();

  if (!isOnline) {
    return <h1>**** No internet please check *****</h1>;
  }

  return listOfRestaurant?.length === 0 ? (
    <ShimmerUIComponent />
  ) : (
    <div className="flex-col">
      <div className="bg-white">
        <button
          className="bg-orange-200 p-2 m-2 rounded-sm text-xs"
          onClick={() => {
            setListOfRestaurant(getFilteredData(restaurentList));
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="flex flex-wrap">
        {listOfRestaurant?.map((restaurant) => {
          return (
            <Link
              key={restaurant?.data?.id}
              to={"/restaurant/" + restaurant?.data?.id}
            >
              <RestaurantCard resData={restaurant} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Body;
