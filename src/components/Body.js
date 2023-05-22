/**
 * created by surendra yalakala
 */
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";

import restaurentList from "../utils/mocData";
import RestaurantCard from "./RestaurantCard";
import ShimmerUIComponent from "./ShimmerUIComponenet";
import { getFilteredData } from "../utils/Helper";
import useOnline from "../utils/hooks/useOnline";
import useRestaurantList from "../utils/hooks/useRestaurantList";
import UserContext from "../utils/context/UserContext";

const Body = () => {
  const isOnline = useOnline();
  const listOfRestaurant = useRestaurantList();

  const { user, setUser } = useContext(UserContext);

  if (!isOnline) {
    return <h1>**** No internet please check *****</h1>;
  }

  return listOfRestaurant?.length === 0 ? (
    <ShimmerUIComponent data-testid="shimmer" />
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
        <input
          className="m-2 border border-slate-400 font-sans text-sm"
          value={user?.name}
          onChange={(e) =>
            setUser({
              ...user,
              name: e?.target?.value,
            })
          }
        />
        {/* <input
          className="m-2 border border-slate-400 font-sans text-sm"
          value={user?.email}
          onChange={(e) =>
            setUser({
              ...user,
              email: e?.value,
            })
          }
        /> */}
        <input />
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
