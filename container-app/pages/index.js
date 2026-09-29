import Head from "next/head";
import React, { Suspense, useEffect, useState } from "react";

const Cardapio = React.lazy(() => import("micro_cardapio/Cardapio"));
const Pedido = React.lazy(() => import("micro_pedido/Pedido"));

export default function Home() {
  const [carregado, setCarregado] = useState(false);

  useEffect(() => {
    setCarregado(true);
  }, []);

  return (
    <>
      <Head>
        <title>Restaurante - Sistema de Pedidos</title>
        <meta
          name="description"
          content="Sistema de pedidos desenvolvido com Micro Frontends"
        />
      </Head>

      <main>
        <header>
          <h1>Restaurante</h1>
          <p>Escolha seus pratos e acompanhe seu pedido.</p>
        </header>

        {carregado && (
          <Suspense fallback={<p>Carregando sistema...</p>}>
            <div className="sistema-pedidos">
              <div className="area-cardapio">
                <Cardapio />
              </div>

              <div className="area-pedido">
                <Pedido />
              </div>
            </div>
          </Suspense>
        )}
      </main>
    </>
  );
}