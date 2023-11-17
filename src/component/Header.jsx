import React, { Component } from "react";

export default class Header extends Component {
  render() {
    return (
      <div>
        <ul className="nav justify-content-center bg-dark">
          <li className="nav-item">
            <a
              className="nav-link disabled "
              aria-disabled="true"
              aria-current="page"
              href="#"
            >
              Try Glasses App Online
            </a>
          </li>
        </ul>
      </div>
    );
  }
}
