## Dia 15.2 Usando o Redux no React

Aprender a utilizar o Redux em suas aplicações React:

    Criar um store Redux em aplicações React;

    Criar reducers no Redux em aplicações React;

    Criar actions no Redux em aplicações React;

    Criar dispatchers no Redux em aplicações React;

    Conectar Redux aos componentes React.
    
    
## Checklist do react-redux

*Antes de começar*
- pensar como será o *formato* do seu estado global
- pensar quais actions serão necessárias na sua aplicação

*Instalação*
- [x] npx create-react-app my-app-redux;
- [x] npm install --save redux react-redux;
- [x] npm install --save redux-devtools-extension
- [x] npm install.

*Criar dentro do diretório src:*
- [x] diretório actions;
- [x] diretório reducers;
- [x] diretório store.

*Criar dentro do diretório actions:*
- [x] arquivo index.js.

*Criar dentro do diretório reducers:*
- [x] arquivo index.js.

*Criar dentro do diretório store:*
- [x] arquivo index.js.

*No arquivo App.js ou index.js o que tem o document.getElementById('root'):*
- [x] import { Provider } from 'react-redux';
- [x] definir o Provider, `<Provider store={ store }>`, para fornecer os estados à todos os componentes encapsulados em `<App />`.

*No arquivo store/index.js:*
- [x] importar o rootReducer e criar a store
- [x] configurar o [Redux DevTools](https://github.com/reduxjs/redux-devtools)
- [x] import { composeWithDevTools } from 'redux-devtools-extension';

*Na pasta reducers:*
- [x] criar os reducers necessários
- [x] configurar os exports do arquivo index.js
 
*Na pasta actions:*
- [x] criar os actionTypes, por exemplo: `const ADD_TO_CART = 'ADD_TO_CART';`
- [x] criar os actions creators necessários

*Nos componentes:*
- [x] criar a função mapStateToProps
- [x] criar a função mapDispatchToProps
- [x] fazer o connect

### Se a sua aplicação não terá outras páginas, não é necessário configurar as rotas. Caso contrário:

- [x] npm install react-router-dom@v5;

*Em src/index.js:*

- [x] definir o BrowserRouter, <BrowserRouter> .

*No arquivo App.js:*
    
- [x] definir o Switch, <Switch> ;
- [x] definir a Route, <Route>.
