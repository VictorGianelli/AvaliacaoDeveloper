import { useContext, useEffect, useState } from 'react';
import lockedImg from '../../assets/locked.svg'
import unlockedImg from '../../assets/unlocked.svg'
import { api } from '../../services/api';
import { VehicleContext } from '../../VehicleContext';
import { Container } from "./styles";


export function ListCarsTable() {
 const { vehicles } = useContext(VehicleContext)


 return (
  <Container>
   <table>
    <thead>
     <tr>
      <th>Bloqueio</th>
      <th>Placa</th>
      <th>CPF</th>
      <th>Renaven</th>
      <th>Ações</th>
     </tr>
    </thead>

    <tbody>
     {vehicles.map(vehicle => (
      <tr key={vehicle.id}>
       <td className="unlocked">
        <img src={unlockedImg} alt="Desbloqueado" />
       </td>

       <td>{vehicle.plate}</td>
       <td>{vehicle.cpf}</td>
       <td>{vehicle.renavan}</td>
       <td>
        <button>Editar</button>
        <button>Visualizar</button>
       </td>

      </tr>
     ))}


     {/* <tr>
      <td className="locked">
       <img src={lockedImg} alt="Bloqueado" />
      </td>

      <td>AAA-1234</td>
      <td>65243254-15</td>
      <td>
       <button>Editar</button>
       <button>Visualizar</button>
      </td>

     </tr> */}

    </tbody>

   </table>

  </Container>
 )
}