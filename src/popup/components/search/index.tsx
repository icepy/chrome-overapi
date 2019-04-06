import * as React from "react";
import styles from "./style.css";
import debounce from "lodash/debounce";
import { POPUP_SEARCH_PLACEHOLDER } from "../../local";

type Changed = (value: string) => void;

interface IProps {
  onChanged: Changed
}

const inputChangeHandler = (value: string, onChanged: Changed) => {
  onChanged(value);
}
const debounceChangeHandler = debounce(inputChangeHandler, 500);

export default function Search(props: IProps){
  const [ value, setValue ] = React.useState("");

  return (
    <div className={styles["search-container"]}>
      <div className={styles["search-input-container"]}>
        <input
          value={value}
          type="text"
          className={styles["search-input"]}
          placeholder={POPUP_SEARCH_PLACEHOLDER}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            const val = event.target.value;
            setValue(val);
            debounceChangeHandler(val, props.onChanged);
          }}
        />
      </div>
    </div>
  );
}
