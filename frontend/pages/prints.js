import List from "../components/List";
import Title from "../components/Title";
import Layout from "../components/Layout";
import { ContactForm } from "../components/ContactForm";
import Image from "next/image";
import fine_print from "./../public/fine-print.jpg";
import price_print from "./../public/price-print.png";
import stylesPrint from "../styles/Print.module.css";
const Prints = () => {
  return (
    <Layout>
      <div className={stylesPrint.fine__print}>
        <Title title="FINE & PRINT" />
        <div className={stylesPrint.content}>
          <div className={stylesPrint.price}>
            <p>
              We provide top-quality art prints. Each painting is printed with
              high-quality materials that are durable over time, and we make the
              most meticulous work.{" "}
            </p>
            <p>
              Below is the reference price list of my art prints, other than
              these sizes you can contact me. Please note that this price list
              does not include the photo frame or shipping fee.
            </p>
            <div className={stylesPrint.image__price}>
              <Image src={price_print} alt="price" />
            </div>

            <p>
              Please contact me via the mailbox below if you are interested in
              some of my photos.
            </p>
            <p>
              All my works do not exist only on this website. Let me know what
              you intend to use your print for so I can advise you, in addition
              to art prints it could be for advertising purposes.
            </p>
          </div>
          <div className={stylesPrint.fine}>
            <Image src={fine_print} alt="fine and print" />
          </div>
        </div>
      </div>
      <div className={stylesPrint.contact}>
        <ContactForm />
      </div>
    </Layout>
  );
};

export default Prints;
