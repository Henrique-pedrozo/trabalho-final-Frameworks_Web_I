# Pokédex - Trabalho Final Frameworks Web I

## 📖 Descrição e Finalidade do Projeto
Esta é uma aplicação web interativa e dinâmica desenvolvida em React, elaborada como Trabalho Final da disciplina de Frameworks Web I do Unilavras. 

A finalidade do projeto é aplicar na prática os conceitos fundamentais do ecossistema React, como componentização, gerenciamento de estado com Hooks (`useState`, `useEffect`), roteamento de páginas e consumo de APIs externas. 

### 🔌 API Utilizada
Os dados de todos os pokemons, imagens e estatísticas são consumidos a partir da API pública [PokéAPI](https://pokeapi.co/), utilizando a biblioteca Axios para gerenciar as requisições HTTP.

## ✨ Requisitos Atendidos
O projeto cumpre todos os requisitos técnicos e funcionais exigidos:
- **Listagem com Paginação:** Exibição dos Pokémons na página principal com sistema de navegação entre as páginas (Voltar/Próximo).
- **Página de Detalhes:** Utilização do `react-router-dom` para criar rotas dinâmicas (`/:pokemon`), exibindo informações detalhadas e estatísticas completas de um Pokémon específico.
- **Busca e Filtros Dinâmicos:** Filtros combináveis na barra de navegação, permitindo buscar simultaneamente pelo Nome (em tempo real) e por Categoria/Tipo (ex: fire, water).
- **Feedback ao Usuário:** Telas visuais de carregamento (`LoadingScreen`) e tratamento de erros durante o consumo da API.
- **Estilização Avançada:** Interface UI/UX construída utilizando a biblioteca de componentes **Material-UI (MUI)** para garantir um design coeso, limpo e responsivo para dispositivos móveis.

## 👥 Integrantes
- Henrique Pedrozo 
- Álvaro Rezende 
- João Luiz 
- Luiza Locha
- Sthefany 

## 🚀 Como executar o projeto localmente

### Pré-requisitos
É necessário ter o [Node.js](https://nodejs.org/) instalado em sua máquina.

### Passo a passo
1. Clone este repositório em sua máquina:
```bash
git clone [https://github.com/seu-usuario/trabalho-final-Frameworks_Web_I.git](https://github.com/seu-usuario/trabalho-final-Frameworks_Web_I.git)

2. Acesse a pasta do projeto:
```bash
cd trabalho-final-Frameworks_Web_I

3. Instale todas as dependências.
```bash
npm install 
```bash
npm install @mui/material @emotion/react @emotion/styled
```bash
npm install axios
