import React, { useState } from 'react';
import './SeznamPage.css'
import Navbar from './Navbar';
import Item from './Item';
import Modal from 'react-modal';
import { useDarkMode } from './DarkModeContext';
import { useTranslation } from 'react-i18next';

function List() {

  const [items, setItems] = useState([]);

  const [isArchived, setArchive] = useState(false);

  const [isDone, setDone] = useState(false);


  const addItem = () => {
    const newItem = { id: Date.now() };
    setItems(prevItems => [...prevItems, newItem]);
  };

  const removeItem = (itemId) => {
    setItems(prevItems => prevItems.filter(item => item.id !== itemId));
  };

  const removeAll = () => {
    setItems([]);
  };

  const archive = () => {
    setArchive(true)
    alert("Seznam byl archivován")
  };

  const done = () => {
    setDone(true)
    alert("Seznam byl označen jako hotový")
  };

  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const [users, setUsers] = useState(['User1', 'User2', 'User3']);
  const [newUserName, setNewUserName] = useState('');

  const addUser = () => {
    setUsers(prevUsers => [...prevUsers, newUserName]);
    setNewUserName('');
    closeModal();
  };

  const { darkMode, toggleDarkMode } = useDarkMode();

  const { t } = useTranslation();

    return (
      <div>
        <Navbar />
        <div className='main-div'>

          <div className={`title-box ${darkMode ? 'title-box-dark' : ''}`}>
            <h1>{t("title-card")}</h1>
          </div>

          <div className='list-items'>
            {items.map(item => (
              <Item key={item.id} id={item.id} onRemove={removeItem} />
            ))}
          </div>


          <button onClick={addItem} type="button" class="btn btn-primary">{t("add-item-button")}</button>
          
          <div className='seznam-button-box'>
            <button onClick={openModal} type="button" class="btn btn-primary">{t("add-user-button")}</button>
            <button onClick={done} type="button" class="btn btn-success">{t("mark-done-button")}</button>
            <button onClick={archive} type="button" class="btn btn-warning">{t("archive-button")}</button>
            <button onClick={removeAll} type="button" class="btn btn-danger">{t("seznam-delete-button")}</button>
          </div>

        </div>

        <Modal className="modal-custom-style" isOpen={isModalOpen} onRequestClose={closeModal} contentLabel="Přidat uživatele">
          <h2 id='modal-title'>{t("add-user-button")}</h2>
          <div className='modal-box'>
            <input placeholder={t("users-name-placeholder")} type="text" value={newUserName} onChange={(e) => setNewUserName(e.target.value)}/>
            <button class="btn btn-primary" onClick={addUser}>{t("add-user-button")}</button>
            <button class="btn btn-danger" onClick={closeModal}>{t("close-button")}</button>

            <h3>{t("list-users-title")}</h3>
            <ul>
              {users.map((user, index) => (
                <li key={index}>{user}</li>
              ))}
            </ul>
          </div>
        </Modal>

      </div>

    );
  };
  
  export default List;