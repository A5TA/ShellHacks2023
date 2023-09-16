import { useContext, useState } from "react";
import Individual from "./Individual"
import Modal from "./Modal"
import userDataDemo from "./IndividualData.ts"

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
      {/*   id: 1,
      url: "https://i.imgflip.com/3kavyw.png?a470520",
      message: "",
      address: "Springfield, MO",
      summary: "", */}
      {userDataDemo.map((user, index) => (
        <div className="mb-10" key={index}>
          <Individual
            handleConnectWallet={handleConnectWallet}
            address={user.address}
            message={user.message}
            description={user.description}
            homeAddress={user.homeAddress}
            name={user.name}
          />
        </div>
      ))}
  
    </div>
  )
}

export default Individuals
