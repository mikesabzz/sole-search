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
    let { name, value } = e.target;
    if (value === "") {
      this.setState({ shoesToDisplay: allShoes });
    } else {
      if (name === "Size") {
        value = parseInt(value);
      }
      let filteredShoes = this.state.shoes.filter(shoe => {
        return shoe[name] === value;
      });

      this.setState({ shoesToDisplay: filteredShoes });
    }
  };

  handlePrice = e => {
    let { value } = e.target;
    if (value === "") {
      this.setState({ shoesToDisplay: allShoes });
    } else {
      let filteredShoes = this.state.shoes.filter(shoe => {
        let priceString = shoe.Price;
        let hyphenLocation = priceString.indexOf("-");
        let price1 = priceString.substring(1, hyphenLocation);
        let price2 = priceString.substring(
          hyphenLocation + 2,
          priceString.length
        );
        price1 = parseInt(price1);
        price2 = parseInt(price2);
        return value >= price1 && value <= price2;
      });
      this.setState({ shoesToDisplay: filteredShoes });
    }
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
        <FilterColumn
          handleFilter={this.handleFilter}
          handlePrice={this.handlePrice}
        />
        <div className="shoecard-container">{this.renderShoes()}</div>
      </div>
    );
  }
}

export default Mens;
