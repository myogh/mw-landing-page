import Layout from "../components/layout";
import Head from "next/head";
import ContactUs from "../components/contact-us";

export default function Contact() {
  return (
    <div>
      <Layout>
        <Head>
          <title>Contact Us - Max World International</title>
          <meta
            name="description"
            content="We would be very happy to answer your questions regarding product details, product introduction of yours and prospective collaboration."
          />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <ContactUs />
      </Layout>
    </div>
  );
}
