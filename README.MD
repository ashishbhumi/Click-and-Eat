/\*

-header
-logo
-navbar
-home
-cart
-body
-serachrestaurent
-restaurent container
-restaurent card
-image
-name
-star rating
-footer
-links
-contact us option
-copyright

\*/

React Hooks
(Normal Js utility Function)
-useState(): superpowerful state variables in react
-useEffect()

...
-#ReDux toolkit
-Install @reduxjs/toolkit and react-redux
-Build our Redux-Store
-Connect our store to application
-Build slice(cart slice)
-Dispatch action
-selector

    imp points
    /1/  whenever you are using selector make sure you are subscribing to thr right portion of the  store
       ex:
        {
          const cartItems = useSelector((store) => store.cart.items);
        }

        {
          const store = useSelector((store) => store);
          const cartItems =  store.cart.items;
        }

        Both code is same
        but in 1st code we are subscribing small part of the store
        and in 2nd code we are subscribing whole part of the store  and it is less efficient.

        when you will change anything in cart  using 2nd code it will update or change whole store
        but if you use 1st code it will update only that portion without touching any other portion

    /2/
      ->  This is "reducers" bcz it have multiple redcer functions
              reducers:{
                additems:(()=>{})
                clearcart:(()=>{})
                remove:(()=>{})
              }


      ->  This is reducer bcz it hve only one reducer function
              reducer:{
                additems:(()=>{})
              }
             
      /* But at the time of exporting you have to export like "Cartslice.reducer", dont use
            "reducers"

    /3/
      -> In older version of redux,it used to say the Don't mutate/update the state and returning
         was mandatory.

          const newstate=[...state];
          newstate.items.push(action.payload)
          return newstate

      -> In new version(redux toolkit) ,we have to mutate the state and return is not mandatory.
          redux uses immer.js and it find diff between older state and new state and it updates
           state.items.push(action.payload)#   C l i c k - a n d - E a t 
 
 

className="px-4  hover:bg-sky-700 hover:font-semibold hover:text-white rounded-lg "