import { useReducer } from "react";
import Resume from "./Components/Resume";
import "./Styles/lightTheme.css";
import "./Styles/darkTheme.css";
import "./Styles/global.css";

const themeReducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE_THEME":
      return state === "light" ? "dark" : "light";
    default:
      return state;
  }
};

function App() {
  const [theme, dispatch] = useReducer(themeReducer, "light");

  const toggleTheme = () => {
    dispatch({ type: "TOGGLE_THEME" });
  };

  return (
    <div className={`app ${theme}`}>
      <button onClick={toggleTheme} className="theme-toggle">
        Switch to {theme === "light" ? "Dark" : "Light"} Theme
      </button>
      <Resume />
    </div>
  );
}

export default App;





