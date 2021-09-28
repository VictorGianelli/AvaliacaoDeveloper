import { useState } from "react";
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { ListCarsTable } from "./components/ListCarsTable";
import { NewVehicle } from "./NewVehicle";
import { GlobalStyle } from "./styles/global";

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
      <NewVehicle
        isOpen={isNewVehicleRegisterModalOpen}
        onRequestClose={handleCloseNewVehicleRegisterModal}
      />

    </>
  );
}