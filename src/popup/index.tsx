import * as React from "react";
import * as ReactDOM from "react-dom";
import styles from "./style.css";
import Header from "./components/header";
import Content, { IApp } from "./components/content";
import Footer from "./components/footer";
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
    )
  }

  public renderSearchContent(){
    //
  }

  public renderNoSearchContent(){
    //
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
            const result = apps.filter(v => v.name.toLocaleLowerCase().indexOf(value) > -1);
            if (result.length > 0) {
              // 搜索结果
            } else {
              // 无搜索结果
            }
          }}
        />
        { this.renderWhich() }
        <Footer />
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById("app")
);
