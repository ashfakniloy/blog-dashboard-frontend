import { Inter, Manrope } from "next/font/google";
import Layout from "@/components/Layout";
import "@/styles/globals.css";

const inter = Inter({ subsets: ["latin"] });
const manrope = Manrope({ subsets: ["latin"], variable: "--font-manrope" });

export default function App({ Component, pageProps }) {
  return (
    <div className={`${inter.className} ${manrope.variable}`}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
  );
}
