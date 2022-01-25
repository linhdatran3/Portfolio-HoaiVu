import List from "../components/List";
import Title from "../components/Title";
import Layout from "../components/Layout";
import { ContactForm } from "../components/ContactForm";
import Image from "next/image";
import fine_print from "./../public/fine-print.jpg";
import price_print from "./../public/price-print.png";
import styles from "../styles/Home.module.css";

const Prints = () => {
  return (
    <Layout className={styles.Container}>
      <Title title="FINE & PRINT" />
      <div className="image" style={{ display: "flex" }}>
        <Image src={price_print} alt="price" />
        <Image src={fine_print} alt="fine and print" />
      </div>
      <ContactForm />
    </Layout>
  );
};

export default Prints;
