import Head from "next/head";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Portfolio Hoai Vu</title>
      </Head>
      <Header />
      <div style={{ marginTop: "180px", marginBottom: "50px" }}>{children}</div>
      <Footer />
    </>
  );
};
export default Layout;
