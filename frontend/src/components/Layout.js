import Head from "next/head";
import Navbar from "./Navbar";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
const Layout = ({ children }) => {
  <>
    <Head>
      <title>Portfolio Hoai VU</title>
    </Head>
    <Header />
    <Navbar />
    {children}
    <Footer />
  </>;
};
export default Layout;
