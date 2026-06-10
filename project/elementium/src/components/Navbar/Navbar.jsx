import styles from "./Navbar.module.css";
import { HiOutlineMenuAlt3 } from "react-icons/hi";

const Navbar = () => {
  return (
    <header className={styles.navbar}>
      <div className="container">
        <nav className={styles.nav}>
          <h2>Elementium</h2>

          <ul className={styles.links}>
            <li>Home</li>
            <li>Studio</li>
            <li>Services</li>
            <li>Contact</li>
            <li>FAQ</li>
          </ul>

          <HiOutlineMenuAlt3 className={styles.menu} />
        </nav>
      </div>
    </header>
  );
};

export default Navbar;