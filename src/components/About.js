import React from "react";
import User from "./user";
import Userclass from "./UserClass";

class About extends React.Component{

  constructor(props){
    super(props);
   
  }
  async componentDidMount(){
    console.log(" parent Mount ");
    const data=await fetch("https://api.github.com/users/ashishbhumi");
    const json=await data.json();
    console.log(json);

  }
  render(){
    //console.log("Parent render");
    return(
        <div>
          <br/>
          <Userclass name={"Ashish Bhumi (Class)"} locationClass={"Bihar"} />

        </div>
      );
  };
};

    {/*const About = () => {
    return (
    <div>
    <h1>This is react series</h1>
    <br/>
    <User name={"Ashish Bhumi (function)"} location={"Bihar"}/>
    <Userclass name={"Ashish Bhumi (Class)"} locationClass={"Bihar"} />
    </div>
    );
    };*/}

export default About;
