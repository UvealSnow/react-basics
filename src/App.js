import './App.css';
import restaurant from './assets/img/restaurant.jpeg';

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
      <img
        height={200}
        src={restaurant}
        alt="Delicious foot at the table"
      />
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

// It's recommended that we do this so we keep our data in sync as the app
// state changes over time.
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
