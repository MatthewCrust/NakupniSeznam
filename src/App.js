import './App.css';
import SeznamPage from './SeznamPage';
import HomePage from './HomePage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/second-page" element={<SeznamPage />} />
      </Routes>
    </Router>
  );
}
