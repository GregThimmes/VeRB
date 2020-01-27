import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
// import  from "@material-ui/icons/";
// core components

import Header from "components/Header/Header.js";
import HeaderLinks from "components/Header/HeaderLinks.js";

import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
import CardAvatar from "components/Card/CardAvatar.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import Button from "components/CustomButtons/Button.js";
import Muted from "components/Typography/Muted.js";

import teamsStyle from "assets/jss/material-kit-pro-react/views/sectionsSections/teamsStyle.js";
import styles from "assets/jss/material-kit-pro-react/views/componentsSections/sectionCards.js";

import bg7 from "assets/img/bg7.jpg";
import city from "assets/img/examples/city.jpg";
import marc from "assets/img/faces/marc.jpg";
import christian from "assets/img/faces/christian.jpg";
import kendall from "assets/img/faces/kendall.jpg";
import avatar from "assets/img/faces/avatar.jpg";
import cardProfile1 from "assets/img/examples/card-profile1.jpg";
import cardProfile2 from "assets/img/examples/card-profile2.jpg";
import cardProfile4 from "assets/img/examples/card-profile4.jpg";
import cardProfile1Square from "assets/img/faces/card-profile1-square.jpg";
import cardProfile2Square from "assets/img/faces/card-profile2-square.jpg";
import cardProfile4Square from "assets/img/faces/card-profile4-square.jpg";
import cardProfile6Square from "assets/img/faces/card-profile6-square.jpg";


import Success from "components/Typography/Success.js";
import Refresh from "@material-ui/icons/Refresh";
import Subject from "@material-ui/icons/Subject";

const useStyles = makeStyles(teamsStyle);
const useRotateStyles = makeStyles(styles);

