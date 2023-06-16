import { LinkNavbar } from '../../LinkNavbar';
import { Container, Description, Image, List, Details, ContainerDescription, ContainerGetApp, ContainerSocial } from './styles';
import googleplayLogo from '../../../assets/images/google-play-badge.png';
import appstoreLogo from '../../../assets/images/App-Store-Badge.svg';
import iconInstagram from '../../../assets/images/icon-instagram.png';
import iconFacebook from '../../../assets/images/icon-facebook.png';
import iconTwitter from '../../../assets/images/icon-twitter.png';




export function FooterDetails() {
  return (
    <Container>
      <Details>
        <ContainerDescription>
          <Image>
            <img src='/easydrinks4.png' alt='Logo-EasyDrinks' width={150}/>
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

          <ContainerSocial>
            <LinkNavbar to='/'>
              <img src={iconFacebook} alt='Facebook-page' width={40}/>
            </LinkNavbar>

            <LinkNavbar to='/'>
              <img src={iconInstagram} alt='Instagram-page' width={40}/>
            </LinkNavbar>

            <LinkNavbar to='/'>
              <img src={iconTwitter} alt='Twitter-page' width={40}/>
            </LinkNavbar>
          </ContainerSocial>

        </ContainerGetApp>

      </Details>

      <Description>© Todos os direitos reservados - EasyDrinks - 2024 </Description>

    </Container>
  );
}
