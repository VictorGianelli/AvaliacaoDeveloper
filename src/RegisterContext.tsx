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

type RegisterInput = Omit<Vehicle, 'id'>;

interface RegisterProviderProps {
 children: ReactNode;
}

interface RegistersContextData {
 registers: Vehicle[];
 createRegister: (register: RegisterInput) => void
}

export const RegisterContext = createContext<RegistersContextData>(
 {} as RegistersContextData
);

export function RegisterProvider({ children }: RegisterProviderProps) {
 const [registers, setRegisters] = useState<Vehicle[]>([])

 useEffect(() => {
  api.get('registers')
   .then(response => setRegisters(response.data.registers))
 }, []);

 function createRegister(register: RegisterInput) {

  api.post('/registers', register)
 }

 return (
  <RegisterContext.Provider value={{ registers, createRegister }}>
   {children}
  </RegisterContext.Provider>
 )
}