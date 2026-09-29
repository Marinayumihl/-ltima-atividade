const pratos = [
  {
    id: 1,
    nome: "Hambúrguer Artesanal",
    preco: 28.9,
  },
  {
    id: 2,
    nome: "Pizza Margherita",
    preco: 35.0,
  },
  {
    id: 3,
    nome: "Lasanha à Bolonhesa",
    preco: 32.5,
  },
];

export default function Cardapio() {
  function adicionarAoPedido(prato) {
    window.dispatchEvent(
      new CustomEvent("adicionarAoPedido", {
        detail: prato,
      })
    );
  }

  return (
    <section>
      <h2>Cardápio</h2>

      <div className="lista-pratos">
        {pratos.map((prato) => (
          <div className="prato" key={prato.id}>
            <h3>{prato.nome}</h3>

            <p>
              R$ {prato.preco.toFixed(2).replace(".", ",")}
            </p>

            <button onClick={() => adicionarAoPedido(prato)}>
              Adicionar ao pedido
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}