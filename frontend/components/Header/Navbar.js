import Link from "next/link";
import headerStyles from "./Header.module.css";
const Navbar = () => (
  <div className={headerStyles.nav}>
    <Link href="/">
      <a>Home</a>
    </Link>
    <Link href="/gallery">
      <a>Gallery</a>
    </Link>
    <Link href="/prints">
      <a>Prints</a>
    </Link>
    <Link href="/services">
      <a>Services</a>
    </Link>
    <Link href="/blogs">
      <a>Blog</a>
    </Link>
    <Link href="/">
      <a>About</a>
    </Link>
    <Link href="/">
      <a>Contact</a>
    </Link>
  </div>
);
export default Navbar;
