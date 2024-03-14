import { useState } from "react";
import ItemList from "./ItemList";

const RestaurentCategory = ({data ,showItems,setshowIndex}) => {
console.log(data);
    //const [showItems,setshowItems]=useState(false)

    const handleclick = ()=>{
        //setshowItems(!showItems)
        setshowIndex()
    }
  return (
    <div>
      {/* Header Body*/}

      <div className="w-6/12 mx-auto my-4 bg-gray-100 shadow-lg p-4 ">
        <div className="flex justify-between cursor-pointer" onClick={handleclick}>
          <span className="font-bold">
            {data?.title} ({data.itemCards.length})
          </span>
          <span>🔽 </span>
        </div>
        {showItems && <ItemList items={data.itemCards} />}
      </div>

      {/* Accordian body*/}
    </div>
  );
};

export default RestaurentCategory;
