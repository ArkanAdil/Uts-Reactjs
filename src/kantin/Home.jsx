import React, { Fragment } from "react";
import Nav from "./Nav";
import Slideimg from "./Slideimg";
import Kategori from "./Kategori";
import Populer from "./Populer";
import Side from "./Side";

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      category: "0",
      popular: [],
      base_url: "https://belajar-react.smkmadinatulquran.sch.id/api/",
      item: null,
      order: {}
    };
  }

  popularOnChange = (e) => {
    return fetch(`${this.state.base_url}populer?category_id=${e}`, {
      method: "POST"
    })
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          popular: responseJson.data
        });
      })
      .catch((error) => "error");
  };

  handlerModal = (item) => {
    this.setState({
      item: item
    });
  };

  onOrderHandler = (data) => {
    this.setState({
      order: data
    });
    console.log();
  };

  render() {
    return (
      <Fragment>
        <div>
          <Nav />
        </div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-8">
              <div>
                <Slideimg />
              </div>
              <div>
                <Kategori popular={this.popularOnChange} />
              </div>
              <div>
                <Populer
                  popular={this.state.popular}
                  onShowModal={this.handlerModal}
                />
              </div>
            </div>
            <div className="col-4 back">
              <Side />
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Home;
