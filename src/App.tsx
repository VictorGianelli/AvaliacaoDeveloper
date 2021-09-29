import { useState } from "react";
import Modal from 'react-modal';
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { ListCarsTable } from "./components/ListCarsTable";
import { NewVehicle } from "./components/NewVehicle";
import { GlobalStyle } from "./styles/global";
import { VehicleProvider } from "./VehicleContext";

Modal.setAppElement('#root');

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
    <VehicleProvider>

      <GlobalStyle />
      <Header onOpenNewVehicleRegisterModal={handleOpenNewVehicleRegisterModal} />
      <Dashboard />
      <ListCarsTable />
      <NewVehicle
        isOpen={isNewVehicleRegisterModalOpen}
        onRequestClose={handleCloseNewVehicleRegisterModal}
      />

    </VehicleProvider>
  );
}