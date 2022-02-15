import './App.css';

function Header() {
  return (
    <header>
      <h1>Kevin's Kitchen</h1>
    </header>
  );
};

function Main() {
  return (
    <section>
      <p>We server the best food in town!</p>
    </section>
  );
};

function Footer() {
  return (
    <footer>
      <p>
        Believe it!
      </p>
    </footer>
  );
};
  
function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Footer />
    </div>
  );
};

export default App;
