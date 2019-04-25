import * as React from "react";
import styles from "./style.css";
import apps from "@/apps";
import { POPUP_CASE_1, POPUP_CASE_2 } from "../../local";

export default function Menu(){
  return (
    <div className={styles["menu"]}>
      <div className={styles["menu-container"]}>
        {POPUP_CASE_1}<strong>{apps.length}</strong>{POPUP_CASE_2}
      </div>
    </div>
  );
}
