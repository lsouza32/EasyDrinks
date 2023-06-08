import { Container, Card, Slogan, ContainerButton, Image } from './styles';
import logo from '../../../assets/images/leisure _ relax.svg';



export function ProductHero(){
  return(
    <Container>

      <Card>

        <Slogan>
          <h1>Organize seus eventos com facilidade</h1>
        </Slogan>


        <ContainerButton>
          <button type='button' style={{background: '#1475FF', color: '#fff'}} >
            Iniciar
          </button>

          <button type='button' style={{background: '#F5F5F5', color: '#333333'}} >
            Saber mais
          </button>


        </ContainerButton>

      </Card>

      <Image>
        <img src={logo} alt='logo'/>
      </Image>

    </Container>

  );
}
