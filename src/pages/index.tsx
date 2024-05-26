import { Inter } from "next/font/google";
// Components
import Layout from "./layout";
import { Hero } from "@/components/home/hero";
import CTA from "@/components/home/cta";
import { Services } from "@/components/home/services";
import { Hire } from "@/components/home/hire";
import { Testimonials } from "@/components/testimonial";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <Layout>
      <Hero />
      <CTA />
      <Services />
      <Hire />
      <Testimonials />
    </Layout>
  );
}
