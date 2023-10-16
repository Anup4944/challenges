import React, { useState } from "react";
import "./App.css";

function App() {
  const [cells, setCells] = useState(["a", "b", "C"]);

  const changeCellContent = (newCellValue: string, indexToUpdate: number) => {
    // updating cell array. Loop over element and look for index that we care about

    setCells((prevCell) => {
      return prevCell.map((cell, idx) => {
        return idx === indexToUpdate ? newCellValue : cell;
      });
    });
  };

  function handlePlusClick(idx: number) {
    setCells((prevCells) => [
      ...prevCells.slice(0, idx + 1),
      "_",
      ...prevCells.slice(idx + 1),
    ]);
  }

  const combineString = cells.join("");

  return (
    <main className="App">
      <section className="wrapper">
        {cells.map((cell, idx) => (
          <div className="cell" key={idx}>
            <input
              value={cell}
              onChange={(e) => changeCellContent(e.currentTarget.value, idx)}
            />

            {idx < cells.length - 1 && (
              <span
                className="plus"
                onClick={() => handlePlusClick(idx)}
              ></span>
            )}
          </div>
        ))}
      </section>
      {combineString}
    </main>
  );
}

export default App;
