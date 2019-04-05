import * as React from "react";
import styles from "./style.css";
import Search from "../search";
import { LOGO_IMAGE } from "../../assets";
import { POPUP_NAME } from "../../local";

interface IProps {
  onSearchChanged: (searchKey: string) => void;
}

export default function Header(props: IProps){
  return (
    <div className={styles["header-container"]}>
      <div className={styles["header-logo"]}>
        <img src={LOGO_IMAGE} alt="logo" />
        {POPUP_NAME}
      </div>
      <Search 
        onChanged={props.onSearchChanged}
      />
    </div>
  );
}