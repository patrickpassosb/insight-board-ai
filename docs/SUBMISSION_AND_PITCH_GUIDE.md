# Guia de Submissão e Pitch: InsightBoard AI

Este documento foi reestruturado para duas coisas:

1. entregar o material até `19h` sem esquecer nenhum item exigido;
2. apresentar os fragmentos de um jeito que maximize nota em técnica, negócio, UX e categoria prioritária.

## 1. Posicionamento Para Ganhar

Não apresente o projeto como "um dashboard bonito".

Apresente como:

> **Uma biblioteca de fragmentos reutilizáveis para Liferay que transforma dados em decisão, combinando visualização operacional, configurabilidade e análise com IA.**

Essa formulação é mais forte porque mostra ao mesmo tempo:

- **fragmentos reutilizáveis**, que é exatamente o foco do hackathon;
- **problema real de negócio**, não só estética;
- **aderência à Categoria A**, porque existe visualização de dados + insight acionável;
- **potencial de Marketplace**, porque qualquer cliente Liferay pode montar páginas diferentes com os mesmos blocos.

## 2. O Que Você Precisa Entregar Até 19h

Com base no comunicado no Slack, o material de submissão precisa ter:

- nome dos membros da equipe;
- nome do fragmento ou conjunto de fragmentos;
- breve descrição do problema e da funcionalidade;
- enquadramento na categoria prioritária A, B ou nenhuma;
- screenshot, vídeo, gif ou demonstração ao vivo.

## 3. Template de Submissão Pronto

Copie e ajuste este bloco:

```md
# Submissão - InsightBoard AI

## Membros da equipe
- [Inserir nome 1]
- [Inserir nome 2]
- [Inserir nome 3]

## Nome do Fragmento / Coleção
InsightBoard AI

## Fragmentos desenvolvidos
- InsightBoard Header
- InsightBoard Sidebar
- InsightBoard KPI Card
- InsightBoard Revenue Trend
- InsightBoard Revenue Segment
- InsightBoard Support Tickets
- InsightBoard AI Insights

## Problema
Dashboards tradicionais exibem números, mas não ajudam o usuário a interpretar rapidamente o cenário nem a decidir a próxima ação. Em contextos operacionais e executivos, isso aumenta o tempo entre observar o dado e agir.

## Funcionalidade
Criamos uma coleção modular de fragmentos para Liferay que permite montar dashboards reutilizáveis com KPIs, gráficos e um painel de insights com IA. A solução combina:

- visualização de dados com Chart.js;
- fragmentos configuráveis via Page Editor;
- componentes reutilizáveis para compor diferentes páginas;
- análise de métricas com IA para gerar resumo executivo, nível de risco, insights e recomendação acionável.

## Categoria prioritária
Categoria A: Dashboards Perspicazes e Operações de Dados

## Justificativa da categoria
A solução transforma dados brutos em insights acionáveis por meio de KPIs, gráficos interativos e análise orientada por IA, alinhando-se diretamente à proposta da Categoria A.

## Recursos visuais
- Screenshot do dashboard completo
- GIF ou vídeo curto do fluxo "Generate Insights"
- Demonstração ao vivo no pitch
```

## 4. Como Descrever Cada Fragmento Sem Perder Tempo

Se pedirem detalhamento, use esta leitura rápida:

| Fragmento | Função | Valor para o avaliador |
|---|---|---|
| `InsightBoard Header` | Contextualiza o dashboard | Mostra acabamento e identidade de produto |
| `InsightBoard Sidebar` | Estrutura de navegação | Reforça composição modular |
| `InsightBoard KPI Card` | Indicadores reutilizáveis | Prova reuso e configuração |
| `InsightBoard Revenue Trend` | Linha de tendência | Mostra visualização operacional |
| `InsightBoard Revenue Segment` | Distribuição por segmento | Mostra leitura comparativa |
| `InsightBoard Support Tickets` | Barra de tickets | Acrescenta visão operacional |
| `InsightBoard AI Insights` | Interpretação com IA | Diferencial de inovação e negócio |

