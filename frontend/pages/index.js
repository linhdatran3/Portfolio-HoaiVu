import Head from "next/head";

import styles from "../styles/Home.module.css";
import Layout from "../components/Layout";
import { ContactForm } from "../components/ContactForm";
import { Slider } from "../components/Slider";
import ImageMasonry from "../components/ImageMasonry";
import Title from "../components/Title";
import About from "../components/About/About";
export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <div className={styles.container}></div>
        <Slider />
        <Title title="MY FAVORITE PHOTOS" />
        <ImageMasonry />
        <About />
        <Title title="CONTACT" />
        <ContactForm />
      </Layout>
    </>
  );
}
