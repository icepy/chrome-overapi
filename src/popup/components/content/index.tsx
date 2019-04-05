import * as React from "react";
import styles from "./style.css";

export interface IApp {
  icon: string;
  url: string;
  name: string;
}

interface IProps {
  apps: IApp[];
}

export default function Content(props: IProps){
  return (
    <div className={styles["content-container"]}>
      <div className={styles["content-scroll"]}>
        1234
      </div>
    </div>
  )
}
