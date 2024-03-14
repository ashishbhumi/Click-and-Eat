import ShimmerUI from "./shimmer";
import { useParams } from "react-router-dom";
import useRestaurentMenu from "../utils/useRestaurentMenu";
import RestaurentCategory from "./RestaurentCategory";
import { useState } from "react";

const RestaurentMenu = () => {
  const { resID } = useParams();
  const resInfo = useRestaurentMenu(resID);

  const [showIndex,setshowIndex]=useState(null);

  if (resInfo === null) {
    return <ShimmerUI />;
  }

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[0]?.card?.card?.info;
  const { itemCards } =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

  console.log(resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards);

  const categories =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
    console.log("HIII");
  console.log(categories);

  return (
    <div className="Restaurent-menu  text-center">
      <h1 className="font-bold my-6 text-2xl">{name}</h1>
      <p className="font-bold my-6 text-lg">
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>
      {/* Categories accordian*/}
      {categories.map((category,index) => (
        <RestaurentCategory
          key={category?.card?.card.title}
          data={category?.card?.card}
          showItems={index === showIndex ? true : false}
          setshowIndex={()=>setshowIndex(index)}
        />
      ))}
    </div>
  );
};

export default RestaurentMenu;
