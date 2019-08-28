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

  handleFilter = e => {
    e.preventDefault();
    let filteredShoes = this.state.shoes.filter(shoe => {
      return shoe.Color === e.target.value;
    });
    this.setState({ shoesToDisplay: filteredShoes });
  };

  renderShoes = () => {
    return this.state.shoesToDisplay.map((shoe, index) => {
      const { Brand, Type, Color, Size, Width, Price, imgURL } = shoe;
      return (
        <MensShoeCard
          key={index}
          price={Price}
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
    return (
      <div className="mens-container">
        <FilterColumn handleFilter={this.handleFilter} />
        <div className="shoecard-container">{this.renderShoes()}</div>
      </div>
    );
  }
}

export default Mens;
