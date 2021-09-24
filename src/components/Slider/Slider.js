import React from "react";
import "./Slide.scss"
import './Slider.scss'
import './BoxSlider.scss'
import {BoxSlider} from "./BoxSlider";

export class Slider extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activeSlide: 0
    };
  }

  dotOnClick = (e) => {
    const value = e.target.dataset
    const slide = parseInt(value.index, 10)

    this.setState({
      activeSlide: slide
    });
  };

  render() {
    return (
      <div className="slider">
        <div className="slider__box">
          {this.props.children.map((child, index) =>
            <BoxSlider key={index} active={index === this.state.activeSlide}>
              {child}
            </BoxSlider>
          )}
        </div>

        <div className="slider__dots">
          {this.props.children.map((child, index) =>
            <div className="dots" key={index}
                 data-index={index} onClick={this.dotOnClick}>

              {index === this.state.activeSlide ? "◉" : "◌"}
            </div>)}
        </div>
      </div>
    );
  }
}
