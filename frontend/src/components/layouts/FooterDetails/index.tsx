import { LinkNavbar } from '../../LinkNavbar';
import { Container, Description, Image, List, Details, ContainerDescription, ContainerGetApp } from './styles';
import googleplayLogo from '../../../assets/images/google-play-badge.png';
import appstoreLogo from '../../../assets/images/App-Store-Badge.svg';



export function FooterDetails() {
  return (
    <Container>
      <Details>
        <ContainerDescription>
          <Image>
            <img src='/easydrinks3.png' alt='Logo-EasyDrinks' width={100}/>
          </Image>

          <Description>
            Simplificando a organização de eventos para uma
            experiência inesquecível. Ajudamos você a tornar seus eventos mais
            fáceis e simples, eliminando filas e proporcionando uma experiência
            incrível para todos os presentes. Facilite a vida dos seus convidados e
            garanta momentos memoráveis com EasyDrinks.
          </Description>

          <List>
            <LinkNavbar to='/' title='Home'/>
            <LinkNavbar to='/' title='Sobre nós'/>
            <LinkNavbar to='/' title='Blog'/>
            <LinkNavbar to='/' title='Preços'/>
            <LinkNavbar to='/' title='Contato'/>
          </List>
        </ContainerDescription>

        <ContainerGetApp>
          <Description style={{paddingRight: '20px'}}>Baixe o app</Description>
          <LinkNavbar to='/'>
            <img src={googleplayLogo} alt='Google-Play-Download' width={150}/>
          </LinkNavbar>

          <LinkNavbar to='/'>
            <img src={appstoreLogo} alt='App-Store-Download' width={150}/>
          </LinkNavbar>
        </ContainerGetApp>

      </Details>

      <h3> -----linha ----</h3>

      <h3>© Todos os direitos reservados - EasyDrinks - 2077 </h3>

    </Container>
  );
}
