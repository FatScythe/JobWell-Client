import { Inter } from "next/font/google";
import Layout from "./layout";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <Layout>
      <main className={`${inter.className}`}>
        <h1 className='text-red-400'>Home Page</h1>
      </main>
    </Layout>
  );
}
