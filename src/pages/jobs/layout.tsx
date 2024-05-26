import Head from "next/head";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <section>
      <Head>
        <title>JobWell- Find Jobs</title>
        <meta property='title' content='Find Jobs' key='title' />
      </Head>
      <Navbar />
      <div>{children}</div>
      <Footer />
    </section>
  );
}
