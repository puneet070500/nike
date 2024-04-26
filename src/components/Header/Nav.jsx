import { Link } from "react";
import styles from "./Nav.module.css";

const Nav = () => {
  return (
    <div>
      <nav>
        <div className={styles.logo}>
          <img src="src/assets/brand_logo.png" alt="brand-logo" />
        </div>
        <ul>
          <li href="#">Menu</li>
          <li href="#">Location</li>
          <li href="#">About</li>
          <li href="#">Contact</li>
        </ul>
        <button href="#">Login</button>
      </nav>
    </div>
  );
};

export default Nav;
