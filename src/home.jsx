import React, { Component } from "react";
import {
  Navbar,
  Nav,
  NavbarBrand,
  NavItem,
  Button,
  Carousel,
  Container,
  Card,
  Row,
  Col,
  Image,
  Popover,
  OverlayTrigger,
  Tooltip,
} from "react-bootstrap";
// import { Divider, Grid, Header, Icon, List, Menu, Responsive, Segment, Sidebar, Visibility, Popup, Button as sButton } from 'semantic-ui-react'
import { Icon, Popup, Footer } from "semantic-ui-react";
import Logo from "./assets/icons/png/512x512.png";
import * as s from "./slides";
import ScrollableAnchor from "react-scrollable-anchor";
import { goToAnchor } from "react-scrollable-anchor";
import yaml from "js-yaml";

import pbs_logo_a from "./assets/rober.jpg";

class Page extends Component {
  render() {
    return (
      <div style={{ overflow: "auto" }}>
        <ScrollableAnchor id={"about"}>
          <span />
        </ScrollableAnchor>
        <TopMenu />

        <div className="menu-margin" />
        <div className="parent-container">
          <SliderSection />
        </div>

        <ScrollableAnchor id={"download"}>
          <span />
        </ScrollableAnchor>
        <div className="menu-margin" />

        <div className="download-section">
          <DownloadSection />
        </div>

        <ScrollableAnchor id={"about-us"}>
          <span />
        </ScrollableAnchor>
        <div className="menu-margin" />
        <div className="about-us-section">
          <AboutSection />
        </div>

        <div className="footer">
          <footer className="page-footer font-small blue">
            <div className="footer-copyright text-center py-3">
              © 2019 Copyright:
              <a href="https://aboni.dev/" target="_blank">
                {" "}
                Alexis Boni
              </a>
            </div>
          </footer>
        </div>
      </div>
    );
  }
}

class TopMenu extends Component {
  render() {
    return (
      <Navbar bg="dark" variant="dark" fixed="top">
        <Navbar.Brand href="#home">
          <img
            alt=""
            src={Logo}
            width="30"
            height="30"
            className="d-inline-block align-top"
          />
        </Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link onClick={() => goToAnchor("about", true)}>
            <Icon name="info" />
            &nbsp;About
          </Nav.Link>
          <Nav.Link onClick={() => goToAnchor("download", true)}>
            {" "}
            <Icon name="download" />
            &nbsp;Download
          </Nav.Link>
          <Nav.Link
            href="https://wiki.aboni.dev/speechr-user-manual"
            target="blank">
            {" "}
            <Icon name="book" /> &nbsp; Docs
          </Nav.Link>
          <Nav.Link href="https://www.buymeacoffee.com/aboni" target="blank">
            {" "}
            <Icon name="coffee" /> &nbsp;Buy me Coffee
          </Nav.Link>
        </Nav>
      </Navbar>
    );
  }
}

