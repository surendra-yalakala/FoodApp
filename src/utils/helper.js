export function getFilteredData(restaurentList) {
  return restaurentList.filter((restaurant) => restaurant.data.avgRating > 4);
}
