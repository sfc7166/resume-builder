import { useState } from 'react';
import Resume from './Components/Resume';
import './Styles/lightTheme.css';
import './Styles/darkTheme.css';
import './Styles//global.css'

function App() {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <div className={`app ${theme}`}>
      <button onClick={toggleTheme} className="theme-toggle">
        Switch to {theme === 'light' ? 'Dark' : 'Light'} Theme
      </button>
      <Resume />
    </div>
  );
}

export default App;


