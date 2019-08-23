import React, { Component } from "react";

// Represents a grid square with a color

class GridSquare extends Component {
  render() {
    const classes = `grid-square color-${this.props.color}`;
    console.log("classes: ", classes);
    return <div className={classes} />;
  }
}

export default GridSquare;
