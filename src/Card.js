import './Card.css';
import { Link } from 'react-router-dom';

function Card() {
  return (
    <div className="card text-center mb-3">
      <div className="card-body">
        <h5 className="card-title">Název</h5>
        <div className='button-box'>
          <Link to="/second-page" className="btn btn-primary">
            Zobrazit nákupní seznam
          </Link>
          <button id='btn-delete' type="button" className="btn btn-danger">
            Smazat
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
