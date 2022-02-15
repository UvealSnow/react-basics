import './App.css';

function Header(props) {
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
        {dishes.map(({ id, title }) => (
          <li key={id}>{title}</li>
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
  "Lasagna",
];

const dishObjects = dishes.map((dish, i) => ({ id: i, title: dish }));
  
function App() {
  return (
    <div className="App">
      <Header name="Kevin" />
      <Main adjective="amazing" dishes={dishObjects} />
      <Footer year={new Date().getFullYear()} />
    </div>
  );
};

export default App;
