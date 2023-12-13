import './SeznamPage.css'
import Navbar from './Navbar';
import Item from './Item';

function List() {
    return (
      <div>
        <Navbar />
        <div className='main-div'>

          <div className="title-box">
            <h1>Název</h1>
          </div>

          <div className='list-items'>
            <Item />
            <Item />
            <Item />
            <Item />
          </div>

          <button type="button" class="btn btn-primary">Přidat položku</button>
          
          <div className='seznam-button-box'>
            <button type="button" class="btn btn-primary">Přidat uživatele</button>
            <button type="button" class="btn btn-success">Označit jako hotové</button>
            <button type="button" class="btn btn-warning">Archivovat</button>
            <button type="button" class="btn btn-danger">Smazat položky</button>
          </div>

        </div>

      </div>

    );
  };
  
  export default List;