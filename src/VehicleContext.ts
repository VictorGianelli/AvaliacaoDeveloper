import { createContext, useEffect } from 'react';
import { api } from './services/api';

export const VehicleContext = createContext([]);

// export function RegistersProvider({ children }: RegistersProviderProps) {
//  const [Registers, setRegisters] = useState<Register[]>([])

//  useEffect(() => {
//   api.get('Registers')
//    .then(response => setRegisters(response.data.Registers))
//  }, []);

//  return (
//   <RegisterContext.Provider value={Registers}>
//    {children}
//   </RegisterContext.Provider>
//  )
// }