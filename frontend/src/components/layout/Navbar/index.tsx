//navbar para o header
import logo from '../../../../public/easydrinks.png';
import { ContainerButtons, ContainerNavbar, HomePage, Items, List, NavbarLink } from './styles';

export function Navbar(){
  return(
    <ContainerNavbar >

      <HomePage>
        <Items>
          <NavbarLink to='' >
            <img src={logo} alt='EasyDrinks' width={50} />
            <h3 style={{marginLeft: '8px'}}>EasyDrinks</h3>
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
        <button type='button' style={{background: '#F5F5F5', color: '#333333'}} >
        Log in
        </button>

        <button type='button' style={{background: '#1475FF', color: '#fff'}} >
        Sign up
        </button>
      </ContainerButtons>

    </ContainerNavbar>

  );
}