class SliderSection extends Component {
  render() {
    return (
      <Carousel
        draggable
        pauseOnHover
        interval={null}
        style={{ background: "blue", height: "100%" }}>
        {s.slidesContent.map((item, index) => (
          <Carousel.Item className="slide-item" key={item.title}>
            <div
              className="slide-img"
              style={{ backgroundImage: "url(" + item.image + ")" }}
            />
            <Carousel.Caption className="slide-caption">
              <h3>{item.title}</h3>
              {item.description}
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    );
  }
}

class DownloadSection extends Component {
  state = {
    latest_win: "",
    latest_linux: "",
  };

  async componentDidMount() {
    let win = "https://speechr.aboni.dev/installer/win/latest.yml";
    let res = await fetch(win);
    let body = await res.text();
    var doc = yaml.safeLoad(body, "utf8");
    this.setState({ latest_win: doc });

    let linux = "https://speechr.aboni.dev/installer/linux/latest-linux.yml";
    let l_res = await fetch(linux);
    let l_body = await l_res.text();
    var l_doc = yaml.safeLoad(l_body, "utf8");
    this.setState({ latest_linux: l_doc });
  }

  processDownload = osType => {
    console.log(osType);
    let latest = "/latest.yml";
    if (osType === "linux") {
      latest = "/latest-linux.yml";
    }
    if (osType === "mac") {
      latest = "/latest-mac.yml";
    }
    let baseurl = "https://speechr.aboni.dev/installer/" + osType + "/";
    let url = baseurl + latest;

    fetch(url)
      .then(function(response) {
        return response.text();
      })
      .then(function(data) {
        try {
          var doc = yaml.safeLoad(data, "utf8");

          const link = document.createElement("a");
          link.href = baseurl + doc.path;
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);

          console.log(doc.path);
        } catch (e) {
          console.log(e);
        }
      })
      .catch(function(err) {
        console.error(err);
      });
  };

  render() {
    return (
      <Container
        style={{
          maxWidth: "800px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          paddingLeft: "40px",
          paddingRight: "40px",
        }}>
        <h1>Download Speechr! (beta)</h1>
        <div className="lead">Start writing your game today.</div>
        {/* <Card style={{ maxWidth: '40%', textAlign: "center", alignItems: "center" }}> */}
        <Row style={{ width: "100%" }}>
          <Col>
            <Card>
              <Card.Header>Windows</Card.Header>

              <Card.Body>
                <Icon name="windows" size="massive" color="blue" />

                <p style={{ fontWeight: "100" }}>
                  Windows 7, 8, 10.
                  <br />
                  Installable.
                </p>
                <ul style={{ textAlign: "left" }}>
                  <li>
                    <b>Version: </b>
                    {this.state.latest_linux.version}
                  </li>
                  <li>
                    <b>Filename: </b>
                    {this.state.latest_linux.path}
                  </li>
                  <li>
                    <b>Release Date: </b>
                    {new Date(
                      this.state.latest_linux.releaseDate
                    ).toLocaleDateString()}
                  </li>
                </ul>
                <Button
                  variant="primary"
                  onClick={() => this.processDownload("win")}>
                  Download
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Header>Linux</Card.Header>

              <Card.Body>
                <Icon name="linux" size="massive" color="grey" />

                <p style={{ fontWeight: "100" }}>
                  {" "}
                  No need to install.
                  <br />
                  32-bit and 64-bit Linux desktops.
                </p>
                <ul style={{ textAlign: "left" }}>
                  <li>
                    <b>Version: </b>
                    {this.state.latest_linux.version}
                  </li>
                  <li>
                    <b>Filename: </b>
                    {this.state.latest_linux.path}
                  </li>
                  <li>
                    <b>Release Date: </b>
                    {new Date(
                      this.state.latest_linux.releaseDate
                    ).toLocaleDateString()}
                  </li>
                </ul>
                <Button
                  variant="dark"
                  onClick={() => this.processDownload("linux")}>
                  Download
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <div className="lead" />
        <a href="https://discordapp.com/invite/8bvTvZu" target="_blank">
          <Button size="lg" variant="warning">
            {" "}
            <Icon name="discord" />
            While in beta, please hop into discord to fetch a free license key.
          </Button>
        </a>
        <div className="lead" />
        <Button
          variant="info"
          size="lg"
          block
          onClick={() => goToAnchor("about-us")}>
          WAIT!!! Who makes all this stuff?.
        </Button>
      </Container>
    );
  }
}

class AboutSection extends Component {
  render() {
    return (
      <Container style={{ maxWidth: "800px", bottom: "auto", top: "auto" }}>
        <Row>
          <Col>
            <h1>Made by indie dev for indie devs.</h1>
          </Col>
        </Row>
        <hr />
        <Row>
          <Col>
            <a href="https://aboni.dev" className="ui medium image">
              <Image rounded size="large" src={pbs_logo_a} />
            </a>
          </Col>
          <Col style={{ alignSelf: "center" }}>
            <div className="lead">
              I make games, apps, webs and music. I am a also a{" "}
              <a href="https://github.com/Kickball/awesome-selfhosted">
                self-hosted
              </a>{" "}
              and DIY enthusiast.
            </div>
          </Col>
        </Row>
        <Row style={{ padding: "20px 20px" }}>
          <Col md="12">
            <a
              href="https://aboni.dev"
              target="_blank"
              rel="noopener noreferrer">
              <Icon circular inverted size="big" color="grey" name="world" />
            </a>
            <a
              href="https://discordapp.com/invite/8bvTvZu"
              target="_blank"
              rel="noopener noreferrer">
              <Icon
                circular
                inverted
                color="violet"
                size="big"
                name="discord"
              />
            </a>

            <a
              href="https://github.com/ajboni/"
              target="_blank"
              rel="noopener noreferrer">
              <Icon circular inverted color="purple" size="big" name="github" />
            </a>
            <a
              href="https://gitlab.com/ajboni"
              target="_blank"
              rel="noopener noreferrer">
              <Icon circular inverted color="orange" size="big" name="gitlab" />
            </a>
            <a
              href="https://twitter.com/rodobodolfo"
              target="_blank"
              rel="noopener noreferrer">
              <Icon circular inverted color="blue" size="big" name="twitter" />
            </a>
            <a
              href="https://www.youtube.com/channel/UCweBjZoA-EJ1i33CXcpghgQ"
              target="_blank"
              rel="noopener noreferrer">
              <Icon circular inverted size="big" name="youtube" color="red" />
            </a>
            <a
              href="https://soundcloud.com/rodobodolfo"
              target="_blank"
              rel="noopener noreferrer">
              <Icon
                circular
                inverted
                size="big"
                name="soundcloud"
                color="orange"
              />
            </a>
            <a
              href="mailto:mail@aboni.dev"
              target="_blank"
              rel="noopener noreferrer">
              <Icon circular inverted size="big" name="mail" color="green" />
            </a>
          </Col>
        </Row>
        <div className="h10" />
        <hr className="hr-text" data-content="ABOUT SPEECHR" />
        <div className="h10" />
        <Row>
          <Col>
            <h1> Why Speechr?</h1>
            <br />
          </Col>
        </Row>
        <Row>
          <Col>
            <div className="lead">
              I started Speechr was back in January 2016 after I found I had a
              need for a tool to assist me in the creation of videogames.
              Current alternatives at the time were all paid and not indie
              friendly. Speechr was crucial in the making of several games and
              now I am making it bigger, better, and nicer.
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            {" "}
            <a
              href="https://aboni.dev"
              target="_blank"
              rel="noopener noreferrer">
              <Button size="lg" variant="success">
                About Me!
              </Button>
            </a>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Page;
