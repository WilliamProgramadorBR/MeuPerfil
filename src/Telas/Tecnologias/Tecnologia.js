// Tecnologia.js

import TecnologiaChart from '../../Componentes/grafico/TecnologiaChart';
import Layout from '../../Componentes/menu-lateral/Layout';
import styled,{ createGlobalStyle} from 'styled-components';
import {GlobalStyles} from'./../../Componentes/mododarkin/StyledWebsite'

import setaparabaixo from '../../Fotos/setaparabaixo.gif';
import loading from '../../Fotos/loading.gif';
import { useEffect,useState } from 'react';


/* Estilos para telas menores que 768 pixels de largura */


const TecnologiaContainer = styled.div`
  height: 120%;
  display: flex;
  width: 80%;
  margin-left: 10%;
  flex-direction: column;
  margin-top: -5%;
  align-items: center;
  justify-content: center;
  margin-bottom: 10%; /* Adicione um espaçamento na parte inferior para evitar a sobreposição do footer */
  

  @media (max-width: 400px) {
    width: 100%; /* Ajuste para ocupar 100% da largura em telas menores que 401px */
    margin: 2%; /* Redução da margem para telas menores que 401px */
  }
`;

const TituloPrincipal = styled.h2`
  font-size: 100%;
  font-weight: bold;
  margin-top: 20%;
  color: #333; 
  font-family: 'Agbalumo', sans-serif; 
`;
const estiloTexto = {
  fontWeight: 'bold',
  color: 'black',
  fontFamily: "'Agbalumo', 'Archivo Black', sans-serif",
  
}
const StyledImage = styled.img`
  width: 30%; /* Ajuste o tamanho conforme necessário */
  height: auto; /* Isso garante que a proporção seja mantida */
`;

