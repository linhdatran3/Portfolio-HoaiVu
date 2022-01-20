import Link from "next/link";
import styles from "../styles/Home.module.css";

const Navbar = () => (
  <div className={styles.navbar}>
    <div className="nav">
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
  </div>
);
export default Navbar;
