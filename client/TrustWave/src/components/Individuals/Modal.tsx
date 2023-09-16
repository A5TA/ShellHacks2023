import React, { useContext } from 'react';
import { TransactionContext } from '../../context/TranscationContext';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  userAddress: string | undefined;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, userAddress }) => {
  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { amount, keyword, message } = formData;
    // if (!userAddress) return alert("Missing user address")
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
        value={userAddress}
        name="addressTo"
        type="text"
        className="blue-input" 
        readOnly
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
