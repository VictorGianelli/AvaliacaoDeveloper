import { Container, Content } from "./styles";
interface HeaderProps {
 onOpenNewVehicleModal: () => void
}

export function Header({ onOpenNewVehicleModal }: HeaderProps) {

 return (
  <Container>
   <Content>

    <h3>Sistema de Cadastro de Veiculos</h3>

    <button>home</button>
    
    <button onClick={onOpenNewVehicleModal}  >Cadastrar veiculos</button>

   </Content>
  </Container>
 )
}