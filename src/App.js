import './App.css';

function Header(props) {
  console.log(props);
  return (
    <header>
      <h1>{props.name}'s Kitchen</h1>
    </header>
  );
};

function Main({ adjective }) {
  return (
    <section>
      <p>We server the most {adjective} food in town!</p>
    </section>
  );
};

function Footer({ year }) {
  return (
    <footer>
      <p>
        Copyright © {year}
      </p>
    </footer>
  );
};
  
function App() {
  return (
    <div className="App">
      <Header name="Caro" />
      <Main adjective="amazing" />
      <Footer year={new Date().getFullYear()} />
    </div>
  );
};

export default App;
