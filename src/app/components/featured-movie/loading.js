import React from "react";
import { Loading } from "../loading/index";

import styles from "./style.module.css";

function FeatureMovieLoading() {
  return (
    <div style={{ height: 278 }} className={styles.movieWrapper}>
      <Loading />
    </div>
  );
}

export { FeatureMovieLoading };