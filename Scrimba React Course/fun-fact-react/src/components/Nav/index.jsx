import "./index.css";

export default function Nav({ darkMode, toggleDarkMode }) {
  return (
    <nav className={darkMode ? "nav dark" : "nav light"}>
      <img className="nav--logo" src="./src/images/react-logo.png" />
      <h3 className={darkMode ? "" : "h3-light"}>ReactFacts</h3>
      <div className="toggler">
        <p className="toggler--light">Light</p>
        <div className="toggler--slider" onClick={toggleDarkMode}>
          <div className="toggler--slider--circle"></div>
        </div>
        <p className="toggler--dark">Dark</p>
      </div>
    </nav>
  );
}
