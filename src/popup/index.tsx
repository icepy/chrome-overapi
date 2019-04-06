import * as React from "react";
import * as ReactDOM from "react-dom";
import styles from "./style.css";
import Header from "./components/header";
import Content, { IApp } from "./components/content";
import Footer from "./components/footer";
import Menu from "./components/menu";
import apps from "../apps";

interface IState {
  data: IApp[];
  which: number;
}

class App extends React.Component<{}, IState> {
  constructor(props: {}){
    super(props);
    this.state = {
      data: [],
      which: 0,
    }
  }

  public componentDidMount(){
    setTimeout(() => {
      this.setState({
        data: apps,
      });
    }, 2000);
  }

  public renderMainContent(){
    return (
      <Content
        apps={this.state.data}
      />
    );
  }

  public renderSearchContent(){
    return (
      <Content
        apps={this.state.data}
      />
    );
  }

  public renderNoSearchContent(){
    return (
      <div>1234</div>
    )
  }

  public renderWhich(){
    const { which } = this.state;
    switch(which) {
      case 1:
        return this.renderSearchContent();
      case 2:
        return this.renderNoSearchContent();
      default:
        return this.renderMainContent();
    }
  }

  public render(){
    const { data } = this.state;
    return (
      <div className={styles["container"]}>
        <Header
          onSearchChanged={(value: string) => {
            const result = apps.filter(v => v.name.toLocaleLowerCase().replace(/\s+/g,"").indexOf(value) > -1);
            if (result.length > 0) {
              this.setState({
                data: result,
                which: 1
              })
            } else {
              this.setState({
                which: 2,
              });
            }
          }}
        />
        <div className={styles["mark-container"]}>
          <div className={styles["mark-width"]}>
            {
              this.renderWhich()
            }
          </div>
          <Menu />
        </div>
        <Footer />
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById("app")
);
