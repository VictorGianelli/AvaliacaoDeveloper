import { createContext, useEffect, useState, ReactNode } from 'react';
import { api } from './services/api';

interface Vehicle {
 id: number;
 name: string;
 cpf: number;
 plate: string;
 renavan: string;
 // images: [],
 // blocked: boolean;
}

type VehicleInput = Omit<Vehicle, 'id'>;

interface VehicleProviderProps {
 children: ReactNode;
}

interface VehiclesContextData {
 vehicles: Vehicle[];
 createVehicle: (vehicle: VehicleInput) => Promise<void>
}

export const VehicleContext = createContext<VehiclesContextData>(
 {} as VehiclesContextData
);

export function VehicleProvider({ children }: VehicleProviderProps) {
 const [vehicles, setVehicles] = useState<Vehicle[]>([])

 useEffect(() => {
  api.get('vehicles')
   .then(response => setVehicles(response.data.vehicles))
 }, []);

 async function createVehicle(vehicleInput: VehicleInput) {

  const response = await api.post('/vehicles', vehicleInput)

  const { vehicle } = response.data;

  setVehicles([
    ...vehicles,
    vehicle
  ])

 }

 return (
  <VehicleContext.Provider value={{ vehicles, createVehicle }}>
   {children}
  </VehicleContext.Provider>
 )
}