import { FeatureHighlight } from '../../components/layouts/FeatureHighlight';
import { Navbar } from '../../components/layouts/Navbar';
import { ProductHero } from '../../components/layouts/ProductHero';
import { FooterDetails } from '../../components/layouts/FooterDetails';
import { Header, Body, Footer } from './styles';
import { ProductCta } from '../../components/layouts/ProductCta';

export function Home(){
  return(
    <>
      <Header>
        <Navbar/>
        <ProductHero/>
      </Header>
      <Body>
        <FeatureHighlight/>
        <ProductCta/>
      </Body>
      <Footer>
        <FooterDetails/>
      </Footer>
    </>
  );
}
