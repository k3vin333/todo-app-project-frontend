import React from 'react';
import Modal from 'react-modal';

const PopUpError = ({ isOpen, onClose, message }) => {
  return (
    <Modal isOpen={isOpen} onRequestClose={onClose} className="modal-content">
      <button className="close-button" onClick={onClose}>X</button>
      <h2>Error</h2>
      <p>{message}</p>
    </Modal>
  );
};

export default PopUpError;
