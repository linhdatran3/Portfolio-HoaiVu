import React from "react";
import Layout from "../components/Layout";
import Title from "./../components/Title";
import List from "./../components/List";

const Gallery = () => {
  return (
    <Layout>
      <div>
        <Title title="MY GALLERY" />
        <List />
      </div>
    </Layout>
  );
};

export default Gallery;
