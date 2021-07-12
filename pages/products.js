import Layout from "../components/layout";
import Head from "next/head";
import Exports from "../components/exports";
import Imports from "../components/imports";

export default function Products() {
  return (
    <div>
      <Layout>
        <Head>
          <title>Products - Max World International</title>
          <meta
            name="description"
            content="There are a variety of products we consider in doing business, and the list keeps alternating based on the market needs. We mostly deal with pulses and agro products for exports. "
          />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Exports />
        <Imports />
      </Layout>
    </div>
  );
}
