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
      
      <div className="mb-10"><Individual handleConnectWallet={handleConnectWallet} address={"0xd7Da7f0d221Fa3Dc73b335F311bb598AAE1779a4"}/></div>
  
    </div>
  )
}

export default Individuals
