import { useState, useEffect } from 'react';
import './App.css';

// https://api.github.com/users/uvealsnow

function App({ login }) {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(`https://api.github.com/users/${login}`)
      .then((res) => res.json())
      .then(setData);
  }, [login]);

  if (data) {
    return (
      <div>
        <h1>{data.name}</h1>
        <p>{data.location}</p>
        <img alt={data.login} src={data.avatar_url} />
      </div>
    );
  } else {
    return <div>No login available</div>;
  }
};

export default App;
