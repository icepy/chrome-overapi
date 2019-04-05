import * as React from "react";
import * as ReactDOM from "react-dom";
import styles from "./style.css";
import Header from "./components/header";
import Content from "./components/content";
import Footer from "./components/footer";

class App extends React.Component {
  public render(){
    return (
      <div className={styles["container"]}>
        <Header
          onSearchChanged={(value: string) => {
            console.log(value);
          }}
        />
        <Content />
        <Footer />
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById("app")
);
