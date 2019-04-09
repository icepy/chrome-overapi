import * as React from "react";
import {LOADING_IMAGE} from "../../assets";
import styles from "./style.css";

export default function Loading(){
  return (
    <div className={styles["full-screent-load-container"]}>
      <header className={styles["full-screent-load-header"]}>
        <img src={LOADING_IMAGE} className={styles["full-screent-load-logo"]} alt="logo" />
      </header>
    </div>
  )
}
