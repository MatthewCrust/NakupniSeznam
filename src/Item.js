import './Item.css';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
function Item({ id, onRemove }) {

  const [backgroundColor, setBackgroundColor] = useState('initialColor');

  const handleRemove = () => {
    onRemove(id);
  };

  const markAsDone = () =>{
    setBackgroundColor('#33cc33');
  }
  const { t } = useTranslation();

  return (
    <div style={{ backgroundColor: backgroundColor }} className="item-container">
      <input className='name-input' type="text"placeholder={t("title-card")}/>

      <input className='quantity-input' type="number" placeholder={t("amount-placeholder")}/>

      <span>{t("pcs-placeholder")}</span>

      <button onClick={markAsDone} type="button" class="btn btn-success">{t("done-button")}</button>
      <button onClick={handleRemove} type="button" class="btn btn-danger">{t("remove-button")}</button>
    </div>
  );
};

export default Item;
