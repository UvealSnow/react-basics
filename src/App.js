import './App.css';

function Header(props) {
  console.log(props);
  return (
    <header>
      <h1>{props.name}'s Kitchen</h1>
    </header>
  );
};

function Main({ adjective, dishes }) {
  return (
    <section>
      <p>We server the most {adjective} food in town!</p>
      <ul style={{ textAlign: 'left' }}>
        {dishes.map((dish, i) => (
          <li key={i}>{dish}</li>
        ))}
      </ul>
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

const dishes = [
  "Mac & Cheese",
  "Salmon",
  "Pizza",
];
  
function App() {
  return (
    <div className="App">
      <Header name="Caro" />
      <Main adjective="amazing" dishes={dishes} />
      <Footer year={new Date().getFullYear()} />
    </div>
  );
};

export default App;
