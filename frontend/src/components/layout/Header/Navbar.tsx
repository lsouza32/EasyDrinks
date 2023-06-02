//navbar para o header
import { Link } from 'react-router-dom';

import logo from '../../../../public/easydrinks.png';
import { ContainerButtons, ContainerNavbar, HomePage, Items, List } from './styles';

export function Navbar(){
  return(
    <ContainerNavbar >

      <HomePage>
        <Items>
          <Link to='' style={{display: 'flex', alignItems:'center', textDecoration: 'none'}}>
            <img src={logo} alt='EasyDrinks' width={50} />
            <h3 style={{marginLeft: '8px'}}>EasyDrinks</h3>
          </Link>
        </Items>
      </HomePage>

      <List>

        <Items>
          <Link to='' style={{textDecoration: 'none'}}>Preços</Link>
        </Items>

        <Items>
          <Link to=''  style={{textDecoration: 'none'}}>Sobre nós</Link>
        </Items>

        <Items>
          <Link to=''  style={{textDecoration: 'none'}}>Features</Link>
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
