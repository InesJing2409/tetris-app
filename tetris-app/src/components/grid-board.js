import React, { Component } from "react";
import GridSquare from "./grid-square";

class GridBoard extends Component {
  // generate an array of 18 rows, each containing 10 GridSquares
  makeGrid() {
    const maxRows = 18;
    const maxCols = 10;
    const gridColor = 1;

    const grid = [];
    for (let row = 0; row < maxRows; row++) {
      // adding rows
      grid.push([]);

      for (let col = 0; col < maxCols; col++) {
        // adding columns to each rows
        grid[row].push(
          <GridSquare key={`${col}${row}`} color={`${gridColor}`} />
        );
      }
    }
    return grid;
  }

  // The components generated in makeGrid are rendered in div.grid-board
  render() {
    return <div className="grid-board">{this.makeGrid()}</div>;
  }
}

export default GridBoard;
