import './App.css';

function SecretComponent() {
  return (
    <h1>
      Super secret info for authorized users.
    </h1>
  );
};

function RegularComponent() {
  return (
    <h1>
      Everyone can see me!
    </h1>
  );
};

function App({ authorized }) {
  /**
    if (authorized) {
      return <SecretComponent />;
    } else {
      return <RegularComponent >/;
    }
   */
  return (
    <>
      { authorized 
        ? <SecretComponent />
        : <RegularComponent />
      }
    </>
  );
};

export default App;
