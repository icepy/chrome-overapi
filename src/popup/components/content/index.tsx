import * as React from "react";
import styles from "./style.css";
import { createTab } from "@/utils";

export interface IApp {
  icon: string;
  url: string;
  name: string;
}

interface IProps {
  apps: IApp[];
}

export default function Content(props: IProps){
  const { apps } = props;
  return (
    <div className={styles["content-container"]}>
      <div className={styles["content-scroll"]}>
        {
          apps.map((v) => {
            return (
              <div className={styles["app"]} key={v.name} onClick={() => {
                createTab(v.url);
              }}>
                <div className={styles["icon"]}>
                  <img src={v.icon} alt="icon"/>
                </div>
                <div className={styles["text"]}>
                  { v.name }
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}
