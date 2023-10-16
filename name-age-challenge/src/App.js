import "./App.css";
import { useState } from "react";

const App = () => {
  const [text, setText] = useState("");
  const [age, setAge] = useState(44);
  const [cashe, setCashe] = useState({});

  const handleOnSubmit = async () => {
    console.log(text);
    try {
      if (cashe.hasOwnProperty(text)) {
        setCashe(cashe[text]);
      } else {
        const response = await fetch(`https://api.agify.io/?name=${text}`);
        const value = await response.json();
        setCashe({ ...cashe, [text]: value.age });
        setAge(value.age);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setText("");
    }
  };
  return (
    <div className="page-container">
      <div className="card">
        <div className="form">
          <input
            placeholder="Enter a name"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <button onClick={handleOnSubmit} disabled={text === ""}>
            {" "}
            SUBMIT
          </button>
        </div>
        <p>{age} </p>
      </div>
    </div>
  );
};

export default App;
