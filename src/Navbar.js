// Navbar.jsx
import React from 'react';
import { useDarkMode } from './DarkModeContext';
import './Navbar.css';
import { useTranslation } from 'react-i18next';

function Navbar() {
  const { darkMode, toggleDarkMode } = useDarkMode();

  const { i18n } = useTranslation();  

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <nav className={`navbar ${darkMode ? 'dark-mode-class' : ''}`}>
      <div className="language-buttons">
        <button onClick={() => changeLanguage('en')} className="language-button">
          <img width={50} height={30} src="eng.png" alt="Czech Flag" />
        </button>
        <button onClick={() => changeLanguage('cs')} className="language-button">
          <img width={50} height={30} src="cz.png" alt="English Flag" />
        </button>
      </div>
      <div className="dark-mode-switch">
        <label className="switch">
          <input checked={darkMode} onChange={toggleDarkMode} type="checkbox" />
          <span className="slider round"></span>
        </label>
        <span className="dark-mode-label">Dark Mode</span>
      </div>
    </nav>
  );
}

export default Navbar;
