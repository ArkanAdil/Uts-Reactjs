import React, { Fragment } from "react";
import img from "./img/makan/makanan.jpg";
import img1 from "./img/makan/burger.jpg";
import img2 from "./img/makan/pizza.jpg";
import img3 from "./img/makan/jus.jpg";

class Konten extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      base_url: "https://belajar-react.smkmadinatulquran.sch.id/api/",
      categories: ""
    };
  }
  // eslint-disable-next-line
  getAllCategories() {
    return fetch(`${this.state.base_url}category/all`)
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({ categories: responseJson.data });
      })
      .catch((error) => "error");
  }

  componentDidMount() {
    this.getAllCategories();
    console.log(this.state.categories);
  }

  onClickHandler = (e) => {
    this.props.popular(e);
  };

  render() {
    return (
      <Fragment>
        <div className="row ml-2">
          <div className="col-sm-9">
            <h3>Kategori</h3>
          </div>
          <div className="col-sm-3">
            <button className="btn badge badge-pill wortel text-white p-2">
              Lebih Lengkap
            </button>
          </div>
          <div className="row m-3">
            {this.state.categories ? (
              this.state.categories.map((item) => (
                <div
                  className="col-4 d-flex justify-content-between"
                  onClick={(_) => this.onClickHandler(item.id)}
                >
                  <input
                    type="image"
                    className="gambargw mr-3 radiasiultrasonik ml-4"
                    src={item.img}
                    alt=""
                  />
                </div>
              ))
            ) : (
              <br />
            )}
          </div>
        </div>
      </Fragment>
    );
  }
}
export default Konten;
