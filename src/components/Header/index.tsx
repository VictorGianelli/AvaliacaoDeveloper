import { Container, Content } from "./styles";
interface HeaderProps {
 onOpenNewVehicleRegisterModal: () => void
}

export function Header({ onOpenNewVehicleRegisterModal }: HeaderProps) {

 return (
  <Container>
   <Content>

    <h3>Sistema de Cadastro e Consulta</h3>

    <button>home</button>
    {/* <button>cadastro</button> */}
    <button onClick={onOpenNewVehicleRegisterModal}  >Cadastrar veiculos</button>

   </Content>
  </Container>
 )
}