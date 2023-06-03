import { Navbar } from '../../layout/Navbar';
import { ProductHero } from '../../layout/ProductHero';
import { Header } from './styles';

export function Home(){
  return(
    <Header>

      <Navbar/>
      <ProductHero/>

    </Header>
  );
}
