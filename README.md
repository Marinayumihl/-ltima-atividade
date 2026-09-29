# Sistema de Pedidos com Micro Frontends

Projeto desenvolvido para praticar a arquitetura de **Micro Frontends** utilizando **Next.js**, **React**, **Webpack** e **Module Federation**.

A aplicação representa um sistema de pedidos de restaurante dividido em três aplicações independentes: um Container principal, um Micro Frontend responsável pelo cardápio e outro responsável pelo pedido.

## Estrutura do projeto

```text
modulo 33/
├── container-app/
├── micro-cardapio/
├── micro-pedido/
└── README.md
```

### Container App

Aplicação principal responsável por integrar e exibir os dois Micro Frontends.

O Container utiliza `React.lazy` e `Suspense` para carregar os componentes remotos através do Module Federation.

Executado em:

```text
http://localhost:3000
```

### Micro Cardápio

Micro Frontend responsável por exibir a lista de pratos disponíveis.

Cada prato possui nome, preço e um botão **Adicionar ao pedido**.

Ao clicar no botão, o Micro Cardápio envia um evento para informar que um novo item foi selecionado.

Executado em:

```text
http://localhost:3001
```

### Micro Pedido

Micro Frontend responsável por receber e exibir os itens adicionados ao pedido.

Também calcula automaticamente o valor total dos itens selecionados.

Executado em:

```text
http://localhost:3002
```

## Comunicação entre os Micro Frontends

A comunicação entre o Micro Cardápio e o Micro Pedido é realizada através de eventos do navegador.

Quando um prato é selecionado, o Micro Cardápio dispara um `CustomEvent`:

```javascript
window.dispatchEvent(
  new CustomEvent("adicionarAoPedido", {
    detail: prato,
  })
);
```

O Micro Pedido escuta esse mesmo evento:

```javascript
window.addEventListener("adicionarAoPedido", receberPrato);
```

Dessa forma, os Micro Frontends conseguem trocar informações sem possuir dependência direta entre si.

## Module Federation

O projeto utiliza o **Webpack Module Federation** através do pacote `@module-federation/nextjs-mf`.

O Micro Cardápio expõe:

```text
./Cardapio
```

O Micro Pedido expõe:

```text
./Pedido
```

O Container consome os dois componentes remotos e os carrega utilizando:

```javascript
React.lazy()
```

e:

```javascript
Suspense
```

## Tecnologias utilizadas

- Next.js 13
- React 18
- JavaScript
- Webpack 5
- Module Federation
- HTML
- CSS

## Como executar o projeto

Para executar o sistema completo, é necessário iniciar as três aplicações.

### 1. Micro Cardápio

Abra um terminal:

```bash
cd micro-cardapio
npm install
npm run dev
```

A aplicação ficará disponível na porta `3001`.

### 2. Micro Pedido

Abra outro terminal:

```bash
cd micro-pedido
npm install
npm run dev
```

A aplicação ficará disponível na porta `3002`.

### 3. Container App

Abra um terceiro terminal:

```bash
cd container-app
npm install
npm run dev
```

A aplicação principal ficará disponível na porta `3000`.

Com as três aplicações em execução, acesse o Container pelo navegador.

## Funcionalidades

- Exibição de pratos disponíveis
- Adição de pratos ao pedido
- Comunicação entre Micro Frontends
- Atualização automática da lista de itens
- Cálculo automático do valor total
- Carregamento dos Micro Frontends com Module Federation
- Uso de React.lazy e Suspense
- Aplicações executadas de forma independente
- Interface responsiva

## Arquitetura

```text
                    Container App
                  localhost:3000
                        |
              ---------------------
              |                   |
              v                   v
       Micro Cardápio        Micro Pedido
       localhost:3001        localhost:3002
              |                   ^
              |                   |
              ---- CustomEvent ----
```

O Container é responsável pela composição da interface, enquanto cada Micro Frontend possui uma responsabilidade específica.

Essa separação permite que as aplicações sejam desenvolvidas e executadas de forma independente.