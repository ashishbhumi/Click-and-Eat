import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constant";
import { addItem } from "../utils/cartSlice";

const ItemList = (items) => {
  console.log(items);
  const dispatch=useDispatch();

  const handleAddItems=(item )=>{
    //Dispatch an action 
    //Whatever you will pass to additems it will go to the action which is 2nd argument of additems 
    // and it will go to action.payload by redux
    dispatch(addItem(item))
  }
  return (
    <div>
      {items?.items?.map((item) => (
        <div
          key={item?.card?.info?.id}
          className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between "
        >
          <div className="w-9/12">
            <div className="py-2">
              <span className="font-bold">{item?.card?.info?.name}</span>
              <span className="font-semibold">
                - ₹
                {item?.card?.info?.price
                  ? item?.card?.info?.price / 100
                  : item?.card?.info?.defaultPrice / 100}
              </span>
            </div>
            <span className="text-xs">{item?.card?.info?.description}</span>
          </div>
          <div className="w-3/12 p-4">
            <div className="absolute">
              <button className="bg-black text-white rounded-lg shadow-lg  mt-20"
              onClick={()=>{handleAddItems(item)}}>
                Add+
              </button>
            </div>
            <img
              src={CDN_URL + item?.card?.info?.imageId}
              className="w-full h-24 rounded-lg"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
