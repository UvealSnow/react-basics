import { useState, useEffect } from 'react';
import './App.css';

// https://api.github.com/users/uvealsnow

function App({ login }) {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(`https://api.github.com/users/${login}`)
      .then((res) => res.json())
      .then(setData);
  });

  if (data) {
    return <div>{JSON.stringify(data)}</div>;
  } else {
    return <div>No login available</div>;
  }
};

export default App;
