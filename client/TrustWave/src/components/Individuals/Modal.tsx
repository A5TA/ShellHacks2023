import React, { useState } from 'react';

interface FormData {
  addressTo: string;
  amount: string;
  keyword: string;
  message: string;
}

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  handleSubmit: (formData: FormData) => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, handleSubmit }) => {
  const [formData, setFormData] = useState<FormData>({
    addressTo: '',
    amount: '',
    keyword: '',
    message: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleSubmit(formData);
    onClose();
  };

  return (
    <div className={`modal ${isOpen ? 'open' : ''}`}>
      <div className="modal-content">
        <h2>Crypto Information</h2>
        <form onSubmit={handleFormSubmit}>
          <input
            placeholder="Address To"
            name="addressTo"
            type="text"
            value={formData.addressTo}
            onChange={handleInputChange}
          />
          <input
            placeholder="Amount (ETH)"
            name="amount"
            type="number"
            value={formData.amount}
            onChange={handleInputChange}
          />
          <input
            placeholder="Keyword (Gif)"
            name="keyword"
            type="text"
            value={formData.keyword}
            onChange={handleInputChange}
          />
          <input
            placeholder="Enter Message"
            name="message"
            type="text"
            value={formData.message}
            onChange={handleInputChange}
          />
          <button type="submit">Submit</button>
        </form>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default Modal;
