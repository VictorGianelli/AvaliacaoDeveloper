import { Dashboard } from "./components/Dashboard";
import Modal from 'react-modal';
import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/global";
import { useState } from "react";
import { ListCarsTable } from "./components/ListCarsTable";

export function App() {

  const [isNewVehicleRegisterModalOpen,
    setIsNewVehicleRegisterModalOpen
   ] = useState(false);
  
   function handleOpenNewVehicleRegisterModal() {
    setIsNewVehicleRegisterModalOpen(true);
   }
  
   function handleCloseNewVehicleRegisterModal() {
    setIsNewVehicleRegisterModalOpen(false);
   }

  return (
    <>

      <GlobalStyle />
      <Header onOpenNewVehicleRegisterModal={handleOpenNewVehicleRegisterModal} />
      <Dashboard />
      <ListCarsTable />
      <Modal
        isOpen={isNewVehicleRegisterModalOpen}
        onRequestClose={handleCloseNewVehicleRegisterModal}
      >
        <h2>Cadastrar transação</h2>
      </Modal>

    </>
  );
}