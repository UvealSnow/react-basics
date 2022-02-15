import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  // This is using JSX (JavaScript as XML) this uses Babel to make this work.
  //https://babeljs.io/repl#?browsers=defaults%2C%20not%20ie%2011%2C%20not%20ie_mob%2011&build=&builtIns=false&corejs=3.6&spec=false&loose=false&code_lz=EoUwhgxgLgIg8gWQHQCcQDsAmIUAoBQABIQPQmEAqAFgJYDOh9hArnTegOaEBSAygBqFc3MADcwvCChoAHKITAN-CADIBKQlFoNWIBgCEwAIxAAbTQHtCAWzABrEJu2EA7hZR2kRQgB5mpgD5vYh9TGgCVZnQ9HxIwoOIQ-IQwFCgYuPDg32SaHAgLUwz47NDw7mYQUWKsxJzwgDU8lGi6WJKQkn8AgBpvTAsIZmsMKCQOECgAUSKR9Ch9AE8ASUxcAHIUCwsodbU-tQBuIA&debug=false&forceAllTransforms=false&shippedProposals=false&circleciRepo=&evaluate=false&fileSize=false&timeTravel=false&sourceType=module&lineWrap=true&presets=env%2Creact%2Cstage-2&prettier=false&targets=&version=7.17.2&externalPlugins=&assumptions=%7B%7D
  <ul>
    <li>Lunes</li>
    <li>Martes</li>
    <li>Miercoles</li>
    <li>Jueves</li>
    <li>Viernes</li>
  </ul>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
