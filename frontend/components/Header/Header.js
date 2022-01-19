import AppBar from "@mui/material/AppBar";
import logo_xs from "../../public/hoaivu_logo_xs.png";
import Navbar from "../Navbar";
import Image from "next/image";
import headerStyle from "./Header.module.css";

const Header = () => {
  return (
    <AppBar className={headerStyle.header}>
      <Image src={logo_xs} className={headerStyle.logo} />
      <Navbar />
    </AppBar>
  );
};

export default Header;
