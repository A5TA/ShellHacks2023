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
    <div className={`modal ${isOpen ? 'open' : ''}`}>
      <div className="modal-content">
        <h2>Crypto Information</h2>
        <form onSubmit={handleFormSubmit}>
          <input
            placeholder="Address To"
            name="addressTo"
            type="text"
            value={123123312}
          />
          <input
            placeholder="Amount (ETH)"
            name="amount"
            type="number"
            value={formData.amount}
            onChange={(e) => handleChange(e, "amount")}
          />
          <input
            placeholder="Keywords"
            name="keyword"
            type="text"
            value={formData.keyword}
            onChange={(e) => handleChange(e, "keyword")}
          />
          <input
            placeholder="Enter Message"
            name="message"
            type="text"
            value={formData.message}
            onChange={(e) => handleChange(e, "message")}
          />
          <button type="submit">Submit</button>
        </form>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default Modal;
