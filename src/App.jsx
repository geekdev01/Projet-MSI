import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import SignUp from "./SignUp.jsx"; // Import du formulaire SignUp
import SignIn from "./SignIn.jsx"; // Import du formulaire SignIn

function App() {
  const [currentForm, setCurrentForm] = useState("home"); // État pour naviguer entre les pages

  return (
    <>
      {/* Header avec navigation */}
      <header>
        <div>
          <a href="https://vite.dev" target="_blank">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
        <h1>Vite + React</h1>
        <nav>
          {/* Boutons pour changer de formulaire */}
          <button onClick={() => setCurrentForm("home")}>Home</button> {/* La page qui suit apres l'un des formulaires*/}
          <button onClick={() => setCurrentForm("signup")}>Sign Up</button>
          <button onClick={() => setCurrentForm("signin")}>Sign In</button>
        </nav>
      </header>

      {/* Affichage conditionnel des composants */}
      <main>
        {currentForm === "home" && (
          <div>
            <h2>Welcome to the Vite + React App!</h2>
            <div className="card">
              <button onClick={() => setCurrentForm("signup")}>
                Go to Sign Up
              </button>
            </div>
          </div>
        )}
        {currentForm === "signup" && <SignUp/>}
        {currentForm === "signin" && <SignIn/>}
      </main>

      <footer>
        <p className="read-the-docs">
          Click on the Vite and React logos to learn more
        </p>
      </footer>
    </>
  );
}

export default App;
