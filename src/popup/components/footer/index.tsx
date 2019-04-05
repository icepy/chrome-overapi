import * as React from "react";
import styles from "./style.css";
import { createTab } from "@/utils";

export default function Footer(){
  return (
    <div className={styles["footer-container"]}>
      <div className={styles["footer-pd"]}>
        <a
          href="https://github.com/icepy"
          onClick={(e: React.MouseEvent) => {
            e.preventDefault();
            createTab("https://github.com/icepy")
          }}
        >
          @icepy
        </a>
      </div>
    </div>
  )
}
