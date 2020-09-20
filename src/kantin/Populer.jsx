import React, { Fragment } from "react";

class Populer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      base_url: "https://belajar-react.smkmadinatulquran.sch.id/api/",
      popular: "",
      item: ""
    };
  }

  getAllPopular() {
    return fetch(`${this.state.base_url}populer/all`)
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({ popular: responseJson.data });
      })
      .catch((error) => "error");
  }

  onClickHandler = (e) => {
    this.props.onShowModal(e);
  };

  componentDidMount() {
    this.getAllPopular();
  }

  componentDidUpdate(props) {
    if (props.popular !== this.props.popular) {
      this.setState({ popular: this.props.popular });
    }
  }
  render() {
    return (
      <Fragment>
        <div className="ml-4 mt-3">
          <h3>Populer</h3>
          <div class="row mt-4">
            {this.state.popular
              ? this.state.popular.map((item, i) => (
                  <div key={i} className="col-4 mb-2">
                    <div
                      href="Home.jsx"
                      data-toggle="modal"
                      data-target="#pesanModal"
                      onClick={(_) => this.onClickHandler(item)}
                    >
                      <div class="col mb-4">
                        <div class="card">
                          <input
                            type="image"
                            src={item.image}
                            class="card-img-top bulet"
                            alt="..."
                          ></input>
                          <div class="card-body">
                            <h5 class="card-title">{item.name}</h5>
                            <div className="card-text row">
                              <div className="col-4">
                                <i class="far fa-star">{item.rating}</i>
                              </div>
                              <div className="col-8">
                                <p>{item.harga}</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              : ""}
          </div>
        </div>
      </Fragment>
    );
  }
}
export default Populer;
