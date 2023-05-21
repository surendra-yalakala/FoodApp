const ShimmerUIComponent = () => {
  return (
    <div className="flex flex-wrap">
      {Array(15)
        .fill("")
        .map((e, index) => (
          <div key={index} className="bg-gray-200 w-52 m-2 h-72"></div>
        ))}
    </div>
  );
};

export default ShimmerUIComponent;
