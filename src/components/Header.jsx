// Header.jsx - page title bar. Receives `title` from App.
function Header({ title }) {
  return (
    <header className="header">
      <h1>{title}</h1>
    </header>
  );
}

export default Header;
