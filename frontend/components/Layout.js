import Head from "next/head";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Portfolio Hoai VU</title>
      </Head>
      <Header />
      <div
      // style={{ marginTop: "60px" }}
      >
        {children}
      </div>
      <Footer />
    </>
  );
};
export default Layout;
