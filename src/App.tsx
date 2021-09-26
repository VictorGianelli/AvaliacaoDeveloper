import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/global";
import { useState } from "react";
import { VehicleTable } from "./components/CarsTable";
import { NewVehicle } from "./components/NewVehicle";
import { RegisterContext } from "./RegisterContext";

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
    <RegisterContext.Provider value={[]} >

      <GlobalStyle />
      <Header onOpenNewVehicleRegisterModal={handleOpenNewVehicleRegisterModal} />
      <Dashboard />
      <VehicleTable />
      <NewVehicle
        isOpen={isNewVehicleRegisterModalOpen}
        onRequestClose={handleCloseNewVehicleRegisterModal}
      />

    </RegisterContext.Provider>
  );
}