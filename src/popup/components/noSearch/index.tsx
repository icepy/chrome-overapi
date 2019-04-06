import * as React from "react";
import styles from "./style.css";
import { POPUP_NO_SEARCH_RESULT } from "../../local";

export default function NoSearchResult(){
  return (
    <div className={styles["no-search-result"]}>
      {POPUP_NO_SEARCH_RESULT}
    </div>
  )
}
