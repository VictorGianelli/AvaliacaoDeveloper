import { useContext } from 'react';
import lockedImg from '../../assets/locked.svg'
import unlockedImg from '../../assets/unlocked.svg'
import { RegisterContext } from '../../RegisterContext';
import { Container } from "./styles";


export function VehicleTable() {
  const { registers } = useContext(RegisterContext)

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Bloqueio</th>
            <th>Placa</th>
            <th>Renaven</th>
            <th>Ações</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td className="unlocked">
              <img src={unlockedImg} alt="Desbloqueado" />
            </td>

            <td>AAA-1234</td>
            <td>65243254-15</td>
            <td>
              <button>Editar</button>
              <button>Visualizar</button>
            </td>

          </tr>

          <tr>
            <td className="locked">
              <img src={lockedImg} alt="Bloqueado" />
            </td>

            <td>AAA-1234</td>
            <td>65243254-15</td>
            <td>
              <button>Editar</button>
              <button>Visualizar</button>
            </td>

          </tr>

        </tbody>

      </table>

    </Container>
  )
}