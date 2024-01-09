import './Item.css';
import React, { useState } from 'react';
function Item({ id, onRemove }) {

  const [backgroundColor, setBackgroundColor] = useState('initialColor');

  const handleRemove = () => {
    onRemove(id);
  };

  const markAsDone = () =>{
    setBackgroundColor('#33cc33');
  }

  return (
    <div style={{ backgroundColor: backgroundColor }} className="item-container">
      <input className='name-input' type="text"placeholder="Název"/>

      <input className='quantity-input' type="number" placeholder="Počet"/>

      <span>ks</span>

      <button onClick={markAsDone} type="button" class="btn btn-success">Hotovo</button>
      <button onClick={handleRemove} type="button" class="btn btn-danger">Odebrat</button>
    </div>
  );
};

export default Item;
