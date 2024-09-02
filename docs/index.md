# 2024-1-Minas de cultura
<div align="center">
    <img src="https://github.com/unb-mds/2024-1-MinasDeCultura/blob/main/docs/assets/images/logo_vermelha.png?raw=true" style="width:20vw"/>
</div>

## Projeto de Análise de Licitações Culturais

Este projeto foi desenvolvido como parte da disciplina de Métodos de Desenvolvimento de Software (MDS) na Universidade de Brasília (UnB). O objetivo central é criar uma plataforma online para análise e armazenamento de dados de licitações relacionadas aos gastos culturais apoiados pelo Governo Federal. A equipe de desenvolvimento elaborou raspadores personalizados para coletar esses dados, enfrentando o desafio de identificar cidades cujos dados estejam disponíveis e sejam adequados para uso. Utilizamos duas principais tecnologias de raspagem: Scrapy, para dados mais acessíveis e estruturados, e Selenium, para buscas em sites mais complexos que exigem maior interação.


Através desta aplicação, buscamos oferecer uma maneira mais transparente e acessível para que o público em geral possa consultar os gastos governamentais em eventos culturais, shows, teatros e outras atividades culturais.

## 📝 Sumário
- [Minas de Cultura](#projeto-de-análise-de-licitações-culturais)
    - [📝 Sumário](#-sumário)
    - [🚀 Getting Started](#-getting-started)
    - [⚙️ Funcionalidades](#%EF%B8%8F-funcionalidades-previstas)
    - [💻 Tecnologias](#-tecnologias)
    - [🤖 Identidade Visual](#-identidade-visual)
    - [👥 Desenvolvedores](#-desenvolvedores)
    - [🗒 Story Map](#-story-map)
    - [🛠 Arquitetura](https://unb-mds.github.io/2024-1-MinasDeCultura/Arquitetura/Arquitetura/)
    - [🧪 Testes](https://unb-mds.github.io/2024-1-MinasDeCultura/Como%20executar/Front-end/Executar%20os%20Testes/)
    
## ⚙️ Funcionalidades Previstas

- **Coleta de Dados:** Implementação de um raspadores utilizando as ferramentas scrapy e selenium.
- **Análise e Armazenamento:** Desenvolvimento de algoritmos para organizar dados coletados e armazená-los em um banco de dados, garantindo a integridade e segurança das informações.
- **Visualização de Dados:** Criação de interfaces intuitivas para que os usuários possam visualizar os dados de forma clara e compreensível, através de gráficos, tabelas e outros elementos visuais.
- **Pesquisa Avançada:** Possibilidade para os usuários realizarem pesquisas avançadas nos dados, filtrando por diferentes critérios como data, unidade adminitrativa, valor, entre outros, facilitando a busca por informações específicas.
- **Menu de Acessibilidade:** Desenvolvimento de um menu de Acessibilidade para facilitar o uso por pessoas com deficiência visual, dificuldades de leitura ou outras condições que possam impactar a navegação em websites.

## 💻 Tecnologias

- *Linguagem de Programação:*
<a href="https://www.python.org/" target="_blank"><img src="https://img.shields.io/badge/Python-white?style=for-the-badge&logo=Python&logoColor=blue" alt="Python"></a>

- *Ferramenta de Coleta de Dados:*
<a href="https://scrapy.org/" target="_blank"><img src="https://img.shields.io/badge/Scrapy-pink?style=for-the-badge&logo=scrapy" alt="Scrapy"></a>
<a href="https://www.selenium.dev/documentation/" target="_blank" class="inline-flex items-center px-4 py-2 bg-green-600 text-white text-sm font-medium rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2">
    <img src="https://img.shields.io/badge/Selenium-green?style=for-the-badge" alt="Selenium" class="h-6 w-6 mr-2">
</a>
<a href="https://www.crummy.com/software/BeautifulSoup/bs4/doc/" target="_blank" class="inline-flex items-center px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
    <img src="https://img.shields.io/badge/BeautifulSoup-blue?style=for-the-badge" alt="BeautifulSoup" class="h-6 w-6 mr-2">
</a>



- *Framework Web:*
<a href="https://nextjs.org/" target="_blank"><img src="https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js" alt="Next JS"></a>

- *Banco de Dados:* 
<a href="https://www.postgresql.org/" target="_blank"><img src="https://img.shields.io/badge/PostgreSQL-brown?style=for-the-badge&logo=PostgreSQL" alt="PostgreSQL"></a>

- *Ferramentas Adicionais:* 
<a href="https://www.w3schools.com/html/" target="_blank"><img src="https://img.shields.io/badge/HTML-blue?style=for-the-badge&logo=html5" alt="HTML"></a>
<a href="https://www.w3schools.com/css/" target="_blank"><img src="https://img.shields.io/badge/CSS-GREEN?style=for-the-badge&logo=css3" alt="CSS"></a>
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank"><img src="https://img.shields.io/badge/JavaScript-purple?style=for-the-badge&logo=javascript" alt="JavaScript"></a>
<a href="https://docs.python.org/pt-br/3/library/re.html" target="_blank"><img src="https://img.shields.io/badge/Regex-red?style=for-the-badge" alt="Regex"></a>
<a href="https://tailwindcss.com/docs" target="_blank" class="inline-flex items-center px-4 py-2 bg-teal-500 text-white text-sm font-medium rounded-md hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-offset-2"><img src="https://img.shields.io/badge/TailwindCSS-teal?style=for-the-badge" alt="TailwindCSS" class="h-6 w-6 mr-2">
</a>


## 🚀 Getting Started

### Pré-requisito

- Baixar o docker compose usando o apt [Aqui](https://docs.docker.com/engine/install/ubuntu/#install-using-the-repository)
 
### Clonar o repositório

```bash
git clone https://github.com/unb-mds/2024-1-MinasDeCultura.git
```

### Acessar o repositório

```bash
cd 2024-1-MinasDeCultura
```


## 🤖 Identidade Visual

- *Desenvolvimento da Identidade Visual:* Investimos tempo no desenvolvimento de uma identidade visual consistente para o projeto, incluindo seleção de cores, tipografia e uma logo autêntica baseada na bandeira. Essa identidade visual reflete nossa visão e valores, e está integrada em toda a interface do usuário e materiais de design.

- *PHome:* 
  
  ![Home Page](https://raw.githubusercontent.com/unb-mds/2024-1-MinasDeCultura/main/docs/assets/images/Home.jpg)

## 👥 Desenvolvedores

<center>
<table style="margin-left: auto; margin-right: auto;">
    <tr>
        <td align="center">
            <a href="https://github.com/Gxaite">
                <img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/111130521?v=4" width="150px;"/>
                <h5 class="text-center">Gabriel Scheidt</h5>
            </a>
        </td>
        <td align="center">
            <a href="https://github.com/isaacbatista26">
                <img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/118384776?v=4" width="150px;"/>
                <h5 class="text-center">Isaac Batista</h5>
            </a>
        </td>
        </td>
        <td align="center">
            <a href="https://github.com/devMarcosVM">
                <img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/108913498?v=4" width="150px;"/>
                <h5 class="text-center">Marcos Vieira</h5>
            </a>
        </td>
        <td align="center">
            <a href="https://github.com/manuvaladares">
                <img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/119461383?v=4" width="150px;"/>
                <h5 class="text-center">Manuella Magalhães</h5>
            </a>
        </td>
          <td align="center">
            <a href="https://github.com/Mateushqms">
                <img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/163928182?v=4" width="150px;"/>
                <h5 class="text-center">Mateus Henrique</h5>
            </a>
        </td>
          <td align="center">
            <a href="https://github.com/WillxBernardo">
                <img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/124713089?v=4" width="150px;"/>
                <h5 class="text-center">William Bernardo</h5>
            </a>
        </td>
</table>
</center>