## 5. Mensagem Central do Pitch

Sua tese precisa ser simples:

> **Nós não construímos uma página fixa. Construímos um kit de fragmentos de Marketplace para montar dashboards inteligentes dentro do Liferay.**

Se precisar de uma segunda frase forte:

> **O diferencial não é só mostrar métricas; é reduzir o tempo entre ver o problema e decidir o que fazer.**

## 6. Estrutura Recomendada Para 6 Minutos

O aviso no Slack fala em até `6 minutos` por grupo. Use o tempo inteiro, mas sem correr.

### 0:00 - 0:45 | Abertura

Fale o nome do projeto e o problema:

- empresas já têm dashboards;
- o gargalo não é falta de dado;
- o gargalo é transformar dado em ação rápida dentro do portal.

Exemplo:

> "O InsightBoard AI é uma coleção de fragmentos para Liferay que transforma dashboards estáticos em uma camada de decisão. Em vez de apenas mostrar números, ele ajuda o usuário a entender risco, contexto e próximo passo."

### 0:45 - 1:30 | O Que Foi Construído

Aqui você enquadra a solução corretamente:

- coleção com `7 fragmentos`;
- reutilizáveis e configuráveis;
- pensados para Marketplace;
- categoria `A`.

Exemplo:

> "Em vez de fazer uma tela única, nós construímos uma biblioteca modular com header, sidebar, cards de KPI, gráficos e um fragmento de AI Insights. Isso permite compor dashboards diferentes a partir dos mesmos blocos."

### 1:30 - 4:00 | Demonstração Ao Vivo

Ordem ideal da demo:

1. Mostre o dashboard montado.
2. Aponte rapidamente que ele é composto por fragmentos independentes.
3. Abra o editor de um fragmento simples, de preferência `InsightBoard KPI Card`.
4. Altere um texto, ícone ou estado de tendência para provar configurabilidade.
5. Mostre os gráficos prontos.
6. Clique em `Generate Insights`.
7. Destaque `summary`, `risk level`, `insights` e `recommendation`.

O que narrar durante a demo:

- "cada bloco pode ser reutilizado em outras páginas";
- "a configuração é feita no editor, sem mexer no código";
- "a IA não gera texto genérico; ela devolve estrutura utilizável para decisão".

### 4:00 - 5:00 | Arquitetura e Qualidade Técnica

Mostre que existe engenharia, não só interface:

- fragmentos em `HTML/CSS/JS`;
- visualização com `Chart.js`;
- backend `Node.js + Express`;
- endpoint `/api/analyze`;
- chave de IA protegida no servidor;
- tratamento de erro e fallback;
- cache em `localStorage`.

Frase útil:

> "A arquitetura separa apresentação, dados e inferência, o que deixa a solução mais segura, mais manutenível e mais pronta para evoluir para dados reais do cliente."

### 5:00 - 6:00 | Fechamento de Negócio

Feche com mercado e adoção:

- resolve um problema comum em qualquer operação;
- pode ser usado por clientes Liferay sem reinventar dashboard do zero;
- tem potencial de Marketplace porque é modular, reaproveitável e extensível.

Exemplo:

> "O valor aqui é encurtar o caminho entre métrica e ação. Isso torna o InsightBoard AI relevante para vendas, suporte, operações e liderança. É um conjunto de fragmentos com cara de produto, não apenas uma demo de hackathon."

## 7. Roteiro Falado Quase Pronto

Use este texto como base e adapte ao seu jeito:

