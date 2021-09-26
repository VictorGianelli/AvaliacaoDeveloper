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


interface RegisterProviderProps {
 children: ReactNode;
}

export const RegisterContext = createContext<Vehicle[]>([]);

export function RegisterProvider({children} : RegisterProviderProps) {
 const [registers, setRegisters] = useState<Vehicle[]>([])

 useEffect(() => {
  api.get('Registers')
   .then(response => setRegisters(response.data.Registers))
 }, []);

 return (
  <RegisterContext.Provider value={registers}>
   {children}
  </RegisterContext.Provider>
 )
}