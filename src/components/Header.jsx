import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";
import { BsMoonStars, BsSun } from "react-icons/bs";
import Logo from "../assets/logo.png";
import styles from "../styles/header.module.scss";
export const Header = () => {
  const [theme, setTheme] = useState(true);
  return (
    <header>
      <nav className={styles.nav}>
        <div className={styles.left}>
          <Link to="/">
            <img src={Logo} alt="MovieZone Logo" />
          </Link>
        </div>

        <div className={styles.center}>
          <NavLink to="/" className={styles.links} end>
            Home
          </NavLink>
          <NavLink to="/movies/popular" className={styles.links}>
            Popular
          </NavLink>
          <NavLink to="/movies/top" className={styles.links}>
            Top
          </NavLink>
          <NavLink to="/movies/upcoming" className={styles.links}>
            Upcoming
          </NavLink>
        </div>

        <div className={styles.right}>
          {theme === true ? (
            <BsMoonStars
              className={styles.theme_icon}
              onClick={() => setTheme(!theme)}
              title="Dark Mode"
            />
          ) : (
            <BsSun
              className={styles.theme_icon}
              onClick={() => setTheme(!theme)}
              title="Light Mode"
            />
          )}
          <div className={styles.search_box}>
            <input type="text" placeholder="Search" />
            <AiOutlineSearch className={styles.search_icon} />
          </div>
        </div>
      </nav>
    </header>
  );
};
