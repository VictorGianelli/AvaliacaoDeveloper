import { createContext, useEffect, useState, ReactNode } from 'react';
import { api } from './services/api';

interface Vehicle {
 id: number;
 name: string;
 locked: boolean;
 vehiclePlate: string;
 renavan: string;
 // images: [],
 // blocked: boolean;
}

type VehicleInput = Omit<Vehicle, 'id' >;

interface VehicleProviderProps {
 children: ReactNode;
}

interface VehiclesContextData {
 vehicles: Vehicle[];
 createVehicle: (vehicle: VehicleInput) => void
}

export const VehicleContext = createContext<VehiclesContextData>(
 {} as VehiclesContextData
);

export function VehicleProvider({children} : VehicleProviderProps) {
 const [vehicles, setVehicles] = useState<Vehicle[]>([])

 useEffect(() => {
  api.get('vehicles')
   .then(response => setVehicles(response.data.Vehicles))
 }, []);

 function createVehicle(vehicle: VehicleInput) {

  api.post('/vehicles', vehicle)
}

 return (
  <VehicleContext.Provider value={{vehicles, createVehicle}}>
   {children}
  </VehicleContext.Provider>
 )
}