/*eslint-disable*/
import React, { useState } from 'react';
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Tooltip from "@material-ui/core/Tooltip";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
// @material-ui/icons
import Camera from "@material-ui/icons/Camera";
import Palette from "@material-ui/icons/Palette";
import People from "@material-ui/icons/People";
import Add from "@material-ui/icons/Add";
import Favorite from "@material-ui/icons/Favorite";
import ThumbUp from "@material-ui/icons/ThumbUp";

// core components
import Header from "components/Header/Header.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import NavPills from "components/NavPills/NavPills.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
import Badge from "components/Badge/Badge.js";
import Muted from "components/Typography/Muted.js";
import Parallax from "components/Parallax/Parallax.js";
import Clearfix from "components/Clearfix/Clearfix.js";
import Button from "components/CustomButtons/Button.js";

import christian from "assets/img/faces/christian.jpg";
import nike2019 from "assets/img/examples/nike2019.jpg";
import rampage from "assets/img/examples/rampage.jpg";
import cynthiaDelRio from "assets/img/examples/cynthia-del-rio.jpg";
import streetfighter from "assets/img/examples/street-fighter.png";
import clemOnojegaw from "assets/img/examples/clem-onojegaw.jpg";
import avengerstoy from "assets/img/examples/avengerstoy.jpg";
import avatar from "assets/img/faces/avatar.jpg";
import marc from "assets/img/faces/marc.jpg";
import kendall from "assets/img/faces/kendall.jpg";
import cardProfile2Square from "assets/img/faces/card-profile2-square.jpg";

import profilePageStyle from "assets/jss/material-kit-pro-react/views/profilePageStyle.js";

const useStyles = makeStyles(profilePageStyle);

