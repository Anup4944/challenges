import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [items, setItems] = useState(0);
  const [lines, setLines] = useState([[2, 3, 4], [1, 7], [2, 7], [3], [4, 7]]);

  const addPersonToLines = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (items === undefined || items <= 0) return;
    // loop thru all lines
    let leastItemsAmount = 100;
    let lineWithLeast: number[] | undefined = undefined;

    for (let line of lines) {
      const totalInLine = line.reduce((sum, value) => sum + value, 0);
      // find the line with least items

      if (totalInLine < leastItemsAmount) {
        leastItemsAmount = totalInLine;
        lineWithLeast = line;
      }
    }
    if (!lineWithLeast) return;
    // push the items in lines

    setLines((prevLines) => {
      return prevLines.map((line) =>
        line === lineWithLeast ? [...line, items] : line
      );
    });
    console.log(lineWithLeast);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setLines((prevLines) => {
        // reduce first item by 1 in each line
        return prevLines.map((line) => {
          return [line[0] - 1, ...line.slice(1)].filter((value) => value >= 0);
        });
      });
    }, 3000);
    return () => {
      clearInterval(interval);
    };
  });

  return (
    <main className="App">
      <form onSubmit={addPersonToLines}>
        <input
          value={items}
          onChange={(e) => setItems(e.currentTarget.valueAsNumber || 0)}
          type="number"
          required
        />
        <button>Checkout</button>
      </form>
      <div className="lines">
        {lines.map((people, idx) => (
          <div className="line" key={idx}>
            {people.map((items, idx) => (
              <div key={idx}>{items}</div>
            ))}
          </div>
        ))}
      </div>
    </main>
  );
}

export default App;
