import { useState } from "react";
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { ListCarsTable } from "./components/ListCarsTable";
import { NewVehicle } from "./components/NewVehicle";
import { GlobalStyle } from "./styles/global";
import { VehicleContext } from "./VehicleContext";

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
    <VehicleContext.Provider value={[]}>

      <GlobalStyle />
      <Header onOpenNewVehicleRegisterModal={handleOpenNewVehicleRegisterModal} />
      <Dashboard />
      <ListCarsTable />
      <NewVehicle
        isOpen={isNewVehicleRegisterModalOpen}
        onRequestClose={handleCloseNewVehicleRegisterModal}
      />

    </VehicleContext.Provider>
  );
}