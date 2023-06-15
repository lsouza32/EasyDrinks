import { Container, Card, Slogan, ContainerButton, Image } from './styles';
import logo from '../../../assets/images/leisure _ relax.svg';
import { Button } from '../../Button';



export function ProductHero(){
  return(
    <Container>

      <Card>

        <Slogan>
          <h1>Organize seus eventos com facilidade</h1>
        </Slogan>

        <ContainerButton>

          <Button
            placeholder='Iniciar'
            background= '#1475FF'
            color='#fff'
            onClick={()=> {alert('clicou');}}
          />

          <Button
            placeholder='Saber mais'
            background='#F5F5F5'
            color='#333333'
            onClick={()=> {alert('clicou');}}
          />

        </ContainerButton>
      </Card>

      <Image>
        <img src={logo} alt='logo'/>
      </Image>

    </Container>

  );
}
