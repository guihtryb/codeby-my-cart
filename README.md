<div>
<div align="center">
  <img src="./assets/codeby.png" height="300px"/>
  <h1>Teste desenvolvido para a posição de Desenvolvedor Front-End na CodeBy</h1>
  <br />
</div>
<main>

## Aplicando:
  - Desenvolvimento das interfaces com React.js;
  - Testes com a biblioteca React Testing Library;
  - CSS Flex-Box Layout;


### Demais ferramentas:
  Editor | DevOps

  ![Visual Studio Code](https://img.shields.io/badge/-VSCode-444444?style=flat&logo=visual-studio-code&logoColor=007ACC)
  ![Linux](https://img.shields.io/badge/-Linux-222222?style=flat&logo=linux&logoColor=FCC624)
  ![Git](https://img.shields.io/badge/-Git-222222?style=flat&logo=git&logoColor=F05032)
  ![GitHub](https://img.shields.io/badge/-GitHub-222222?style=flat&logo=github&logoColor=181717)
  
## Para rodar locamente:

  1. Clone o repositório com o comando `git clone git@github.com:guihtryb/codeby-my-cart.git` em seu terminal;
  2. Entre na pasta criada codeby-my-cart/frontend com o comando `cd codeby-my-cart/frontend` em seu terminal;
  3. Instale as depêndencias do projeto com o comando `npm install` em seu terminal;
  4. Execute o comando `npm start` em seu terminal e será aberto uma janela com a aplicação rodando no browser;

## Demonstração com valor total maior ou menor que R$10
  
  1. Já na pasta frontend, abra uma instância do seu VScode com o comando `code .` no terminal;
  2. Vá até o arquivo `Provider.jsx` no diretório src/context/
  3. No seguinte trecho de código: 
  ```
  useEffect(() => {
    const endpoint = 'items-above-ten'; // Altere aqui
    getitems(endpoint);
    getTotalPrice(endpoint);
  }, []);
  ```
  - Altere o valor da constante `endpoint` para um dos valores correspondentes às rotas com deploy no heroku:
    - 'items-above-ten': Valor acima de R$10
    - 'items-under-ten': Valor abaixo de R$10
  
  </main>
</div>
