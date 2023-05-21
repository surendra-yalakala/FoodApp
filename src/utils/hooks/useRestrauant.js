import { useEffect, useState } from "react";
import { FETCH_MENU_URL } from "../constants";

const useRestrauant = (resId) => {
  const [restaurant, setRestaurant] = useState(null);

  useEffect(() => {
    getRestaurantDetails(resId);
  }, []);

  async function getRestaurantDetails() {
    const data = await fetch(FETCH_MENU_URL + resId);
    const json = await data?.json();
    setRestaurant(json?.data);
  }

  return restaurant;
};

export default useRestrauant;
