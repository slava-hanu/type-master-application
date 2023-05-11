import React, { useState, useEffect } from "react";

const Typewriter = ({ text, delay }) => {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    if (!text) {
      return;
    }

    let currentIndex = 0;

    const interval = setInterval(() => {
      if (currentIndex >= text.length) {
        clearInterval(interval);
        return;
      }

      const nextChar = text[currentIndex];

      const isEndOfSentence =
        nextChar === "." || nextChar === "?" || nextChar === "!";

      if (
        isEndOfSentence &&
        currentIndex + 1 < text.length &&
        text[currentIndex + 1] !== " "
      ) {
        setDisplayedText((prevText) => prevText + nextChar + " ");
      } else {
        setDisplayedText((prevText) => prevText + nextChar);
      }

      currentIndex++;
    }, delay);

    return () => clearInterval(interval);
  }, [text, delay]);

  return <>{displayedText}</>;
};

export default Typewriter;
