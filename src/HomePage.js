import Card from './Card'
import Navbar from './Navbar'
import './HomePage.css'

const HomePage = () => {
    return(
        <div>
            <Navbar />    
            <h1 className="Nadpis">Přehled</h1>

            <div className='button-box-main'>
            <button type="button" class="btn btn-primary">Zobrazit všechny</button>
            <button type="button" class="btn btn-success">Vytvořit nový seznam</button>
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