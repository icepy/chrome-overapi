import * as React from "react";
import styles from "./style.css";
import { createTab } from "@/utils";
import { LOGO_IMAGE } from "../../assets";

export interface IApp {
  icon: string;
  url: string;
  name: string;
}

interface IProps {
  apps: IApp[];
}

interface IIconImageProps {
  icon: string;
}

const IconImage = (props: IIconImageProps) => {
  const { icon } = props;
  const [ defaultIcon, setDefaultIcon] = React.useState("");
  return (
    <img
      src={defaultIcon || icon}
      alt="icon"
      onError={() => {
        setDefaultIcon(LOGO_IMAGE)
      }}
    />
  )
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
                  <IconImage
                    icon={v.icon}
                  />
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
