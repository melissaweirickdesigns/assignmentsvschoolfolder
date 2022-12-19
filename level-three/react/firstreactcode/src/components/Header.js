import logo from '../logo.svg';

export default function Header() {
    return (
      <header>
        <nav className="nav-bar">
          <img src={logo} className="App-logo" alt="logo" />
          <h3 className="nav-title">REACT APP</h3>
          <ul className="nav-items">
            <li className="nav-menu">Pricing</li>
            <li className="nav-menu">About</li>
            <li className="nav-menu">Contact</li>
          </ul>
        </nav>
      </header>
    )
  }