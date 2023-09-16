import { useState } from "react";
import Individual from "./Individual"
import Modal from "./Modal";

const Individuals = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleConnectWallet = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  return (
    <div className="flex flex-col items-center sm:grid grid-flow-row gap-10 sm:grid-cols-1 md:grid-cols-2 py-20">
      {isModalOpen && <Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />}
      
  {/* <div className="md:ml-20"> */}
    <div className="mb-10"><Individual handleConnectWallet={handleConnectWallet} /></div>
    {/* <div className="mb-10"><Individual /></div> */}
    {/* <div className="mb-10"><Individual /></div>
  </div>
  <div className="md:mr-20">
    <div className="mb-10"><Individual /></div>
    <div className="mb-10"><Individual /></div>
    <div className="mb-10"><Individual /></div>
  </div> */}
</div>
  )
}

export default Individuals