const PorcentagemWidth = styled.div`
  width: 50%; 
  margin: 5%; 

  @media (max-width: 768px) {
    width: 100%; /* Ajuste para ocupar 100% da largura em telas menores */
    margin: 2%; /* Redução da margem para telas menores */
  }
`;
//Areas dos textos
const NodeBack = 'Tenho um carinho por desenvolver back-ends em Node. Claro que procuro aprender outros métodos de desenvolver back-ends. No momento, estou aprendendo C# e já desenvolvi pequenos back-ends em Typescript. No entanto, busco sempre ser muito bom em uma única linguagem, suas bibliotecas e recursos, ao invés de aprender diversas e não conseguir dominar o básico. Resumindo, meus conhecimentos em Node.js são uma tecnologia à qual já tenho afinidade. Consigo desenvolver coisas mais robustas e, quando enfrento dificuldades com algumas lógicas, sei pesquisar e ler a documentação. É importante entender suas dúvidas para encontrar as melhores respostas! 🧐'
const textJwt = 'Em busca do primeiro emprego como Dev, consegui fazer alguns freelancers para poder ganhar experiencia e adquirir novas habilidades. Logo aprendi a criar sessão utilizando Cokkies e Jwt, uma combinação muito legal, assim a sessão ficava tanto no front e no back-end, para manter a integridade do site e sua segurança, o usuário tinha que mandar um Cokies que tinha um token em jwt, logo a verifacação era finalizada nos middlewares. Respeitando sempre a politica de Cors, também criei uma verificação para ver se a solicitação e token vinha de um domínio permitido pelo servidor. Gosto muito de segurança nas informações, integridade de dados e não me importo se vai demorar, o importante é o usuário ter segurança e claro o sistema também. 🔥'
const textFront = 'Também tenho experiência no front-end, com conhecimento em Angular e React. Este site, por exemplo, foi desenvolvido em React. Sei trabalhar com gráficos conectados diretamente ao banco de dados. Gosto de compreender tanto a parte do front-end quanto do back-end, o que me faz sentir um desenvolvedor completo, entendendo todo o ciclo de vida do software. Além disso, tenho um bom entendimento de arquitetura de computadores, o que considero um conhecimento valioso para avaliar o desempenho do código. Como mencionei, meu objetivo é obter um mestrado na área de tecnologia, abrangendo todos os aspectos, incluindo conhecimento em redes. 🤖'
const Bdtext = 'MySql: Banco de dados relacional. Uma das minhas experiências em desenvolvimento é trabalhar com o banco de dados MySQL. Sei salvar arquivos em formato blob e também utilizar a técnica de triggers. Não sei se é uma prática boa, pois estou em fase de desenvolvimento. Gosto de usar a técnica de trigger para fazer selects em bases de dados inseridos em outra tabela. Isso mantém a integridade dos dados e facilita na hora de criar filtros no front-end, já que só serão exibidos selects e options existentes no banco de dados. Embora não seja nenhuma novidade, é algo válido a ressaltar. Gosto e pretendo aprender formas de otimizar consultas, sempre procurando estar aprendendo novas técnicas de inserção e manipulação de dados. Um banco de dados bem organizado gera frutos financeiros e também facilita na sua manutenção. 🔧👨🏾‍🔧'
const BdMongo =  'No banco de dados MongoDB, tive uma experiência muito positiva. Aprendi a lidar com sua forma de armazenar dados em formato de documentos BSON (Binary JSON), o que foi uma experiência incrível. Considero o MongoDB um banco de dados muito performático, sendo excelente para atuar em APIs de alta escalabilidade e em situações com grande volume de requisições. No entanto, é importante notar que isso pode acarretar custos mais elevados. Mesmo assim, acredito que vale a pena estudar essa forma de inserção de dados. 💾📀'
const expreess = 'Utilizando o pacote Express, consegui desenvolver back-ends complexos. Confesso que, no começo, não sabia que programar em JavaScript no Node.js poderia ser algo tão interessante. Ao ler a documentação e pesquisar as informações corretas, a combinação de análise e conhecimento possibilita a criação de bons processos de dados. Nessa trajetória, utilizei a biblioteca Express para criar sessões, middlewares robustos e até mesmo para fazer o servidor enviar e receber arquivos. Claro que, nesse desenvolvimento, utilizei outras bibliotecas, mas com cuidado para não tornar o site muito pesado. Foram experiências incríveis que me proporcionaram novas habilidades e uma perspectiva lógica. Estudar tecnologia não é fácil; sempre é necessário se manter atualizado. 😅'
const Tecnologia = () => {
  const [dadosCarregados, setDadosCarregados] = useState(false);
  
  const dadosTecnologia = [
    { nome: 'Node.js', percentual: 60, descricao: 'Backend usando Node.js'+' '+ NodeBack },
    { nome: 'Express.js', percentual: 25, descricao: 'Framework web para Node.js: ' +' '+ expreess },
    { nome: 'MongoDB', percentual: 20, descricao: 'Banco de dados NoSQL: '+' '+ BdMongo },
    { nome: 'MySql', percentual: 40, descricao: 'Banco de dados relacional:'+' '+ Bdtext },
    { nome: 'Sessão JWT Cookies', percentual: 40, descricao: 'Autenticação e autorização'+' '+ textJwt},
    { nome: 'Front-End', percentual: 15, descricao: 'Sobre atuações no front-end e suas tecnologias: ' + textFront },
    // Adicione mais dados conforme necessário
  ];

  const [tecnologiaSelecionada, setTecnologiaSelecionada] = useState(null);

  const handleChartClick = (tecnologia) => {
    setTecnologiaSelecionada(tecnologia);
  };

  useEffect(() => {
    // Simula um atraso de 2 segundos para carregar os dados
    const timer = setTimeout(() => {
      setDadosCarregados(true);
    }, 2000);

    // Limpa o timer quando o componente é desmontado
    return () => clearTimeout(timer);
  }, []);
  return (
    <Layout>
      <GlobalStyles/>
      {dadosCarregados ? (
        <TecnologiaContainer>
          <TituloPrincipal>
            Em um percentual de 200 como valor total, tentei transmitir em um gráfico, meus campos de atuação, não todos, porém os principais. Por favor, clique no gráfico para conseguir visualizar mais informação de cada área.
          </TituloPrincipal>
          
          <br />
          
          <StyledImage src={setaparabaixo} alt='Clique no gráfico para mais informação' />
          <TecnologiaChart dados={dadosTecnologia} onChartClick={handleChartClick} />

          {tecnologiaSelecionada && (
            <div>
              <h3 style={estiloTexto}>{tecnologiaSelecionada.nome}</h3>
              <estiloTexto style={estiloTexto}>{tecnologiaSelecionada.descricao}</estiloTexto>
            </div>
          )}
        </TecnologiaContainer>
      ) : (
        // Indicador de carregamento (pode ser substituído por um spinner ou outra animação)
        <div style={{ textAlign: 'center', marginTop: '20%' }}>
        <StyledImage src={loading} alt='Clique no gráfico para mais informação' />
      </div>
      )}
    </Layout>
  );
}
export default Tecnologia;
