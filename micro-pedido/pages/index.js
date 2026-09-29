import Head from "next/head";
import Pedido from "../components/Pedido";

export default function Home() {
  return (
    <>
      <Head>
        <title>Micro Pedido</title>
        <meta
          name="description"
          content="Micro frontend responsável pelo pedido"
        />
      </Head>

      <main>
        <h1>Pedido</h1>
        <p>Acompanhe os itens adicionados ao seu pedido.</p>

        <Pedido />
      </main>
    </>
  );
}