import React, { Component } from "react";

class App extends Component {
  state = {
    person: {
      fullName: "mohamed ben ali",
      bio: "A surgeon is a medical professional who specializes in performing surgeries to treat various medical conditions.",
      imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxaCOQKSHIK4XDJiD5aD3ilsT17hkmRf_QDw&usqp=CAU",
      profession: "surgeon",
    },
    shows: false,
    intervalId: null,
    secondsSinceMount: 0,
  };

  toggleShow = () => {
    this.setState((prevState) => ({ shows: !prevState.shows }));
  };

  componentDidMount() {
    const intervalId = setInterval(() => {
      this.setState((prevState) => ({
        secondsSinceMount: prevState.secondsSinceMount + 1,
      }));
    }, 1000);

    this.setState({ intervalId });
  }

  componentWillUnmount() {
    clearInterval(this.state.intervalId);
  }

  render() {
    const { shows, person, secondsSinceMount } = this.state;

    return (
      <div className="App">
        <button onClick={this.toggleShow}>Toggle Profile</button>
        {shows && (
          <div>
            <img src={person.imgSrc} alt={person.fullName} />
            <h1>{person.fullName}</h1>
            <p>{person.bio}</p>
            <p>Profession: {person.profession}</p>
          </div>
        )}
        <p>Time since mount: {secondsSinceMount} seconds</p>
      </div>
    );
  }
}

export default App;
