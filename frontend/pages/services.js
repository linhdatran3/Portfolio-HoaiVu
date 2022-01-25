import React from "react";
import Masonry from "../components/ImageMasonry";
import { ContactForm } from "../components/ContactForm";
import Layout from "../components/Layout";
import Title from "../components/Title";
import stylesService from "../styles/Service.module.css";
const Services = () => {
  return (
    <Layout>
      <div className={stylesService.service}>
        <Title title="FINE ART PRINTS" />
        <div className={stylesService.content}>
          <div className={stylesService.script__1}>
            <p>
              In this increasingly technologically advanced age, I understand
              very well the important role visuals play in your business.
            </p>
            <p>
              You can find in me a prefessional photography service, I
              specialize in photo projects for hotels, restaurants, resorts, ...
            </p>
            <p>
              {" "}
              Please contact me when you need a service to provide professional
              images for your project.
            </p>
          </div>
          <div className={stylesService.script__2}>
            <p>
              Below is a sample project that I have done for a hotel, contact me
              via email so I can know the size of your project so I can give you
              an exact price.
            </p>
          </div>
        </div>
      </div>

      <div className={stylesService.masonry}>
        <Masonry />
      </div>
      <div className={stylesService.contact}>
        <ContactForm />
      </div>
    </Layout>
  );
};

export default Services;
