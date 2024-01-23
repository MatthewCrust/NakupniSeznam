import './Card.css';
import { Link } from 'react-router-dom';
import { useDarkMode } from './DarkModeContext';
import { useTranslation } from 'react-i18next';
function Card() {

  const { darkMode, toggleDarkMode } = useDarkMode();

  const { t } = useTranslation();
  return (
    <div className={`card text-center mb-3 ${darkMode ? 'dark-mode-class-card' : ''}`}>
      <div className="card-body">
        <h5 className="card-title">{t("title-card")}</h5>
        <div className='button-box'>
          <Link to="/second-page" className="btn btn-primary">
          {t("button-card-show")}
          </Link>
          <button id='btn-delete' type="button" className="btn btn-danger">
          {t("button-card-delete")}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
