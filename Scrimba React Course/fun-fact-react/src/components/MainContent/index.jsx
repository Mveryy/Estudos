import "./index.css";

export default function MainContent({ darkMode }) {
  return (
    <main className={darkMode ? "dark" : ""}>
      <h1 className="main--title">Fun Facts about React</h1>
      <ul className="main--list">
        <li>Was first released in 2013</li>
        <li>Was originally created by Jordan Walke</li>
        <li>Has well over 100K stars on GitHub</li>
        <li>Is maintened by Facebook</li>
        <li>Powers thousands of enterprise apps, including mobile apps</li>
      </ul>
    </main>
  );
}
