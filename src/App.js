import './App.css';
import SeznamPage from './SeznamPage';
import HomePage from './HomePage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { DarkModeProvider } from './DarkModeContext';
import { I18nextProvider } from 'react-i18next'; 
import i18n from './I18nextProvider';

export default function App() {
  return (
    <DarkModeProvider>
      <I18nextProvider i18n={i18n}>
        <Router>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/second-page" element={<SeznamPage />} />
          </Routes>
        </Router>
      </I18nextProvider>
    </DarkModeProvider>

  );
}
