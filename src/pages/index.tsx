import { Inter } from "next/font/google";
import Head from "next/head";
// Components
import Layout from "./layout";
import { Hero } from "@/components/home/hero";
import CTA from "@/components/home/cta";
import { Services } from "@/components/home/services";
import { Hire } from "@/components/home/hire";
import { Testimonials } from "@/components/testimonial";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>JobWell</title>
        <meta
          property='title'
          content='JobWell connects employer to employees'
          key='title'
        />
      </Head>
      <Hero />
      <CTA />
      <Services />
      <Hire />
      <Testimonials />
      <Footer />
    </Layout>
  );
}
