import Nav from "./components/Nav";
import MainContent from "./components/MainContent";
import { useState } from "react";

export default function App() {
  const [darkMode, setDarkMode] = useState(false);
  function toggleDarkMode() {
    setDarkMode((prevMode) => !prevMode);
  }
  return (
    <>
      <Nav darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <MainContent darkMode={darkMode} />
    </>
  );
}
