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


interface VehicleProviderProps {
 children: ReactNode;
}

export const VehicleContext = createContext<Vehicle[]>([]);

export function VehicleProvider({children} : VehicleProviderProps) {
 const [vehicles, setVehicles] = useState<Vehicle[]>([])

 useEffect(() => {
  api.get('vehicles')
   .then(response => setVehicles(response.data.Vehicles))
 }, []);

 return (
  <VehicleContext.Provider value={vehicles}>
   {children}
  </VehicleContext.Provider>
 )
}