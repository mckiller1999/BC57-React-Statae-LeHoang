import React, { Component } from "react";
import style from "./TryGlassStyle.module.scss";
const itemGlass = [
  {
    id: 1,
    price: 30,
    name: "GUCCI G8850U",
    url: "./img/v1.png",
    desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },
  {
    id: 2,
    price: 50,
    name: "GUCCI G8759H",
    url: "./img/v2.png",
    desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },
  {
    id: 3,
    price: 30,
    name: "DIOR D6700HQ",
    url: "./img/v3.png",
    desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },
  {
    id: 4,
    price: 70,
    name: "DIOR D6005U",
    url: "./img/v4.png",
    desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },
  {
    id: 5,
    price: 40,
    name: "PRADA P8750",
    url: "./img/v5.png",
    desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },
  {
    id: 6,
    price: 60,
    name: "PRADA P9700",
    url: "./img/v6.png",
    desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },
  {
    id: 7,
    price: 80,
    name: "FENDI F8750",
    url: "./img/v7.png",
    desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },
  {
    id: 8,
    price: 100,
    name: "FENDI F8500",
    url: "./img/v8.png",
    desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },
  {
    id: 9,
    price: 60,
    name: "FENDI F4300",
    url: "./img/v9.png",
    desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },
];
export default class TryGlass extends Component {
  state = {
    glassDefault: {
      id: 1,
      price: 30,
      name: "GUCCI G8850U",
      url: "./img/v1.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
  };
  createImg = () => {
    return itemGlass.map((item, index) => {
      return (
        // <div
        //   className="col-6"
        //   key={index}
        //   onClick={() => {
        //     this.setState({ glassDefault: item });
        //   }}
        // >
        //   <img className="w-100" src={item.url} alt="..." />
        // </div>
        <div className="card col-2">
          <img className="card-img-top" src={item.url} alt="Title" />
          <div className="card-body">
            <h4 className="card-title">{item.name}</h4>
            <p className="card-text">{item.price}</p>
            <button
              className="btn btn-success"
              onClick={() => {
                this.setState({ glassDefault: item });
              }}
            >
              Try
            </button>
          </div>
        </div>
      );
    });
  };
  render() {
    let demoStyle1 = "res-demo1";
    let demoStyle2 = "res-demo2";

    let demoContain = "res-img";
    let { url, desc, name, price } = this.state.glassDefault;
    return (
      <div className="main-try container mt-3">
        <div className="w-100 row container">{this.createImg()}</div>
        <div className=" d-flex justify-content-around ">
          <div>
            <h3>Try Glass</h3>
            <div className={`res-try  ${style[demoContain]}`}>
              <img
                src={url}
                alt=""
                className={`glass-demo ${style[demoStyle1]}`}
              />
              <img
                src="./img/model.jpg"
                alt="..."
                className={`${style[demoStyle2]} w-75`}
              />
            </div>
          </div>
          <div>
            <h3>Glass</h3>
            <div className="w-50">
              <h4>{name}</h4>
              <img src={url} alt="..." className="w-50" />
              <p>{desc}</p>
              <h3>{price}$</h3>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
