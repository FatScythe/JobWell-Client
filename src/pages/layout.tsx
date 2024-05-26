import Head from "next/head";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <section>
      <Head>
        <title>JobWell</title>
        <meta
          property='title'
          content='JobWell connects employer to employees'
          key='title'
        />
      </Head>
      <Navbar />
      {children}
      <Footer />
    </section>
  );
}
