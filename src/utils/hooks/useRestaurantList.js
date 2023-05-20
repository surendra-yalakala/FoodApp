import { useEffect, useState } from "react";
import { FETCH_RESTAURANT_URL } from "../constants";

const useRestaurantList = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState([]);

  useEffect(() => {
    getRestaurants();
  }, []);

  async function getRestaurants() {
    const data = await fetch(FETCH_RESTAURANT_URL);
    const json = await data.json();
    console.log(json);
    setListOfRestaurant(json?.data?.cards[2]?.data?.data?.cards);
  }
  return listOfRestaurant;
};

export default useRestaurantList;
