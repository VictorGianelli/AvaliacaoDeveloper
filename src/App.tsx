import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/global";
import { useState } from "react";
import { VehicleTable } from "./components/CarsTable";
import { NewVehicle } from "./components/NewVehicle";
import { VehicleProvider } from "./VehicleContext";

export function App() {
  
  const [isNewVehicleModalOpen,
    setIsNewVehicleModalOpen
   ] = useState(false);
  
   function handleOpenNewVehicleModal() {
    setIsNewVehicleModalOpen(true);
   }
  
   function handleCloseNewVehicleModal() {
    setIsNewVehicleModalOpen(false);
   }

  return (
    <VehicleProvider>

      <GlobalStyle />
      <Header onOpenNewVehicleModal={handleOpenNewVehicleModal} />
      <Dashboard />
      <VehicleTable />
      <NewVehicle
        isOpen={isNewVehicleModalOpen}
        onRequestClose={handleCloseNewVehicleModal}
      />

    </VehicleProvider>
  );
}