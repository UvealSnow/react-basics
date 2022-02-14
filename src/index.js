import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  /**
   *  Creates an element with the desired characteristics.
   * 
   * @param type keyof React.ReactHTML
   * @param props? React.ReactClassAttributes
   * @param ...children? React.ReactNode
   */
  React.createElement(
    "h1",
    { style: { color: 'blue' } },
    "Hello World!"
  ),
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
