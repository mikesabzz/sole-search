import React from "react";

import "../App.css";

class FilterColumn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="filter-column-wrapper">
        <form label="color">
          <h2>Color</h2>
          <select name="Color" onChange={this.props.handleFilter}>
            <option value="">Select Color</option>
            <option value="Black">Black</option>
            <option value="White">White</option>
            <option value="Gray">Gray</option>
            <option value="Orange">Orange</option>
            <option value="Blue">Blue</option>
            <option value="Red">Red</option>
            <option value="Blue">Blue</option>
          </select>
        </form>

        <form label="size">
          <h2>Size</h2>
          <select name="Size" onChange={this.props.handleFilter}>
            <option value="">Select Size</option>
            <option value={8.0}>8.0</option>
            <option value={8.5}>8.5</option>
            <option value={9.0}>9.0</option>
            <option value={9.5}>9.5</option>
            <option value={10.0}>10.0</option>
            <option value={10.5}>10.5</option>
            <option value={11.0}>11.0</option>
            <option value={11.5}>11.5</option>
            <option value={12.0}>12.0</option>
            <option value={12.5}>12.5</option>
            <option value={13.0}>13.0</option>
          </select>
        </form>

        <form label="width">
          <h2>Width</h2>
          <select name="Width" onChange={this.props.handleFilter}>
            <option value="">Select Width</option>
            <option value="B">B</option>
            <option value="D">D</option>
            <option value="2E">2E</option>
          </select>
        </form>

        <form label="price">
          <h2>Price</h2>
          <select name="Price" onChange={this.props.handlePrice}>
            <option value="">Select Price</option>
            <option value={50}>$50</option>
            <option value={60}>$60</option>
            <option value={70}>$70</option>
            <option value={80}>$80</option>
            <option value={90}>$90</option>
            <option value={100}>$100</option>
            <option value={110}>$110</option>
            <option value={120}>$120</option>
            <option value={130}>$130</option>
            <option value={140}>$140</option>
          </select>
        </form>
      </div>
    );
  }
}

export default FilterColumn;