export default function MatchesPage({ ...rest }) {
  const [activeRotate1, setActiveRotate1] = React.useState("");
  const classes = useStyles();
  const card_classes = useRotateStyles();
  React.useEffect(() => {
    if (window) {
      window.addEventListener("resize", addStylesForRotatingCards);
    }
    addStylesForRotatingCards();
    return function cleanup() {
      if (window) {
        window.removeEventListener("resize", addStylesForRotatingCards);
      }
    };
  });
  const addStylesForRotatingCards = () => {
    var rotatingCards = document.getElementsByClassName(card_classes.cardRotate);
    for (let i = 0; i < rotatingCards.length; i++) {
      var rotatingCard = rotatingCards[i];
      var cardFront = rotatingCard.getElementsByClassName(card_classes.front)[0];
      var cardBack = rotatingCard.getElementsByClassName(card_classes.back)[0];
      cardFront.style.height = "unset";
      cardFront.style.width = "unset";
      cardBack.style.height = "unset";
      cardBack.style.width = "unset";
      var rotatingWrapper = rotatingCard.parentElement;
      var cardWidth = rotatingCard.parentElement.offsetWidth;
      var cardHeight = rotatingCard.children[0].children[0].offsetHeight;
      rotatingWrapper.style.height = cardHeight + "px";
      rotatingWrapper.style["margin-bottom"] = 30 + "px";
      cardFront.style.height = "unset";
      cardFront.style.width = "unset";
      cardBack.style.height = "unset";
      cardBack.style.width = "unset";
      cardFront.style.height = cardHeight + 35 + "px";
      cardFront.style.width = cardWidth + "px";
      cardBack.style.height = cardHeight + 35 + "px";
      cardBack.style.width = cardWidth + "px";
    }
  };
  return (
    <div>
    <Header
        brand="VeRB"
        links={<HeaderLinks dropdownHoverColor="info" />}
        fixed
        color="transparent"
        changeColorOnScroll={{
          height: 100,
          color: "info"
        }}
      />
      <div
        className={classes.team + " " + classes.section}
        style={{ backgroundImage: `url(${bg7})` }}
      >
        <div className={classes.container}>
          <GridContainer>
            <GridItem
              xs={12}
              sm={8}
              md={8}
              className={
                classes.mlAuto + " " + classes.mrAuto + " " + classes.textCenter
              }
            >
              <h2 className={classes.title}>Audience Connect</h2>
              <h5 className={classes.descriptionWhite}>
                Search for registered users who want to be notified or introduced to new products.  Connect with them to send them notifications when new reviews and products are updated.
              </h5>
            </GridItem>
          </GridContainer>
          <GridContainer>
            <GridItem xs={12} sm={3} md={3}>
              <Card profile>
                <CardAvatar profile>
                  <a href="#pablo" onClick={e => e.preventDefault()}>
                    <img src={cardProfile1Square} alt="..." />
                  </a>
                </CardAvatar>
                <CardBody>
                  <h4 className={classes.cardTitle}>Alec Thompson</h4>
                  <Muted>
                    <h6 className={classes.cardCategory}>CEO / CO-FOUNDER</h6>
                  </Muted>
                  <p className={classes.description}>
                    Don{"'"}t be scared of the truth because we need to restart
                    the human foundation in truth And I love you like Kanye
                    loves Kanye I love Rick Owens’ bed design but the back is...
                  </p>
                </CardBody>
                <CardFooter profile className={classes.justifyContent}>
                  <Button justIcon round color="linkedin">
                    <i className="fab fa-linkedin-in" />
                  </Button>
                  <Button justIcon round color="twitter">
                    <i className="fab fa-twitter" />
                  </Button>
                  <Button justIcon round color="dribbble">
                    <i className="fab fa-dribbble" />
                  </Button>
                </CardFooter>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={3} md={3}>
              <Card profile>
                <CardAvatar profile>
                  <a href="#pablo" onClick={e => e.preventDefault()}>
                    <img src={cardProfile2Square} alt="..." />
                  </a>
                </CardAvatar>
                <CardBody>
                  <h4 className={classes.cardTitle}>George West</h4>
                  <Muted>
                    <h6 className={classes.cardCategory}>BACKEND HACKER</h6>
                  </Muted>
                  <p className={classes.description}>
                    Don{"'"}t be scared of the truth because we need to restart
                    the human foundation in truth And I love you like Kanye
                    loves Kanye I love Rick Owens’ bed design but the back is...
                  </p>
                </CardBody>
                <CardFooter profile className={classes.justifyContent}>
                  <Button justIcon round color="dribbble">
                    <i className="fab fa-dribbble" />
                  </Button>
                  <Button justIcon round color="twitter">
                    <i className="fab fa-twitter" />
                  </Button>
                </CardFooter>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={3} md={3}>
              <Card profile>
                <CardAvatar profile>
                  <a href="#pablo" onClick={e => e.preventDefault()}>
                    <img src={cardProfile4Square} alt="..." />
                  </a>
                </CardAvatar>
                <CardBody>
                  <h4 className={classes.cardTitle}>Gina Andrew</h4>
                  <Muted>
                    <h6 className={classes.cardCategory}>WEB DESIGNER</h6>
                  </Muted>
                  <p className={classes.description}>
                    Don{"'"}t be scared of the truth because we need to restart
                    the human foundation in truth And I love you like Kanye
                    loves Kanye I love Rick Owens’ bed design but the back is...
                  </p>
                </CardBody>
                <CardFooter profile className={classes.justifyContent}>
                  <Button justIcon round color="dribbble">
                    <i className="fab fa-dribbble" />
                  </Button>
                  <Button justIcon round color="twitter">
                    <i className="fab fa-twitter" />
                  </Button>
                  <Button justIcon round color="pinterest">
                    <i className="fab fa-pinterest" />
                  </Button>
                </CardFooter>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={3} md={3}>
                <div className={card_classes.rotatingCardContainer +" " + card_classes.manualRotate +" " + activeRotate1 }>
                    <Card className={card_classes.cardRotate} profile plain>
                        <div className={card_classes.front}>
                            <CardBody className={card_classes.cardBodyRotate} plain>
                                <CardAvatar profile plain>
                                    <img src={marc} alt="..." />
                                </CardAvatar>
                        <h4 className={classes.cardTitle}>Gina Andrew</h4>
                          <Muted>
                            <h6 className={classes.cardCategory}>WEB DESIGNER</h6>
                          </Muted>
                          <p className={classes.description}>
                            Don{"'"}t be scared of the truth because we need to restart
                            the human foundation in truth And I love you like Kanye
                            loves Kanye I love Rick Owens’ bed design but the back is...
                          </p>
                        <div className={card_classes.textCenter}>
                          <Button
                            round
                            color="success"
                            onClick={() =>
                              setActiveRotate1(card_classes.activateRotate)
                            }
                          >
                            <Refresh /> Rotate
                          </Button>
                        </div>
                      </CardBody>
                    </div>
                    <div className={card_classes.back}>
                      <CardBody className={card_classes.cardBodyRotate} plain>
                        <h5 className={card_classes.cardTitle}>Do more...</h5>
                        <p className={card_classes.cardDescription}>
                          You can read this article or share it with your
                          friends and family on different networks...
                        </p>
                        <div className={card_classes.textCenter}>
                          <Button round color="rose">
                            <Subject /> Read
                          </Button>
                        </div>
                        <br />
                        <Button link onClick={() => setActiveRotate1("")}>
                          <Refresh /> Back...
                        </Button>
                      </CardBody>
                    </div>
                  </Card>
                </div>
            </GridItem>
          </GridContainer>
        </div>
      </div>
      
    </div>
  );
}
