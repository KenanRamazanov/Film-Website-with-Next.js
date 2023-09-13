import React from "react";
import  Skeleton  from "../skeleton/index.js";
import styles from "./style.module.css";

function CategoriesLoading() {
  return (
    <div className={styles.categories}>
      {Array(5)
        .fill(null)
        .map((_, index) => (
          <Skeleton key={index} height={72} />
        ))}
    </div>
  );
}

export default CategoriesLoading ;