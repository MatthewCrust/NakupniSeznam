import React, { useState } from 'react';
import './SeznamPage.css'
import Navbar from './Navbar';
import Item from './Item';
import Modal from 'react-modal';

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


    return (
      <div>
        <Navbar />
        <div className='main-div'>

          <div className="title-box">
            <h1>Název</h1>
          </div>

          <div className='list-items'>
            {items.map(item => (
              <Item key={item.id} id={item.id} onRemove={removeItem} />
            ))}
          </div>


          <button onClick={addItem} type="button" class="btn btn-primary">Přidat položku</button>
          
          <div className='seznam-button-box'>
            <button onClick={openModal} type="button" class="btn btn-primary">Přidat uživatele</button>
            <button onClick={done} type="button" class="btn btn-success">Označit jako hotové</button>
            <button onClick={archive} type="button" class="btn btn-warning">Archivovat</button>
            <button onClick={removeAll} type="button" class="btn btn-danger">Smazat položky</button>
          </div>

        </div>

        <Modal className="modal-custom-style" isOpen={isModalOpen} onRequestClose={closeModal} contentLabel="Přidat uživatele">
          <h2 id='modal-title'>Přidat uživatele</h2>
          <div className='modal-box'>
            <input placeholder='Jméno uživatele' type="text" value={newUserName} onChange={(e) => setNewUserName(e.target.value)}/>
            <button class="btn btn-primary" onClick={addUser}>Přidat uživatele</button>
            <button class="btn btn-danger" onClick={closeModal}>Zavřít</button>

            <h3>Seznam uživatelů:</h3>
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