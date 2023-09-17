import { useState } from "react";
import Individual from "./Individual"
import Modal from "./Modal"
import { userDataDemo } from "./IndividualData"


const Individuals = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedUser, setSelectedUser] = useState<string | undefined>(undefined)
  console.log(userDataDemo)
  console.log(userDataDemo[0].name)
  const handleConnectWallet = (address: string) => {
    setSelectedUser(address)
    setIsModalOpen(true)
  };

  const handleCloseModal = () => {
    setIsModalOpen(false)
  };
  return (
    <div className="flex flex-col items-center justify-center ">
      {isModalOpen && <Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        userAddress={selectedUser}
      />}
      <div className="flex flex-col items-center justify-center sm:grid grid-flow-row gap-10 sm:grid-cols-1 md:grid-cols-2 py-20">
        {userDataDemo.map((user, index) => (
        
          <Individual key={index}
            handleConnectWallet={handleConnectWallet}
            address={user.address}
            message={user.message}
            description={user.description}
            homeAddress={user.homeAddress}
            name={user.name}
            image={user.url}
          />
      ))}
      </div>
      
  
    </div>
  )
}

export default Individuals
