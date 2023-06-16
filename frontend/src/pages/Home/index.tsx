import { FeatureHighlight } from '../../components/layouts/FeatureHighlight';
import { Navbar } from '../../components/layouts/Navbar';
import { ProductHero } from '../../components/layouts/ProductHero';
import { FooterDetails } from '../../components/layouts/FooterDetails';
import { Header, Body, Footer } from './styles';

export function Home(){
  return(
    <>
      <Header>
        <Navbar/>
        <ProductHero/>
      </Header>
      <Body>
        <FeatureHighlight/>
      </Body>
      <Footer>
        <FooterDetails/>
      </Footer>
    </>
  );
}
