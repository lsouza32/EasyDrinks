//navbar para o header
import logo from '/easydrinks3.png';
import { ContainerButtons, ContainerNavbar, HomePage, List } from './styles';
import {Button} from '../../Button/';
import { LinkNavbar } from '../../LinkNavbar';

export function Navbar(){
  return(
    <ContainerNavbar >

      <HomePage>
        <LinkNavbar to='/'>
          <img src={logo} alt='EasyDrinks-logo' width={120} />
        </LinkNavbar>
      </HomePage>

      <List>
        <LinkNavbar to='/' title='Preços'/>
        <LinkNavbar to='/' title='Sobre nós'/>
        <LinkNavbar to='/' title='Features'/>
      </List>

      <ContainerButtons>

        <Button
          placeholder='Log in'
          background= '#F5F5F5'
          color='#333333'
          onClick={()=> {alert('clicou');}}
        />

        <Button
          placeholder='Sign up'
          background='#1475FF'
          color='#fff'
          onClick={()=> {alert('clicou');}}
        />

      </ContainerButtons>
    </ContainerNavbar>

  );
}
