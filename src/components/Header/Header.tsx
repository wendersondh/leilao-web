import "./styles.css";

export function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <h1 className="logo">LeilãoPB</h1>

        <nav className="nav">
          <a className="nav-item" href="#">Início</a>
          <a className="nav-item" href="#">Meus Lances</a>
          <a className="nav-item" href="#">Perfil</a>
        </nav>
      </div>
    </header>
  );
}
