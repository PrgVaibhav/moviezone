import { Link } from "react-router-dom";
import { GoArrowUpRight } from "react-icons/go";
import styles from "../styles/footer.module.scss";
export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.left}>
        <p>
          © 2023{" "}
          <Link to="/" className={styles.title}>
            Movie Gyaaan
          </Link>
        </p>
      </div>
      <div className={styles.right}>
        <ul>
          <li>
            <a
              href="https://kumarvaibhav.vercel.app/"
              rel="noreferrer"
              target="_blank"
              aria-label="Instagram"
            >
              Instagram
            </a>
            <GoArrowUpRight className={styles.footer_icon} />
          </li>
          <li>
            <a
              href="https://github.com/PrgVaibhav"
              target="_blank"
              rel="noreferrer"
              aria-label="Twitter"
            >
              Twitter
            </a>
            <GoArrowUpRight className={styles.footer_icon} />
          </li>
        </ul>
      </div>
    </footer>
  );
};
