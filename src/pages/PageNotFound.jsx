import { Link } from "react-router-dom";
import { useDocumentTitle } from "../hooks";
import error from "../assets/404.avif";

import styles from "../styles/pageNotFound.module.scss";
export const PageNotFound = () => {
  useDocumentTitle(`Page Not Found`);

  return (
    <main>
      <section className={styles.error_container}>
        <div className={styles.error_img}>
          <img src={error} alt="ERROR PAGE :(" />
        </div>
        <div className={styles.error_content}>
          <h1>OOPS!! Page Not Found :(</h1>
          <Link to="/">
            <button>Go back to home</button>
          </Link>
        </div>
      </section>
    </main>
  );
};
