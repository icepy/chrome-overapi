import * as React from "react";
import styles from "./style.css";

export default function Content(){
  return (
    <div className={styles["content-container"]}>
      <div className={styles["content-scroll"]}>
        1234
      </div>
    </div>
  )
}
