import { useState } from 'react';
import './App.css';

function App() {
  const [feeling, setFeeling] = useState("nice");
  console.log(feeling);
  return (
    <>
      <h1>
        Current state: {feeling}.
      </h1>
      <button onClick={() => setFeeling("frustrated")}>
        Frustrate
      </button>
      <button onClick={() => setFeeling("happy")}>
        Make happy
      </button>
    </>
  );
};

export default App;
