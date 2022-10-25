import logo from '../logo.svg';

export default function Header() {
    return (
      <header>
        <nav className="nav-bar">
          <img src={logo} className="App-logo" alt="logo" />
          <ul className="nav-items">
            <li className="nav-menu">Pricing</li>
            <li className="nav-menu">About</li>
            <li className="nav-menu">Contact</li>
          </ul>
        </nav>
      </header>
    )
  }