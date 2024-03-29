import { Inter } from "next/font/google";
import Layout from "./layout";
import { Hero } from "@/components/hero/hero";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <Layout>
      <Hero />
    </Layout>
  );
}
