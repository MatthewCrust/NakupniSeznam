import './Item.css';

function Item(){

  return (
    <div className="item-container">
      <input className='name-input' type="text"placeholder="Název"/>

      <input className='quantity-input' type="number" placeholder="Počet"/>

      <span>ks</span>

      <button type="button" class="btn btn-success">Hotovo</button>
      <button type="button" class="btn btn-danger">Odebrat</button>
    </div>
  );
};

export default Item;
