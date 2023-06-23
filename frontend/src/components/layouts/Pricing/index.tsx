import { CardsPricing } from '../../CardsPricing';
import { Container } from './styles';

export function Pricing() {
  return(
    <Container>
      <CardsPricing typePlan='Plano Básico' value='10' >
        <li>Cadastro de eventos</li>
        <li>Organização de estoque</li>
        <li>Bar QRCode</li>
      </CardsPricing>

      <CardsPricing typePlan='Plano Premium' value='50' >
        <li>Cadastro de eventos</li>
        <li>Organização de estoque</li>
        <li>Bar QRCode</li>
        <li>Relatório de vendas</li>
      </CardsPricing>

    </Container>
  );
}
