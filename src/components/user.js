import { useState } from "react";
const User = (props) => {
  const [count, setcount] = useState(0);
  const [count2, setcount2] = useState(0);
  return (
    <div className="user-card">
      <h2>Name:{props.name} </h2>
      <h3>Phone no.: 8340677355</h3>
      <h3>Email id:ashishkrbnr@gmail.com</h3>
      <h3>Count : {count}</h3>
      <h3>Count2 : {count2}</h3>
      <button
        onClick={() => {
          setcount(count+1);
          setcount2(count2+2);
        }}  
      >Button</button>
    </div>
  );
};

export default User;
