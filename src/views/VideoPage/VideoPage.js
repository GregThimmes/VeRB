/*eslint-disable*/
import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import ShoppingCart from "@material-ui/icons/ShoppingCart";
import LocalShipping from "@material-ui/icons/LocalShipping";
import VerifiedUser from "@material-ui/icons/VerifiedUser";
import Favorite from "@material-ui/icons/Favorite";
// core components
import Header from "components/Header/Header.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Parallax from "components/Parallax/Parallax.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Footer from "components/Footer/Footer.js";
import Button from "components/CustomButtons/Button.js";
import Accordion from "components/Accordion/Accordion.js";
import InfoArea from "components/InfoArea/InfoArea.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import Tooltip from "@material-ui/core/Tooltip";

import productStyle from "assets/jss/material-kit-pro-react/views/productStyle.js";

// images

import nike2019 from "assets/img/examples/nike2019.jpg";
import rampage from "assets/img/examples/rampage.jpg";

import CommentsPage from "views/CommentsPage/CommentsPage.js";



const useStyles = makeStyles(productStyle);

export default function VideoPage() {
  const classes = useStyles();
  return (
    <div className={classes.productPage}>
      <Header
        brand="VeRB"
        links={<HeaderLinks dropdownHoverColor="rose" />}
        fixed
        color="transparent"
        changeColorOnScroll={{
          height: 100,
          color: "info"
        }}
      />
      <Parallax
        image={require("assets/img/bg7.jpg")}
        filter="info"
        className={classes.pageHeader}
      >
      </Parallax>
      <div className={classNames(classes.section, classes.sectionGray)}>
        <div className={classes.container}>
          <div className={classNames(classes.main, classes.mainRaised)}>
            <GridContainer>
              <GridItem md={6} sm={6}>
                <iframe width="100%" height="315" src="https://www.youtube.com/embed/yABT3VXuWU0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
               
                <GridContainer>
                  <GridItem md={4} sm={4}>
                    <h3>Sales</h3>
                    <h5>421</h5>
              
                   </GridItem>

                   <GridItem md={4} sm={4}>
                    <h3>Likes</h3>
                    <h5>1,323</h5>
                   </GridItem>

                   <GridItem md={4} sm={4}>
                    <h3>Comments</h3>
                    <h5>32</h5>
                   </GridItem>
                  </GridContainer>


                
              </GridItem>
              <GridItem md={6} sm={6}>
                <h2 className={classes.title}>Arcade 1Up Full Review Street Fighter Edition - Is it Worth $300?</h2>
                <h3 className={classes.mainPrice}>$300</h3>
                <p>
                          Eres{"'"} daring {"'"}Grigri Fortune{"'"} swimsuit has
                          the fit and coverage of a bikini in a one-piece
                          silhouette. This fuchsia style is crafted from the
                          label{"'"}s sculpting peau douce fabric and has
                          flattering cutouts through the torso and back. Wear
                          yours with mirrored sunglasses on vacation.
                        </p>
                <GridContainer className={classes.pullRight}>
                  <Button round color="danger">
                    Add to Cart &nbsp; <ShoppingCart />
                  </Button>
                </GridContainer>
              </GridItem>
            </GridContainer>

          </div>
          <div className={classNames(classes.features)}>

            <GridContainer>
              <GridItem md={3} sm={3}>
              <h2>Related </h2>
                <Card product>
                  <CardHeader image>
                    <a href="#pablo">
                      <img src={nike2019} alt="cardProduct" />
                    </a>
                  </CardHeader>
                  <CardBody>
                    <h6
                      className={classNames(
                        classes.cardCategory,
                        classes.textRose
                      )}
                    >
                      Footware
                    </h6>
                    <h4 className={classes.cardTitle}>Nike Downshifter</h4>
                    <div className={classes.cardDescription}>
                      The best nike running shoe of 2019!
                    </div>
                  </CardBody>
                  <CardFooter className={classes.justifyContentBetween}>
                    <div className={classes.price}>
                      <h4>$219</h4>
                    </div>
                    <div className={classes.stats}>
                      <Tooltip
                        id="tooltip-top"
                        title="Save to Wishlist"
                        placement="top"
                        classes={{ tooltip: classes.tooltip }}
                      >
                        <Button justIcon color="rose" simple>
                          <Favorite />
                        </Button>
                      </Tooltip>
                    </div>
                  </CardFooter>
                </Card>
              </GridItem>
              <GridItem md={9} sm={9}>
                <h2>Comments (32)</h2>
                <CommentsPage />
              </GridItem>
              
            </GridContainer>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}
