import { useReducer } from 'react';
import './App.css';

function App() {
  const [checked, toggle] = useReducer(
    (checked) => !checked,
    false,
  );

  /**
   * Using closures ans useState:
    function toggle() {
      return setChecked(checked => !checked);
    };
   */

  return (
    <>
      <input
        type="checkbox"
        value={checked}
        onChange={toggle}
      />
      <p>{ checked ? 'Niiice' : 'Not cool' }</p>
    </>
  );
};

export default App;
