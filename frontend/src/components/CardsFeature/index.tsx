import { Container, Title, Description, ContainerText, Image } from './styles';

interface CardsProps {
  icon: string,
  title: string,
  description: string
}

export function CardsFeature({icon, title, description}: CardsProps) {
  return(
    <Container>
      <Image>
        <img src={icon} alt={title} width={32} />
      </Image>

      <ContainerText>
        <Title>{title}</Title>
        <Description>{description}</Description>
      </ContainerText>

    </Container>
  );
}
