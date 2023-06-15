import { CardsFeature } from '../../CardsFeature';
import { Container } from './styles';
import iconCadProd from '../../../assets/images/feature-highlight-cadastro-produtos.png';
import iconCadEvents from '../../../assets/images/feature-highlight-eventos.png';
import iconSalesReport from '../../../assets/images/feature-highlight-relatorio.png';


export function FeatureHighlight(){
  return(
    <Container>
      <CardsFeature
        icon={iconCadProd}
        title='Cadastro de produtos'
        description='Adicione facilmente informações sobre os produtos disponíveis para venda durante o evento.'
      />

      <CardsFeature
        icon={iconCadEvents}
        title='Cadastro de eventos'
        description='Registre informações sobre os eventos que serão realizados, incluindo nome, local, data e horário.'
      />

      <CardsFeature
        icon={iconSalesReport}
        title='Relatório de vendas'
        description='Exiba informações sobre as vendas realizadas nos eventos anteriores, incluindo gráficos e tabelas.'
      />
    </Container>
  );
}
