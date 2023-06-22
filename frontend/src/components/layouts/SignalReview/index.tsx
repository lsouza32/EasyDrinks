import imageUser from '../../../mocks/picture-xii.png';
import starRating from '../../../mocks/star-rating.svg';

import { Container, Text, Img, TextDetailsUser } from './styles';

export function SignalReview(){
  return(
    <Container>

      <Text>EasyDrinks me ajudou a organizar meu evento com muito
        mais eficiência e praticidade. Recomento!</Text>

      <Img src={imageUser} alt='Imagem-de-usuario'/>
      <TextDetailsUser>XII de Março</TextDetailsUser>
      <TextDetailsUser>A.A.A.E XII de Março</TextDetailsUser>
      <img src={starRating} width={100} style={{marginTop:'8px'}}/>

    </Container>
  );
}
