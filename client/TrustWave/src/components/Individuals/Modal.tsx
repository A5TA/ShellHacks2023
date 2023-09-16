import React, { useContext, useState } from 'react';
import { TransactionContext } from '../../context/TranscationContext';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { amount, keyword, message } = formData;
    if (!amount || !keyword || !message) return alert("The Form was not submitted due to missing fields");

    sendTransaction()
    setFormData({addressTo: "", amount: "", keyword: "", message: ""})
    onClose();
  };
  const {formData, setFormData, handleChange, sendTransaction} = useContext(TransactionContext)


  return (
    <div className={`modal ${isOpen ? 'open' : ''} flex flex-col`}>
  <div className="modal-content">
    <h2>Crypto Information</h2>
    <form onSubmit={handleFormSubmit}>
      <input
        placeholder="Address To"
        name="addressTo"
        type="text"
        value={123123312}
        className="blue-input" 
      />
      <input
        placeholder="Amount (ETH)"
        name="amount"
        type="number"
        value={formData.amount}
        onChange={(e) => handleChange(e, "amount")}
        className="blue-input" 
      />
      <input
        placeholder="Keyword (Gif)"
        name="keyword"
        type="text"
        value={formData.keyword}
        onChange={(e) => handleChange(e, "keyword")}
        className="blue-input" 
      />
      <input
        placeholder="Enter Message"
        name="message"
        type="text"
        value={formData.message}
        onChange={(e) => handleChange(e, "message")}
        className="blue-input" 
      />
      <div className="button-container">
        <button className="close-button" onClick={onClose}>Close</button>
        <button className="submit-button" type="submit">Submit</button>
      </div>
    </form>
  </div>
</div>
  );
};

export default Modal;
