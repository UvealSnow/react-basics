import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import App from './App';

ReactDOM.render(
  // This allows us to use both components at root level without
  // having to add any wrappers into the code! <React.Fragment></React.Fragment> or <></>
  <>
    <App login="uvealsnow" />
  </>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
