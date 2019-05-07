import * as React from "react";
import styles from "./style.css";
import { createTab } from "@/utils";
import { LOGO_IMAGE } from "../../assets";
import { POPUP_APPS, POPUP_COMMONLY_USED } from "../../local";

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

const COMMONLYUSED = [
  "typescript",
  "react",
  "node.js",
  "flutter",
  "dart",
  "mdn",
  "java apis doc"
];

interface ICommonlyApp {
  icon: string;
  name: string;
  url: string;
}

const CommonlyApp = (props: ICommonlyApp) => {
  const { name, url, icon } = props;
  return (
    <div className={styles["app"]} onClick={() => {
      createTab(url);
    }}>
      <div className={styles["icon"]}>
        <IconImage
          icon={icon}
        />
      </div>
      <div className={styles["text"]}>
        { name }
      </div>
    </div>
  );
}

export function SearchContent(props: IProps) {
  const { apps } = props;
  return (
    <div className={styles["content-container"]}>
      <div className={styles["content-scroll"]}>
        {
          apps.map((v) => {
            return <CommonlyApp key={v.name} {...v}/>
          })
        }
      </div>
    </div>
  )
}

export default function Content(props: IProps){
  const { apps } = props;
  const commonlys = apps.filter((v) => COMMONLYUSED.indexOf(v.name.toLocaleLowerCase()) > -1);
  return (
    <div className={styles["content-container"]}>
      <div>
        <h4 className={styles["title"]}>{POPUP_COMMONLY_USED}</h4>
        <div className={styles["content-scroll"]}>
          {
            commonlys.map((v) => {
              return <CommonlyApp key={v.name} {...v}/>
            })
          }
        </div>
      </div>
      <div>
        <h4 className={styles["title"]}>{POPUP_APPS}</h4>
        <div className={styles["content-scroll"]}>
          {
            apps.map((v) => {
              return <CommonlyApp key={v.name} {...v}/>
            })
          }
        </div>
      </div>
    </div>
  )
}
