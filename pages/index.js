import Layout from "../components/layout";
import Hero from "../components/hero";
import UMFCCI from "../components/umfcci";
import HowWeOperate from "../components/operate-section";
import ProductWeDeal from "../components/products-we-deal";
import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Layout>
        <Head>
          <title>Max World International Co.,Ltd</title>
          <meta
            name="description"
            content="Max World International Co.,Ltd, based in Myanmar, is an esteemed exporter and importer of a wide category of products ranging from pluses and beans to chemicals. With dedicated principles and ethics, we have established a sustained and successful relationship with a number of foreign and local organizations."
          />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Hero />
        <UMFCCI />
        <HowWeOperate />
        <ProductWeDeal />
      </Layout>
    </div>
  );
}
