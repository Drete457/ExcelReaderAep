# Excel Reader · AEP

Utilitário web que lê e mostra o ficheiro Excel de Controlo de Nomeações da Associação dos Escoteiros de Portugal (AEP). A aplicação interpreta o ficheiro, agrupa a informação por chefias e disponibiliza botões rápidos para copiar os nomes relevantes.

📍 Aplicação em produção: https://excel-reader-aep.vercel.app/

## Funcionalidades

- Upload de ficheiros `.xlsx` diretamente no browser e conversão para estruturas utilizáveis.
- Seleção do grupo ou núcleo através de `react-select`, com pesquisa e destaque visual.
- Visualização dos cargos distribuídos por secções (Chefia de Grupo, Alcateia, Tribos, Clã, etc.).
- Contagem automática de votos e lista dinâmica dos nomes ainda não selecionados.
- Botões individuais e globais para copiar rapidamente os nomes para a área de transferência.

## Stack Tecnológica

- React 19 com Vite 5
- CoreUI Pro para componentes e layout
- Sass para estilos globais
- `read-excel-file` e `@ramonak/react-excel` para interpretar o Excel
- Vitest + Testing Library para testes

## Requisitos

- Node.js >= 22 (verificado em `package.json`)
- Yarn (o repositório utiliza Yarn 3; instale com `npm install -g yarn` se necessário)

## Como começar

```bash
git clone https://github.com/Drete457/ExcelReaderAep.git
cd ExcelReaderAep
yarn install
yarn dev
```

Abra http://localhost:3000 para ver a aplicação em modo de desenvolvimento.

## Scripts disponíveis

- `yarn dev` – inicia a aplicação em modo desenvolvimento.
- `yarn build` – compila o bundle de produção.
- `yarn preview` – serve localmente o bundle já construído.
- `yarn test` / `yarn test:watch` – executa a suíte de testes com Vitest.
- `yarn lint` / `yarn lint:fix` – valida o código com ESLint.
- `yarn format` / `yarn format:check` – aplica ou verifica a formatação com Prettier.

## Estrutura principal

```
src/
	App.js                # Shell principal da aplicação
	Components/           # Componentes reutilizáveis (botões, loaders, etc.)
	View/                 # Vistas de alto nível (layout e resultados)
	helpers/              # Funções auxiliares de parsing e listagem
	hooks/                # Hook personalizado que gere os dados do Excel
	scss/style.scss       # Folha de estilos global
```

## Testes

Os testes residem em `src/__tests__`. Execute `yarn test` para uma passagem única ou `yarn test:watch` durante o desenvolvimento. Os testes fazem renderização com Testing Library e simulam interações críticas.

## Contribuições

1. Faça um fork do repositório e crie uma branch para a sua alteração.
2. Garanta que `yarn lint` e `yarn test` passam sem erros.
3. Abra um Pull Request detalhando o contexto das alterações.

## Licença

Este projeto é distribuído sob a [licença MIT](LICENSE).
