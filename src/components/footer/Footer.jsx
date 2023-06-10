import React from "react";
import styles from "./footer.module.css";
import Image from "next/image";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div>©2023 Phenomenal. All Rights Reserved!</div>
      <div className={styles.social}>
        <Image className={styles.icon} src="/1.png" alt="phenomenal facebook" width={15} height={15} />
        <Image className={styles.icon} src="/2.png" alt="phenomenal instagram" width={15} height={15} />
        <Image className={styles.icon} src="/3.png" alt="phenomenal twitter" width={15} height={15} />
        <Image className={styles.icon} src="/4.png" alt="phenomenal youtube" width={15} height={15} />
      </div>
    </div>
  );
};

export default Footer;
