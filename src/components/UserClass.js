import React from "react";

class Userclass extends React.Component {
  constructor(props) {
    super(props);
    //console.log(this.props.name+" Child Constructor");
    this.state = {
      //count: 0,
      //count2: 0,
      userInfo: {
        name: "dummy",
        location: "default",
      },
    };
  }
  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/ashishbhumi");
    const json = await data.json();
    console.log(json);
    this.setState({
      userInfo: json,
    });
  }
  render() {
    //console.log(this.props.name+" Child Render");
    const { name, location, avatar_url } = this.state.userInfo;

    //const { count, count2 } = this.state;
    return (
      <div className="user-card flex">
        <div>
          <img src={avatar_url} />
        </div>
        <div className="bg-blue-400 w-3/12 h-3/6 rounded-none font-bold">
          <h2>Name:{name} </h2>
          <h3>Location:{location}</h3>
          <h3>Phone no.: 8340677355</h3>
          <h3>Email id:ashishkrbnr@gmail.com</h3>
        </div>
        {/*<h3>Count:{count}</h3>
        <h3>Count2:{count2}</h3>
        <button
          onClick={() => {
            //Never update state variables directly.
            this.setState({
              count: this.state.count + 1,
              count2: this.state.count2 + 4,
            });
          }}
        >
          Button
        </button>*/}
      </div>
    );
  }
}

export default Userclass;
