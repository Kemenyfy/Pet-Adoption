import React, { Component } from "react";
import "./App.css";
import petData from "./Data/pet.json";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pets: []
    }
  }


  componentDidMount() {
    this.setState({
      pets: petData.petfinder.pets.pet
    });
    console.log(petData);
  }

  render() {
    return (
      <div className="App">
        <header>
          <h2>Pets for Adoption</h2>
          <h4>Because rescued is my favorite breed.</h4>
        </header>
        <nav>
          <a>My Favorites</a>
          <a>Pets for Adoption</a>
        </nav>
        <section className="petList">
          {this.state.pets.map((pet, i) => {
            return (
              <section className="petBlock" key={i}>
                <span className="petName">{pet.name.$t}</span>
                <img className="petImage" src={pet.media.photos.photo[3].$t} alt="Pet Missing" />
                <button className="addToFavs">Add to My Pets</button>
              </section>
            );
          })}
        </section>
      </div>
    );
  }
}

export default App;
