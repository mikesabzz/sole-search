import React from "react";
import FilterColumn from "./FilterColumn";
import allShoes from "../shoes.json";
import MensShoeCard from "./MensShoeCard";

import "../App.css";

class Mens extends React.Component {
  constructor(props) {
    super(props);
    this.state = { shoes: allShoes, shoesToDisplay: [] };
  }

  componentDidMount() {
    this.setState({ shoesToDisplay: allShoes });
  }

  renderShoes = () => {
    return this.state.shoesToDisplay.map((shoe, index) => {
      const { Brand, Type, Color, Size, Width, Price, imgURL } = shoe;
      return (
        <MensShoeCard
          brand={Brand}
          type={Type}
          color={Color}
          size={Size}
          Width={Width}
          imgURL={imgURL}
        ></MensShoeCard>
      );
    });
  };
  render() {
    console.log(allShoes);
    return (
      <div className="mens-container">
        Mens
        <FilterColumn></FilterColumn>
        <div className="shoecard-container">{this.renderShoes()}</div>
      </div>
    );
  }
}

export default Mens;
