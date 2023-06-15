//navbar para o header
import logo from '/easydrinks3.png';
import { ContainerButtons, ContainerNavbar, HomePage, Items, List, NavbarLink } from './styles';
import {Button} from '../../Button/';

export function Navbar(){
  return(
    <ContainerNavbar >

      <HomePage>
        <Items>
          <NavbarLink to='' >
            <img src={logo} alt='EasyDrinks-logo' width={120} />
          </NavbarLink>
        </Items>
      </HomePage>

      <List>

        <Items>
          <NavbarLink to=''>Preços</NavbarLink>
        </Items>

        <Items>
          <NavbarLink to=''>Sobre nós</NavbarLink>
        </Items>

        <Items>
          <NavbarLink to='' >Features</NavbarLink>
        </Items>

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
