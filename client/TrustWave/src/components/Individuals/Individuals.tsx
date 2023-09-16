import { useContext, useState } from "react";
import Individual from "./Individual"
import Modal from "./Modal";

const Individuals = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedUser, setSelectedUser] = useState<string | undefined>(undefined)
  const handleConnectWallet = (address: string) => {
    setSelectedUser(address)
    setIsModalOpen(true)
  };

  const handleCloseModal = () => {
    setIsModalOpen(false)
  };
  return (
    <div className="flex flex-col items-center sm:grid grid-flow-row gap-10 sm:grid-cols-1 md:grid-cols-2 py-20">
      {isModalOpen && <Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        userAddress={selectedUser}
      />}
      
      <div className="mb-10"><Individual handleConnectWallet={handleConnectWallet} address={"0x926C3ee93bb42F6853A44FC6b38f504EEd194b7d"}/></div>
  
    </div>
  )
}

export default Individuals