```text
Hoje nós vamos apresentar o InsightBoard AI.

O problema que atacamos é simples: dashboards normalmente mostram dados, mas não ajudam o usuário a agir com rapidez. Em ambientes corporativos, isso gera atraso na tomada de decisão.

Para resolver isso, construímos uma coleção modular de fragmentos para Liferay. Em vez de uma página fixa, entregamos um conjunto reutilizável com header, sidebar, cards de KPI, gráficos e um fragmento de AI Insights.

Essa solução se enquadra diretamente na Categoria A, porque combina visualização operacional com transformação de dados em insights acionáveis.

Na prática, o administrador pode montar dashboards diferentes usando os mesmos blocos. Os fragmentos são configuráveis no editor, sem necessidade de alterar código.

Aqui, por exemplo, eu posso ajustar um KPI e reaproveitar esse mesmo componente em outra página. Também temos gráficos de tendência, segmentação e volume operacional.

O diferencial aparece neste fragmento de AI Insights. Ao clicar em Generate Insights, enviamos as métricas para uma API Node.js, que chama o modelo de IA e devolve uma resposta estruturada com resumo executivo, nível de risco, insights e recomendação.

Isso significa que o dashboard não só informa o que aconteceu, mas ajuda a decidir o que fazer a seguir.

Do ponto de vista técnico, a solução foi construída com fragmentos em HTML, CSS e JavaScript, Chart.js para visualização, backend em Express, chave protegida no servidor, tratamento de erro e cache local.

Do ponto de vista de negócio, isso tem potencial direto de Marketplace porque atende um caso transversal a praticamente qualquer cliente Liferay: transformar métricas em ação com uma solução reutilizável, configurável e pronta para evoluir.
```

## 8. O Que Os Avaliadores Precisam Ouvir

Conecte sua fala aos critérios oficiais:

### Inovação

- a IA tem função clara dentro do fluxo;
- ela entrega interpretação e recomendação, não enfeite.

### Implementação técnica e qualidade

- arquitetura separada;
- modularidade real;
- fragmentos independentes;
- configuração via editor;
- backend isolando segredo e integração com IA.

### Valor de negócio e potencial de mercado

- caso de uso transversal;
- solução reaproveitável;
- pronta para virar oferta de Marketplace.

### UX e design

- leitura rápida;
- hierarquia visual clara;
- experiência coerente com contexto de dashboard corporativo.

### Apresentação

- história objetiva;
- demo sem improviso;
- fechamento com impacto de negócio.

## 9. Frases Que Ajudam

Use algumas destas ao longo da fala:

- "Não é um fragmento isolado; é uma biblioteca modular."
- "Não é só visualização; é apoio à decisão."
- "O administrador compõe dashboards diferentes sem retrabalho."
- "O design demonstra produto, mas a arquitetura demonstra Marketplace."
- "A IA entra para reduzir tempo de interpretação e acelerar ação."

## 10. Erros Que Vão Reduzir Sua Nota

Evite estes pontos:

- gastar tempo demais explicando tecnologia antes de mostrar valor;
- apresentar como se fosse uma página estática única;
- focar só no visual e esquecer reuso e configurabilidade;
- chamar a IA de "resumo bonitinho" em vez de ferramenta de decisão;
- perder tempo navegando demais durante a demo;
- deixar para descobrir na hora se a API está respondendo.

## 11. Runbook da Demo

Antes de apresentar, valide:

- `Liferay` aberto e já autenticado;
- página com os fragmentos já montada;
- servidor da API ativo;
- teste do botão `Generate Insights` executado pelo menos duas vezes;
- screenshot de backup salvo;
- GIF ou vídeo curto salvo localmente se a internet falhar.

## 12. Plano B Se Algo Quebrar

Se a IA falhar:

- mostre a interface do fragmento;
- explique o fluxo arquitetural;
- use screenshot do estado final;
- destaque que o backend já trata erro e que o valor principal continua sendo a biblioteca modular.

Se o tempo apertar:

1. problema;
2. coleção de fragmentos;
3. demo de um KPI configurável;
4. clique em `Generate Insights`;
5. fechamento de negócio.

## 13. Versão Curta da Tese Final

Se você quiser fechar com uma frase de efeito sem soar genérico, use:

> **O InsightBoard AI leva o Liferay de um portal que exibe indicadores para um portal que ajuda a decidir.**

Ou:

> **Nossa entrega não é um dashboard pronto; é uma base de Marketplace para dashboards inteligentes e reutilizáveis.**
