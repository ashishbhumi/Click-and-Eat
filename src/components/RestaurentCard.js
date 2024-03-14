import {CDN_URL} from "../utils/constant";


const Restaurentcard = (props) => {
    //console.log(props)
    const { resData } = props;
    const { cloudinaryImageId, name, cuisines, avgRatingString, locality, sla } =
      resData?.info;
  
    return (
      <div className="m-4 p-4 w-[220px] rounded-lg bg-gray-100 hover:bg-gray-20">
        <img
          className="res-logo rounded-lg"
          alt="zam zam"
          src={
            CDN_URL + cloudinaryImageId
          }
        />
        <h3 className="font-bold py-4 text-lg"> {name} </h3>
        <h4 className="font-medium"> {cuisines?.join(", ")} </h4>
        <h5> {avgRatingString + "⭐"} </h5>
        <h5>
          {locality} , {resData?.info?.areaName}{" "}
        </h5>
        <h5>{sla?.deliveryTime + " Mins"}</h5>
      </div>
    );
  };

  //Higher order component
  //Input restro card => Output veg restrocard
export const WithVegLabel=(RestaurentCard)=>{
    return (props) => {
      return(
        <>
          <label className="absolute bg-black text-white m-2 p-2 rounded-lg">Vegeterian</label>
          <RestaurentCard {...props}/>
        </>
      );
    };
  };

export default Restaurentcard