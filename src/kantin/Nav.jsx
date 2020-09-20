import React, { Fragment } from "react";

class Nav extends React.Component {
  render() {
    return (
      <Fragment>
        <nav className="navbar navbar-light bg-light">
          <a href="Home.jsx" className="navbar-brand">
            <i class="fas fa-bars mr-3 icon"></i>
            MyKantin
          </a>
          <form className="mr-auto ml-5">
            <div class="input-group input-group-md">
              <div class="input-group-prepend">
                <span class="input-group-text" id="inputGroup-sizing-md">
                  <i class="fas fa-search"></i>
                </span>
              </div>
              <input
                placeholder="Cari Makan Bang?"
                type="text"
                class="form-control"
                aria-label="Small"
                aria-describedby="inputGroup-sizing-md"
              ></input>
            </div>
          </form>
          <i class="fas fa-heart mr-3"></i>
          <span className="badge circle mr-3">3</span>
          <i class="fas fa-user-circle"></i>
        </nav>
      </Fragment>
    );
  }
}
export default Nav;
