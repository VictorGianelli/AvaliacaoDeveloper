import Modal from 'react-modal';
import closeImg from '../../assets/close.svg'
import { Container } from './styles';
import { UploadImagesContainer } from './styles';

interface NewVehicleProps {
  isOpen: boolean;
  onRequestClose: () => void
}

export function NewVehicle({ isOpen, onRequestClose }: NewVehicleProps) {

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
      <Container>
        <h2>Cadastrar de veículos</h2>

        <input
          placeholder="Placa"
        />

        <input
          // type="number"
          placeholder="Renavan"
        />

        <input
          placeholder="Nome do proprietário"
        />

        <input
          type="number"
          placeholder="CPF"
        />

        <UploadImagesContainer>
          <h3>Carregar imagem</h3>
          <button>
            Escolher um arquivo
          </button>
        </UploadImagesContainer>
        {/* <div>Carregar imagem</div>
        <button>
          Escolher um arquivo
        </button> */}

        {/* <input type="checkbox" name="Bloqueado" id="block" /> */}

        <button type="submit">
          Cadastrar
        </button>


      </Container>
    </Modal>
  )
}