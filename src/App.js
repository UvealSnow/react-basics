import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [emotion, setEmotion] = useState("nice");
  const [secondary, setSecondary] = useState("tired");

  // Feels really similar to watchers!
  useEffect(() => console.log(`It's ${emotion} around here!`), [emotion]);
  useEffect(() => console.log(`It's ${secondary} right about now!`), [secondary]);

  return (
    <>
      <h1>
        Current state: {emotion}.
      </h1>
      <button onClick={() => setEmotion("nice")}>
        Niiiiice
      </button>
      <button onClick={() => setEmotion("frustrated")}>
        Frustrate
      </button>
      <button onClick={() => setEmotion("happy")}>
        Make happy
      </button>
      <br />
      <button onClick={() => setSecondary("crabby")}>
        Crabby
      </button>
      <button onClick={() => setSecondary("rested")}>
        Rested
      </button>
      <button onClick={() => setSecondary("tired")}>
        Tired
      </button>
    </>
  );
};

export default App;
