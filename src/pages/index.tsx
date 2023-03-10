import Head from "next/head";
import styles from "@/styles/Home.module.css";
import { Gallery } from "@/components/Gallery";
import { FashionData } from "@/data/fashion";
import { TechData } from "@/data/tech";

export default function Home() {
  return (
    <>
      <Head>
        <title>CL</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.contentWrapper}>
          <div className={styles.title}>
              <h1>SELECTED WORKS</h1>
          </div>
          <Gallery fashionData={FashionData} techData={TechData} />
        </div>
      </main>
    </>
  );
}
