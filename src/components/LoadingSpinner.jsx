import React from "react";
import styles from "../styles/loadingSpinner.module.scss"; // Import the CSS file with styles and animations

export const LoadingSpinner = () => {
  return (
    <div className={styles.loading_spinner}>
      <div className={styles.spinner}></div>
    </div>
  );
};
