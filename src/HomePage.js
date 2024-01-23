import Card from './Card'
import Navbar from './Navbar'
import './HomePage.css'
import { useDarkMode } from './DarkModeContext';
import { useTranslation } from 'react-i18next';

const HomePage = () => {

    const { t } = useTranslation();

    const { darkMode, toggleDarkMode } = useDarkMode();

    return(
        <div className={`${darkMode ? 'dark-mode-class' : ''}`}>
            <Navbar />    
            <h1 className="Nadpis">{t("title-homepage")}</h1>

            <div className='button-box-main'>
            <button type="button" class="btn btn-primary">{t("button-homepage-show")}</button>
            <button type="button" class="btn btn-success">{t("button-homepage-new")}</button>
            </div>

            <div className="card-container">
            <Card />
            <Card />
            <Card />
            <Card />
            </div>
        </div>
    );
};

export default HomePage;