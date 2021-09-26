import Modal from 'react-modal';

interface NewVehicleProps {
  isOpen: boolean;
  onRequestClose: () => void
}

export function NewVehicle({ isOpen, onRequestClose }: NewVehicleProps) {

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
    >
      <h2>Cadastrar Veiculo</h2>
    </Modal>
  )
}