export default function ProfilePage({ ...rest }) {

  const [profileLikeColor, setProfileLikeColor] = useState('github');


  React.useEffect(() => {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  });


  const classes = useStyles();
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );
  const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);

  function handleProfileLike(color) {

    if(color.profileLikeColor == 'github')
    {
      setProfileLikeColor('info');
    }
    else
    {
      setProfileLikeColor('github');
    }
    
  }


  return (
    <div>
      <Header
        color="transparent"
        brand="VeRB"
        links={<HeaderLinks dropdownHoverColor="info" />}
        fixed
        changeColorOnScroll={{
          height: 200,
          color: "info"
        }}
        {...rest}
      />
      <Parallax
        image={require("assets/img/bg7.jpg")}
        filter="dark"
        className={classes.parallax}
      />
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={6}>
              <div className={classes.profile}>
                <div>
                  <img src={christian} alt="..." className={imageClasses} />
                </div>

            
                <div className={classes.name}>

                <i className="material-icons md-48 orange600">star</i>
                <i className="material-icons md-48 orange600">star</i>
                <i className="material-icons md-48 orange600">star</i>
                <i className="material-icons md-48 orange600">star</i>
                <i className="material-icons md-48 orange600">star</i>


                  <h3 className={classes.title}>Christian Louboutin</h3>
                  <h6>INFLUENCER</h6>
                  <Button
                    justIcon
                    simple
                    color="instagram"
                    className={classes.margin5}
                  >
                    <i className={classes.socials + " fab fa-instagram"} />
                  </Button>
                  <Button
                    justIcon
                    simple
                    color="twitter"
                    className={classes.margin5}
                  >
                    <i className={classes.socials + " fab fa-twitter"} />
                  </Button>
                  <Button
                    justIcon
                    simple
                    color="pinterest"
                    className={classes.margin5}
                  >
                    <i className={classes.socials + " fab fa-pinterest"} />
                  </Button>
                </div>
              </div>
              <div className={classes.follow}>
                <Tooltip
                  id="tooltip-top"
                  title="Connect With this user"
                  placement="top"
                  classes={{ tooltip: classes.tooltip }}
                >
                  <Button
                    justIcon
                    round
                    color="github"
                    className={classes.followButton}
                  >
                    <Add className={classes.followIcon} />
                  </Button>
                </Tooltip>
                <Tooltip
                  id="tooltip-top"
                  title="Like This User"
                  placement="top"
                  classes={{ tooltip: classes.tooltip }}
                >
                  <Button
                    justIcon
                    round
                    color={profileLikeColor}
                    onClick={() => handleProfileLike({profileLikeColor})} 
                    className={classes.followButton}
                  >
                    <ThumbUp className={classes.icon} />
                  </Button>
                </Tooltip>
                
              </div>
            </GridItem>
          </GridContainer>
          <div className={classNames(classes.description, classes.textCenter)}>
            <p>
              A “Me in 30 Seconds” statement is a simple way to present to someone else a balanced understanding of who you are. It piques the interest of a listener who invites you to “Tell me a little about yourself,” and it provides a brief and compelling answer to the question “Why should I buy from you?” {" "}
            </p>
          </div>
          <div className={classes.profileTabs}>
            <NavPills
              alignCenter
              color="info"
              tabs={[
                {
                  tabButton: "Videos",
                  tabIcon: Palette,
                  tabContent: (
                    <GridContainer>
                      <GridItem
                        xs={12}
                        sm={12}
                        md={7}
                        className={classes.gridItem}
                      >
                        <h4 className={classes.title}>Latest Videos</h4>
                        <GridContainer className={classes.collections}>
                          <GridItem xs={12} sm={12} md={6}>
                            <Card
                              background
                              style={{
                                backgroundImage: "url(" + streetfighter + ")"
                              }}
                            >
                              <CardBody background className={classes.cardBody}>
                                <Badge
                                  color="warning"
                                  className={classes.badge}
                                >
                                  Electronics
                                </Badge>
                                <a href="#/video-page">
                                  <h2 className={classes.cardTitleWhite}>
                                    Arcade 1Up Full Review Street Fighter Edition - Is it Worth $300?
                                  </h2>
                                </a>
                              </CardBody>
                            </Card>
                          </GridItem>
                          <GridItem xs={12} sm={12} md={6}>
                            <Card
                              background
                              style={{
                                backgroundImage: "url(" + rampage + ")"
                              }}
                            >
                              <CardBody background className={classes.cardBody}>
                                <Badge color="warning" className={classes.badge}>
                                  Electronics
                                </Badge>
                                <a href="#/video-page">
                                  <h2 className={classes.cardTitleWhite}>
                                    Arcade1Up Rampage Arcade Cabinet Review
                                  </h2>
                                </a>
                              </CardBody>
                            </Card>
                          </GridItem>
                          <GridItem xs={12} sm={12} md={6}>
                            <Card
                              background
                              style={{
                                backgroundImage: "url(" + nike2019 + ")"
                              }}
                            >
                              <CardBody background className={classes.cardBody}>
                                <Badge color="primary" className={classes.badge}>
                                  Footwear
                                </Badge>
                                <a href="#/video-page">
                                  <h2 className={classes.cardTitleWhite}>
                                    Nike Downshifter
                                  </h2>
                                </a>
                              </CardBody>
                            </Card>
                          </GridItem>
                          <GridItem xs={12} sm={12} md={6}>
                            <Card
                              background
                              style={{
                                backgroundImage: "url(" + avengerstoy + ")"
                              }}
                            >
                              <CardBody background className={classes.cardBody}>
                                <Badge
                                  color="rose"
                                  className={classes.badge}
                                >
                                  Toys
                                </Badge>
                                <a href="#/video-page">
                                  <h2 className={classes.cardTitleWhite}>
                                    Endgame Power Gauntlet
                                  </h2>
                                </a>
                              </CardBody>
                            </Card>
                          </GridItem>
                        </GridContainer>
                      </GridItem>
                      <GridItem
                        xs={12}
                        sm={12}
                        md={2}
                        className={classes.gridItem}
                      >
                        <h4 className={classes.title}>Stats</h4>
                        <ul className={classes.listUnstyled}>
                          <li>
                            <b>4</b> Products
                          </li>
                          <li>
                            <b>12</b> Connections
                          </li>
                          <li>
                            <b>331</b> Purchases
                          </li>
                          <li>
                            <b>1.2K</b> Likes
                          </li>
                        </ul>
                        <hr />
                        <h4 className={classes.title}>Focus</h4>
                        <Badge color="warning">Electronics</Badge>
                        <Badge color="primary">Footwear</Badge>
                        <Badge color="rose">Toys</Badge>
                      </GridItem>
                    </GridContainer>
                  )
                },
                {
                  tabButton: "Connections",
                  tabIcon: People,
                  tabContent: (
                    <div>
                      <GridContainer justify="center">
                        <GridItem
                          xs={12}
                          sm={12}
                          md={5}
                          className={classes.gridItem}
                        >
                          <Card profile plain className={classes.card}>
                            <GridContainer>
                              <GridItem xs={12} sm={12} md={5}>
                                <CardHeader image plain>
                                  <a href="#pablo">
                                    <img src={avatar} alt="..." />
                                  </a>
                                  <div
                                    className={classes.coloredShadow}
                                    style={{
                                      backgroundImage: "url(" + avatar + ")",
                                      opacity: "1"
                                    }}
                                  />
                                </CardHeader>
                              </GridItem>
                              <GridItem xs={12} sm={12} md={7}>
                                <CardBody plain>
                                  <h4 className={classes.cardTitle}>
                                    Gigi Hadid
                                  </h4>
                                  <Muted>
                                    <h6>MODEL</h6>
                                  </Muted>
                                  <p className={classes.description}>
                                    Don{"'"}t be scared of the truth because we
                                    need to restart the human foundation in
                                    truth...
                                  </p>
                                </CardBody>
                              </GridItem>
                            </GridContainer>
                          </Card>
                        </GridItem>
                        <GridItem
                          xs={12}
                          sm={12}
                          md={5}
                          className={classes.gridItem}
                        >
                          <Card profile plain className={classes.card}>
                            <GridContainer>
                              <GridItem xs={12} sm={12} md={5}>
                                <CardHeader image plain>
                                  <a href="#pablo">
                                    <img src={marc} alt="..." />
                                  </a>
                                  <div
                                    className={classes.coloredShadow}
                                    style={{
                                      backgroundImage: "url(" + marc + ")",
                                      opacity: "1"
                                    }}
                                  />
                                </CardHeader>
                              </GridItem>
                              <GridItem xs={12} sm={12} md={7}>
                                <CardBody plain>
                                  <h4 className={classes.cardTitle}>
                                    Marc Jacobs
                                  </h4>
                                  <Muted>
                                    <h6>Influencer</h6>
                                  </Muted>
                                  <p className={classes.description}>
                                    Don{"'"}t be scared of the truth because we
                                    need to restart the human foundation in
                                    truth...
                                  </p>
                                </CardBody>
                              </GridItem>
                            </GridContainer>
                          </Card>
                        </GridItem>
                      </GridContainer>
                      <GridContainer justify="center">
                        <GridItem
                          xs={12}
                          sm={12}
                          md={5}
                          className={classes.gridItem}
                        >
                          <Card profile plain className={classes.card}>
                            <GridContainer>
                              <GridItem xs={12} sm={12} md={5}>
                                <CardHeader image plain>
                                  <a href="#pablo">
                                    <img src={kendall} alt="..." />
                                  </a>
                                  <div
                                    className={classes.coloredShadow}
                                    style={{
                                      backgroundImage: "url(" + kendall + ")",
                                      opacity: "1"
                                    }}
                                  />
                                </CardHeader>
                              </GridItem>
                              <GridItem xs={12} sm={12} md={7}>
                                <CardBody plain>
                                  <h4 className={classes.cardTitle}>
                                    Kendall Jenner
                                  </h4>
                                  <Muted>
                                    <h6>MODEL</h6>
                                  </Muted>
                                  <p className={classes.description}>
                                    I love you like Kanye loves Kanye. Don
                                    {"'"}t be scared of the truth.
                                  </p>
                                </CardBody>
                              </GridItem>
                            </GridContainer>
                          </Card>
                        </GridItem>
                        <GridItem
                          xs={12}
                          sm={12}
                          md={5}
                          className={classes.gridItem}
                        >
                          <Card profile plain className={classes.card}>
                            <GridContainer>
                              <GridItem xs={12} sm={12} md={5}>
                                <CardHeader image plain>
                                  <a href="#pablo">
                                    <img src={cardProfile2Square} alt="..." />
                                  </a>
                                  <div
                                    className={classes.coloredShadow}
                                    style={{
                                      backgroundImage:
                                        "url(" + cardProfile2Square + ")",
                                      opacity: "1"
                                    }}
                                  />
                                </CardHeader>
                              </GridItem>
                              <GridItem xs={12} sm={12} md={7}>
                                <CardBody plain>
                                  <h4 className={classes.cardTitle}>
                                    George West
                                  </h4>
                                  <Muted>
                                    <h6>MODEL/DJ</h6>
                                  </Muted>
                                  <p className={classes.description}>
                                    I love you like Kanye loves Kanye.
                                  </p>
                                </CardBody>
                              </GridItem>
                            </GridContainer>
                          </Card>
                        </GridItem>
                      </GridContainer>
                    </div>
                  )
                },
                {
                  tabButton: "Media",
                  tabIcon: Camera,
                  tabContent: (
                    <GridContainer justify="center">
                      <GridItem xs={12} sm={12} md={3}>
                        <img
                          alt="..."
                          src={streetfighter}
                          className={navImageClasses}
                        />
                        <img
                          alt="..."
                          src={rampage}
                          className={navImageClasses}
                        />
                      </GridItem>
                      <GridItem xs={12} sm={12} md={3}>
                        <img
                          alt="..."
                          src={streetfighter}
                          className={navImageClasses}
                        />
                        <img
                          alt="..."
                          src={nike2019}
                          className={navImageClasses}
                        />
                        <img
                          alt="..."
                          src={cynthiaDelRio}
                          className={navImageClasses}
                        />
                      </GridItem>
                    </GridContainer>
                  )
                }
              ]}
            />
          </div>
          <Clearfix />
        </div>
      </div>
    </div>
  );
}
