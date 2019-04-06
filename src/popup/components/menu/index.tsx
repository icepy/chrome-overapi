import * as React from "react";
import styles from "./style.css";
import apps from "@/apps";

export default function Menu(){
  return (
    <div className={styles["menu"]}>
      <div className={styles["menu-container"]}>收录 {apps.length} 个 API 文档</div>
    </div>
  );
}
