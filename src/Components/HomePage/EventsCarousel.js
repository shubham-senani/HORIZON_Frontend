import { Component } from "react";
import Slider from "react-slick";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Backdrop } from "@mui/material";
import "./bigImg.css";
import { NavLink } from "react-router-dom";

export default class EventsCarousel extends Component {
  constructor() {
    super();
    this.state = {
      big: false,
      src_suy: ""
    };
  }

  render() {
    const settings = {
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2500,
      responsive: [
        {
          breakpoint: 667,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            initialSlide: 2
          }
        }
      ]
    };

    const handleClose = () => {
      this.setState({ big: false });
      goToSection("ret_suy");
    };

    function goToSection(id) {
      const section = document.getElementById(id);
      if (!section) return;
      window.scrollTo({
        top: section.offsetTop,
        behavior: "smooth"
      });
    }

    const Enlarge = (e) => {
      this.setState({ big: true });
      this.setState({ src_suy: e.target.src });
    };

    return (
      <>
        <Container id="ret_suy">
          <h2>EVENTS</h2>
          <Slider className="events_slider_perin" {...settings}>
            <Wrap className="items">
              <a onClick={Enlarge} href="#">
                <img src="/images/codeCombat.png" alt="poster1" />
              </a>
            </Wrap>
            <Wrap className="items">
              <a onClick={Enlarge} href="#">
                <img src="/images/codm.png" alt="poster2" />
              </a>
            </Wrap>
            <Wrap className="items">
              <a onClick={Enlarge} href="#">
                <img src="/images/capturePoint5353.png" alt="poster3" />
              </a>
            </Wrap>
            <Wrap className="items">
              <a onClick={Enlarge} href="#">
                <img src="/images/designing.png" alt="poster1" />
              </a>
            </Wrap>
            <Wrap className="items">
              <a onClick={Enlarge} href="#">
                <img src="/images/swotTheTrend.png" alt="poster2" />
              </a>
            </Wrap>
            <Wrap className="items">
              <a onClick={Enlarge} href="#">
                <img src="/images/theChoiceMatrix.png" alt="poster2" />
              </a>
            </Wrap>
            <Wrap className="items">
              <a onClick={Enlarge} href="#">
                <img src="/images/valorant.png" alt="poster2" />
              </a>
            </Wrap>
            <Wrap className="items">
              <a onClick={Enlarge} href="#">
                <img src="/images/ceoConference.png" alt="poster2" />
              </a>
            </Wrap>
            <Wrap className="items">
              <a onClick={Enlarge} href="#">
                <img src="/images/Hackoverflow.png" alt="poster2" />
              </a>
            </Wrap>
          </Slider>
          <NavLink
            className="underlined_button"
            onClick={() => goToSection("header")}
            to="/events"
          >
            <Button>VIEW ALL</Button>
          </NavLink>
        </Container>
        <Backdrop
          sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={this.state.big}
          onClick={handleClose}
        >
          <img className="bigImg" src={this.state.src_suy} alt="error" />
        </Backdrop>
      </>
    );
  }
}

const Container = styled.div`
  margin-left: 150px;
  margin-right: 150px;
  height: auto;
  h2 {
    color: white;
    font-weight: 900;
    font-size: 40px;
    line-height: 39px;
    text-align: center;
    margin-bottom: 100px;

    @media (max-width: 1150px) {
      font-size: 23px;
      font-weight: 900;
      line-height: 23px;
      letter-spacing: 0em;
      text-align: center;
      margin-bottom: 60px;
    }
    @media (max-width: 667px) {
      margin-top: 21px;
      font-size: 20px;
      font-weight: 900;
      letter-spacing: 0em;
      text-align: center;
      margin-bottom: 17px;
    }
  }

  @media (max-width: 1150px) {
    margin-left: 50px;
    margin-right: 50px;
    height: auto;
  }
  @media (max-width: 667px) {
    margin-left: 16px;
    margin-right: 16px;
    height: auto;
  }

  .events_slider_perin {
    margin-left: 51px;
    margin-right: 51px;
  }
`;
const Wrap = styled.a`
  position: relative;
  img {
    margin: auto;
    width: 87%;
    padding: 2.5px;
    border: 4px solid;
    border-image-slice: 1;
    border-image-source: linear-gradient(
      90deg,
      rgba(209, 45, 45, 0.92) 0%,
      #1e149d 65.43%
    );

    @media (max-width: 1150px) {
      padding: 0px;
      border: 2px solid;

      border-image-slice: 1;
      border-image-source: linear-gradient(
        90deg,
        rgba(209, 45, 45, 0.92) 0%,
        #1e149d 65.43%
      );
    }
  }
`;
const PosterTitle = styled.div`
  height: 80px;
  font-weight: 900;
  font-size: 25px;
  position: absolute;
  bottom: 6px;
  left: 26px;
  right: 26px;
  padding-left: 50px;
  padding-right: 50px;
  padding-top: 25px;
  word-wrap: break-word;
  text-align: center;
  line-height: 25px;
  color: white;

  @media (max-width: 1150px) {
    font-size: 12px;
    font-weight: 900;
    letter-spacing: 0em;
    text-align: center;
    padding: 0;
    left: 17px;
    right: 17px;
    bottom: 4px;
    height: 50px;
    line-height: 70px;
  }
  @media (max-width: 667px) {
    font-size: 6px;
    font-weight: 900;
    letter-spacing: 0em;
    text-align: center;
    padding: 0;
    left: 12px;
    right: 12px;
    bottom: 4px;
    height: 30px;
    line-height: 40px;
  }
`;
const Button = styled.div`
  margin-left: auto;
  margin-right: auto;
  margin-top: 60px;
  display: flex;
  width: 200px;
  height: 55px;
  color: white;
  font-weight: 900;
  font-size: 18px;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  background: transparent;
  border: 2px solid;
  border-image-slice: 1;
  border-image-source: linear-gradient(
    90deg,
    rgba(209, 45, 45, 0.92) 0%,
    #1e149d 65.43%
  );

  &:hover {
    background: linear-gradient(99.32deg, #b2016b 0%, #5346f8 119.64%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
  }

  @media (max-width: 1150px) {
    width: 110px;
    height: 40px;
    font-size: 9px;
    font-weight: 900;
    line-height: 9px;
    letter-spacing: 0em;
    text-align: center;
    margin-top: 48px;
  }
  @media (max-width: 667px) {
    width: 89px;
    height: 23px;
    font-size: 6px;
    font-weight: 900;
    line-height: 6px;
    letter-spacing: 0em;
    text-align: center;
    margin-top: 21px;
  }
`;
