import { FormEvent, useState } from 'react';
import Modal from 'react-modal';
import closeImg from '../../assets/close.svg'
import { api } from '../../services/api';
import { Container, UploadImagesContainer } from './styles';

interface NewVehicleProps {
  isOpen: boolean;
  onRequestClose: () => void
}

export function NewVehicle({ isOpen, onRequestClose }: NewVehicleProps) {

  const [plate, setPlate] = useState('')
  const [renavan, setRenavan] = useState('')
  const [name, setName] = useState('')
  const [cpf, setCpf] = useState(0)

  function handleCreateVehicle(event: FormEvent) {
    event.preventDefault();

    const data = {
      plate,
      renavan,
      name,
      cpf
    }

    setPlate('');
    setRenavan('');
    setName('');
    setCpf(0);
    onRequestClose();

    api.post('/register', data)
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button
        type="button"
        onClick={onRequestClose}
        className="react-modal-close"
      >
        <img src={closeImg} alt="Fechar modal" />
      </button>

      <Container onSubmit={handleCreateVehicle}>
        <h2>Cadastrar de veículos</h2>

        <input
          placeholder="Placa"
          value={plate}
          onChange={event => setPlate(event.target.value)}
        />

        <input
          placeholder="Renavan"
          value={renavan}
          onChange={event => setRenavan(event.target.value)}
        />

        <input
          placeholder="Nome do proprietário"
          value={name}
          onChange={event => setName(event.target.value)}
        />

        <input
          type="number"
          placeholder="CPF"
          value={cpf}
          onChange={event => setCpf(Number(event.target.value))}
        />

        <UploadImagesContainer>
          <h3>Carregar imagem</h3>
          <button>
            Escolher um arquivo
          </button>
        </UploadImagesContainer>

        <button type="submit">
          Cadastrar
        </button>


      </Container>
    </Modal>
  )
}