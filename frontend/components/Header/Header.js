import { useState, useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import logo_xs from "../../public/hoaivu_logo_xs.png";
import Navbar from "../Navbar";
import Image from "next/image";
import headerStyle from "./Header.module.css";

const Header = () => {
  const [scrollOver, setScrollOver] = useState(false);
  const [isHomePage, setIsHomePage] = useState(false);

  useEffect(() => {
    setIsHomePage(["/", "/home"].includes(window.location.pathname));
    window.addEventListener("scroll", () => {
      const current = window.scrollY;
      setScrollOver(current <= 700);
    });
  }, []);

  return (
    <AppBar
      className={
        !isHomePage
          ? headerStyle.header
          : scrollOver
          ? headerStyle.transparent
          : headerStyle.header
      }
    >
      <Image src={logo_xs} className={headerStyle.logo} />
      <Navbar />
    </AppBar>
  );
};

export default Header;
