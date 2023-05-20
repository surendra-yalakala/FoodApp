/**
 * created by surendra yalakala
 */
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import restaurentList from "../utils/mocData";
import RestaurantCard from "./RestaurantCard";
import ShimmerUIComponent from "./ShimmerUIComponenet";

const Body = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState([]);

  useEffect(() => {
    getRestaurants();
  }, []);

  async function getRestaurants() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.385044&lng=78.486671&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json);
    setListOfRestaurant(json?.data?.cards[2]?.data?.data?.cards);
  }

  return listOfRestaurant?.length === 0 ? (
    <ShimmerUIComponent />
  ) : (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const listOfRestaurant = restaurentList.filter(
              (restaurant) => restaurant.data.avgRating > 4
            );

            setListOfRestaurant(listOfRestaurant);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
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
