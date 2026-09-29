import { useEffect, useState } from "react";

export default function Pedido() {
  const [itens, setItens] = useState([]);

  useEffect(() => {
    function receberPrato(event) {
      setItens((itensAtuais) => [...itensAtuais, event.detail]);
    }

    window.addEventListener("adicionarAoPedido", receberPrato);

    return () => {
      window.removeEventListener("adicionarAoPedido", receberPrato);
    };
  }, []);

  const total = itens.reduce((soma, item) => soma + item.preco, 0);

  return (
    <section>
      <h2>Seu Pedido</h2>

      {itens.length === 0 ? (
        <p>Nenhum item adicionado ao pedido.</p>
      ) : (
        <>
          <div className="lista-pedido">
            {itens.map((item, index) => (
              <div className="item-pedido" key={`${item.id}-${index}`}>
                <span>{item.nome}</span>

                <strong>
                  R$ {item.preco.toFixed(2).replace(".", ",")}
                </strong>
              </div>
            ))}
          </div>

          <div className="total-pedido">
            <strong>Total:</strong>
            <strong>R$ {total.toFixed(2).replace(".", ",")}</strong>
          </div>
        </>
      )}
    </section>
  );
}