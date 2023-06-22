
import { Button } from '../../Button';
import { Container, Text, ContainerText, ContainerEmail, InputEmail } from './styles';


export function ProductCta() {
  return (
    <Container>
      <ContainerText>
        <Text style={{fontWeight: 'bold', fontSize: '32px'}}>Experimente agora mesmo</Text>
        <Text style={{fontSize: '20px', marginTop: '12px'}}> Junte-se a mais de 2.000 empresas que já estão crescendo com a EasyDrinks.</Text>
      </ContainerText>

      <ContainerEmail>

        <InputEmail placeholder='Endereço de Email'/>
        <Button
          onClick={()=> {
            alert('Clicou');
          }}
          placeholder='Inscreva-se'
          background='#1475FF'
          color='#f5f5f5'
          height='40px'
          width='80px'/>

      </ContainerEmail>

    </Container>
  );
}
