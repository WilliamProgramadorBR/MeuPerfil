

 const textofinanca = "Este aplicativo foi criado com o objetivo de resolver um desafio pessoal: manter minhas finanças em dia, com dados reais sobre meus gastos e ganhos provenientes de trabalhos freelancers e emprego fixo. Diante desse cenário, mergulhei no estudo de técnicas avançadas de front-end para entregar uma interface intuitiva e atraente, com gráficos e animações que enriquecem a experiência do usuário. Estou encantado com o resultado final, fruto de cerca de dois meses de intenso empenho e aprendizado, incluindo a análise de documentações e cursos especializados. Além disso, explorei novas ferramentas como Docker, Jenkins e Electron, para otimizar o ciclo de desenvolvimento e utilizar o Node.js de forma nativa.Estou feliz em compartilhar o repositório do aplicativo, que está disponível para testes e uso. Fique à vontade para baixar e explorar a ferramenta, e use-a com sabedoria! Agradeço pelo interesse e espero que a solução que desenvolvi ajude a melhorar a gestão das suas finanças, assim como tem feito com as minhas.";

 const introducao = "Neste aplicativo, senti a necessidade de estudar algumas arquiteturas de desenvolvimentos front-end, pois se tratava de um app que teria uma front-end responsiva, limpa e com bastante detalhes de dados.\n";
 const objetivo = "Como se trata de um gerenciador financeiro, não achei ideal poluir com muitas funções, e sim ser direto ao ponto, tendo uma descrição limpa e direta de cada parte do aplicativo e como o usuário iria interagir com ela.\n";
 const ferramentas = "Ferramentas: No aplicativo foram usadas as ferramentas Docker, Jenkins e o console do navegador para testar a responsividade.\n";
 
 const frontEndDescricao = "Front-end: Logo no front-end, foi desenvolvido com as tecnologias JavaScript com TypeScript para reforçar a lógica e evitar erros de tipos, usando a extensão tsx.\n";
 const frontEndArquitetura = "Também criei diversas interfaces, agrupei elas em uma pasta de utilidades, onde estavam bem separadas, algumas partes importantes na nossa aplicação.\n";
 const frontEndOrganizacao = "Também foram arquitetadas pastas para componentes, rotas, hooks, layout global, entre outras partes, para manter o código bem encapsulado e organizado.\n";
 
 const backEndDescricao = "Back-End: Já no Back-end, gosto naturalmente de desenvolver em TypeScript, também separando e encapsulando as lógicas, para serem reutilizadas e evitar também uma quantidade significativa de imports.\n";
 const backEndDesafio = "Porém, como se tratava de um desenvolvimento diretamente no Electron, tive problemas na hora de compilar as informações de forma separada.\n";
 const backEndSolucao = "Foi aí que recorri a desenvolver o Back-end da aplicação em um único arquivo, pois o objetivo final do App é ser apenas uma experiência e, claro, uma forma de mostrar o que posso fazer.\n";
 const backEndJustificativa = "Portanto, não vi a necessidade de encapsular o Back-End, pois ele é de uso restrito ao Electron, logo somente o Electron vai ter contato com o código.";
 
 const detailsfinancas = [introducao, objetivo,ferramentas, frontEndDescricao, frontEndArquitetura,frontEndOrganizacao,backEndDescricao,backEndDesafio,backEndSolucao,backEndJustificativa]
 export  {textofinanca,detailsfinancas};

