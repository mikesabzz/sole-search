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
          <select onChange={this.props.handleFilter}>
            <option>Select Color</option>
            <option value="Black">Black</option>
            <option value="White">White</option>
            <option value="Gray">Gray</option>
            <option value="Orange">Orange</option>
            <option value="Blue">Blue</option>
            <option value="Red">Red</option>
            <option value="Blue">Blue</option>
          </select>
        </form>
      </div>
    );
  }
}

export default FilterColumn;
