import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AiOutlineSearch, AiOutlineClose } from "react-icons/ai";
import { BsMoonStars, BsSun } from "react-icons/bs";
import { RiMenu3Line } from "react-icons/ri";
import Logo from "../assets/logo.png";
import styles from "../styles/header.module.scss";
export const Header = () => {
  const [theme, setTheme] = useState(
    JSON.parse(localStorage.getItem("theme")) || false
  );
  const [open, setOpen] = useState(true);
  useEffect(() => {
    localStorage.setItem("theme", JSON.stringify(theme));

    if (theme) {
      document.documentElement.classList.add("light");
    } else {
      document.documentElement.classList.remove("light");
    }
  }, [theme]);
  return (
    <header className={styles.header}>
      <div className={styles.left}>
        <Link to="/">
          <img src={Logo} alt="MovieZone Logo" />
        </Link>
        {theme ? (
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
      </div>
      <nav
        className={
          open === true
            ? `${styles.nav} `
            : `${styles.nav} ${styles.activeState}`
        }
      >
        <div className={styles.center}>
          <ul>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? `${styles.links} ${styles.active}`
                  : `${styles.links}`
              }
              end
            >
              Home
            </NavLink>
            <NavLink
              to="/movies/popular"
              className={({ isActive }) =>
                isActive
                  ? `${styles.links} ${styles.active}`
                  : `${styles.links}`
              }
            >
              Popular
            </NavLink>
            <NavLink
              to="/movies/top"
              className={({ isActive }) =>
                isActive
                  ? `${styles.links} ${styles.active}`
                  : `${styles.links}`
              }
            >
              Top Rated
            </NavLink>
            <NavLink
              to="/movies/upcoming"
              className={({ isActive }) =>
                isActive
                  ? `${styles.links} ${styles.active}`
                  : `${styles.links}`
              }
            >
              Upcoming
            </NavLink>
          </ul>
        </div>
        <div className={styles.right}>
          <div className={styles.search_box}>
            <input type="text" placeholder="Search" />
            <AiOutlineSearch className={styles.search_icon} />
          </div>
        </div>
      </nav>
      <div className={styles.nav_icon}>
        {open === true ? (
          <RiMenu3Line
            className={styles.mobile_nav_icon}
            name="open"
            onClick={() => setOpen(false)}
          />
        ) : (
          <AiOutlineClose
            className={styles.mobile_nav_icon}
            name="close"
            onClick={() => setOpen(true)}
          />
        )}
      </div>
    </header>
  );
};
