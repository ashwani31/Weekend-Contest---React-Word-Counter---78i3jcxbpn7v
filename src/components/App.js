import React, { useState } from "react";
import "../styles/App.css";
const App = () => {
  const [charLimit, setCharlimit] = useState(50);
  const [fontsize, setFontsize] = useState(16);
  const [charCount, setCharcount] = useState(0);
  const [wordCount, setWordcount] = useState(0);
  const handleChange = (e) => {
    const text = e.target.value;

    //set no. of characters count
    setCharcount(text.length);
    //set no. of words count
    let w_count = 0;
    if (text.length > 0) {
      w_count = text.trim().split(" ").length;
    }
    setWordcount(w_count);
  };
  const handleCharLimitChange = (e) => {
    const value = e.target.value;
    setCharlimit(value);
  };
  const fontsizeChangeHandler = (e) => {
    setFontsize(e.target.value);
  };

  return (
    <div id="main">
      <h2>Font Size Picker</h2>
      <input
        type="range"
        id="fontSize-input"
        min="16px"
        max="32px"
        onChange={fontsizeChangeHandler}
      />
      <h3>word limit input</h3>
      <input
        type="number"
        id="char-limit-input"
        onChange={handleCharLimitChange}
        value={charLimit}
      />
      <br />
      <div>
        <textarea
          rows="4"
          style={{ fontSize: fontsize + "px" }}
          onChange={handleChange}
          maxLength={charLimit}
        />
      </div>
      <div id="word-counter">Total no. of words written {wordCount}</div>
      <div id="char-counter">Total no. of characters used {charCount}</div>
    </div>
  );
};

export default App;
