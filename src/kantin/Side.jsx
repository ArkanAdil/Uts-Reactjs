import React, { Fragment } from "react";
import img from "./img/makan/naget.jpg";
import img2 from "./img/makan/jus2.jpg";
import img3 from "./img/makan/burger2.jpg";

class Side extends React.Component {
  render() {
    return (
      <Fragment>
        <h3 className="mt-4">Pesanan Saya</h3>
        <div className="container kotak mt-4">
          <h6 className="text-white p-3">Mohamad Arkan Adil Wicaksono</h6>
          <h1 className="text-white p-3">Rp. 1.000.000,-</h1>
          <h6 className="text-white p-3 spasi">1173********8913</h6>
        </div>
        <table className="font-weight-bold ukurantable">
          <tbody>
            <tr>
              <th>
                <img src={img} className="side mt-4" height="50" alt="" />
              </th>
              <td>
                <span className="ml-3 mr-3 mt-2">5</span>
              </td>
              <td>
                <span className="mr-3 mt-2">x</span>
              </td>
              <td>
                <span className="mt-2">Chicken Nugget</span>
              </td>
              <td>
                <span className="text-muted ml-2 mt-2">Rp.25.000,-</span>
              </td>
            </tr>
            <tr>
              <th>
                <img src={img2} className="side mt-4" height="50" alt="" />
              </th>
              <td>
                <span className="ml-3 mr-3 mt-2">5</span>
              </td>
              <td>
                <span className="mr-3 mt-2">x</span>
              </td>
              <td>
                <span className="mt-2">Strawberry Smoothie</span>
              </td>
              <td>
                <span className="text-muted ml-2 mt-2">Rp.50.000,-</span>
              </td>
            </tr>
            <tr>
              <th>
                <img src={img3} className="side mt-4" height="50" alt="" />
              </th>
              <td>
                <span className="ml-3 mr-3 mt-2">5</span>
              </td>
              <td>
                <span className="mr-3 mt-2">x</span>
              </td>
              <td>
                <span className="mt-2">Double Cheese Burger</span>
              </td>
              <td>
                <span className="text-muted ml-2 mt-2">Rp.100.000,-</span>
              </td>
            </tr>
            <hr className="my-4"></hr>
            <tr>
              <th>
                <i class="fas fa-car-side fa-2x p-3"></i>
              </th>
              <td colSpan="3">
                <span className="m-3">Jl.Jonggol, Bogor</span>
              </td>
              <td>
                <span className="text-muted m-2">Gratis</span>
              </td>
            </tr>
            <tr>
              <th>
                <span className="mb-2 ml-2">Total :</span>
              </th>
              <td colSpan="4">
                <h3 className="font-weight-bold text-right">Rp.175.000,-</h3>
              </td>
            </tr>
            <tr>
              <td colSpan="5">
                <button className="btn btn-warning btn-block mt-3 p-2">
                  <h4 className="text-white">
                    Pesan<i class="fas fa-chevron-right ml-5"></i>
                  </h4>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </Fragment>
    );
  }
}
export default Side;
