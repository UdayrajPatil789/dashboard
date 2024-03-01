import React from "react";
import styles from "@/app/dashboard/card/card.module.css";
import { MdSupervisedUserCircle } from "react-icons/md";
const Card = () => {
  return (
    <div className={styles.container}>
      <MdSupervisedUserCircle size={24} />

      <div className={styles.texts}>
        <span className={styles.title}>Title</span>
        <span className={styles.number}>10.928</span>
        <span className={styles.detail}>
          <span className={1 > 0 ? styles.positive : styles.negative}>
            {1}%
          </span>{" "}
          {1 > 0 ? "more" : "less"} than previous week
        </span>
      </div>
    </div>
  );
};

export default Card;
