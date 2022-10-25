import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
      <header>
        <nav>
          <img src={logo} className="App-logo" alt="logo" />
        </nav>
      </header>
      <main>
        <h1>My First React App</h1>
        <ul>
          <li>This includes a Header</li>
          <li>A Main Component</li>
          <li>And a Footer</li>
        </ul>
      </main>
      <footer>
        <small>© 2022 Weirick development. All rights reserved.</small>
      </footer>
    </div>
        
  );
}

export default App;
