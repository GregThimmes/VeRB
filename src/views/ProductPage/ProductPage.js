/*eslint-disable*/
import React from "react";

import { HashRouter,Route, Switch } from "react-router-dom";

// nodejs library that concatenates classes
import classNames from "classnames";
// react component used to create nice image meadia player
import ImageGallery from "react-image-gallery";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
// @material-ui/icons
import ShoppingCart from "@material-ui/icons/ShoppingCart";
import LocalShipping from "@material-ui/icons/LocalShipping";
import VerifiedUser from "@material-ui/icons/VerifiedUser";
import Favorite from "@material-ui/icons/Favorite";

import Comments from "@material-ui/icons/Comment";
import Store from "@material-ui/icons/Store";
import Reviews from "@material-ui/icons/RateReview";
import Palette from "@material-ui/icons/Palette";
import People from "@material-ui/icons/People";
import Add from "@material-ui/icons/Add";
import ThumbUp from "@material-ui/icons/ThumbUp";
import Donate from "@material-ui/icons/Money";
import Message from "@material-ui/icons/Message";



// core components
import Header from "components/Header/Header.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Parallax from "components/Parallax/Parallax.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import NavPills from "components/NavPills/NavPills.js";

import Footer from "components/Footer/Footer.js";
import Button from "components/CustomButtons/Button.js";
import Accordion from "components/Accordion/Accordion.js";
import InfoArea from "components/InfoArea/InfoArea.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import Tooltip from "@material-ui/core/Tooltip";
import Badge from "components/Badge/Badge.js";

import CustomTabs from "components/CustomTabs/CustomTabs.js";
import Movie from "@material-ui/icons/Movie";
import Photo from "@material-ui/icons/Photo";


import productStyle from "assets/jss/material-kit-pro-react/views/productStyle.js";

// images
import cardProduct1 from "assets/img/examples/card-product1.jpg";
import cardProduct3 from "assets/img/examples/card-product3.jpg";
import cardProduct4 from "assets/img/examples/card-product4.jpg";
import cardProduct2 from "assets/img/examples/card-product2.jpg";
import product1 from "assets/img/examples/product1.jpg";
import product2 from "assets/img/examples/product2.jpg";
import product3 from "assets/img/examples/product3.jpg";
import product4 from "assets/img/examples/product4.jpg";

import CommentsPage from "views/CommentsPage/CommentsPage.js";



const useStyles = makeStyles(productStyle);

export default function ProductPage() {
  const [colorSelect, setColorSelect] = React.useState("0");
  const [sizeSelect, setSizeSelect] = React.useState("0");
  const classes = useStyles();
  const images = [
    {
      original: product3,
      thumbnail: product3
    },
    {
      original: product4,
      thumbnail: product4
    },
    {
      original: product1,
      thumbnail: product1
    },
    {
      original: product2,
      thumbnail: product2
    }
  ];
  return (
    <div className={classes.productPage}>
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
                <CustomTabs
                headerColor="info"
        tabs={[
          {
            tabName: "Video Review",
            tabIcon: Movie,
            tabContent: (
              <iframe width="100%" height="315" src="https://www.youtube.com/embed/1erCpiXXET0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            )
          },
          {
            tabName: "Product Photos",
            tabIcon: Photo,
            tabContent: (
              
                <ImageGallery
                  showFullscreenButton={false}
                  showPlayButton={false}
                  startIndex={3}
                  items={images}
                />
            )
          }
        ]}
      />

              </GridItem>
              <GridItem md={6} sm={6}>
              
                <h4><a href="/VeRB/#/profile/2">MyBalmain</a> <i className="material-icons md-48 orange600">star</i><i className="material-icons md-48 orange600">star</i><i className="material-icons md-48 orange600">star</i> (107)</h4>
               
                <h2 className={classes.title}>Becky Silk Blazer</h2>
                <h3 className={classes.mainPrice}>$335</h3>
                <Accordion
                  active={0}
                  activeColor="info"
                  collapses={[
                    {
                      title: "Description",
                      content: (
                        <p>
                          Eres{"'"} daring {"'"}Grigri Fortune{"'"} swimsuit has
                          the fit and coverage of a bikini in a one-piece
                          silhouette. This fuchsia style is crafted from the
                          label{"'"}s sculpting peau douce fabric and has
                          flattering cutouts through the torso and back. Wear
                          yours with mirrored sunglasses on vacation.
                        </p>
                      )
                    },
                    {
                      title: "Designer Information",
                      content: (
                        <p>
                          An infusion of West Coast cool and New York attitude,
                          Rebecca Minkoff is synonymous with It girl style.
                          Minkoff burst on the fashion scene with her
                          best-selling {"'"}Morning After Bag{"'"} and later
                          expanded her offering with the Rebecca Minkoff
                          Collection - a range of luxe city staples with a {'"'}
                          downtown romantic{'"'} theme.
                        </p>
                      )
                    },
                    {
                      title: "Details and Care",
                      content: (
                        <ul>
                          <li>Storm and midnight-blue stretch cotton-blend</li>
                          <li>
                            Notch lapels, functioning buttoned cuffs, two front
                            flap pockets, single vent, internal pocket
                          </li>
                          <li>Two button fastening</li>
                          <li>84% cotton, 14% nylon, 2% elastane</li>
                          <li>Dry clean</li>
                        </ul>
                      )
                    }
                  ]}
                />
                <GridContainer className={classes.pickSize}>
                  <GridItem md={6} sm={6}>
                    <label>Select color</label>
                    <FormControl
                      fullWidth
                      className={classes.selectFormControl}
                    >
                      <Select
                        MenuProps={{
                          className: classes.selectMenu
                        }}
                        classes={{
                          select: classes.select
                        }}
                        value={colorSelect}
                        onChange={event => setColorSelect(event.target.value)}
                        inputProps={{
                          name: "colorSelect",
                          id: "color-select"
                        }}
                      >
                        <MenuItem
                          classes={{
                            root: classes.selectMenuItem,
                            selected: classes.selectMenuItemSelected
                          }}
                          value="0"
                        >
                          Rose
                        </MenuItem>
                        <MenuItem
                          classes={{
                            root: classes.selectMenuItem,
                            selected: classes.selectMenuItemSelected
                          }}
                          value="1"
                        >
                          Gray
                        </MenuItem>
                        <MenuItem
                          classes={{
                            root: classes.selectMenuItem,
                            selected: classes.selectMenuItemSelected
                          }}
                          value="2"
                        >
                          White
                        </MenuItem>
                      </Select>
                    </FormControl>
                  </GridItem>
                  <GridItem md={6} sm={6}>
                    <label>Select size</label>
                    <FormControl
                      fullWidth
                      className={classes.selectFormControl}
                    >
                      <Select
                        MenuProps={{
                          className: classes.selectMenu
                        }}
                        classes={{
                          select: classes.select
                        }}
                        value={sizeSelect}
                        onChange={event => setSizeSelect(event.target.value)}
                        inputProps={{
                          name: "sizeSelect",
                          id: "size-select"
                        }}
                      >
                        <MenuItem
                          classes={{
                            root: classes.selectMenuItem,
                            selected: classes.selectMenuItemSelected
                          }}
                          value="0"
                        >
                          Small
                        </MenuItem>
                        <MenuItem
                          classes={{
                            root: classes.selectMenuItem,
                            selected: classes.selectMenuItemSelected
                          }}
                          value="1"
                        >
                          Medium
                        </MenuItem>
                        <MenuItem
                          classes={{
                            root: classes.selectMenuItem,
                            selected: classes.selectMenuItemSelected
                          }}
                          value="2"
                        >
                          Large
                        </MenuItem>
                      </Select>
                    </FormControl>
                  </GridItem>
                </GridContainer>
                <GridContainer className={classes.pullRight}>
                  <Button round color="info">
                    Add to Cart &nbsp; <ShoppingCart />
                  </Button>
                </GridContainer>
              </GridItem>
            </GridContainer>
          </div>
          
          <div className={classes.profileTabs}>

            <NavPills
              alignCenter
              color="info"
              tabs={[
                {
                  tabButton: "Comments",
                  tabIcon: Comments,
                  tabContent: (
                    <CommentsPage />
                  )
                },
                {
                  tabButton: "Reviews",
                  tabIcon: Reviews,
                  tabContent: (
                    <div></div>
                  )
                },
                {
                  tabButton: "More From Seller",
                  tabIcon: Store,
                  tabContent: (
                    <div className={classes.relatedProducts}>
          
            <GridContainer>
              <GridItem sm={6} md={3}>
                <Card product>
                  <CardHeader image>
                    <a href="#pablo">
                      <img src={cardProduct1} alt="cardProduct" />
                    </a>
                  </CardHeader>
                  <CardBody>
                    <h6
                      className={classNames(
                        classes.cardCategory,
                        classes.textRose
                      )}
                    >
                      Trending
                    </h6>
                    <h4 className={classes.cardTitle}>Dolce & Gabbana</h4>
                    <div className={classes.cardDescription}>
                      Dolce & Gabbana{"'"}s {"'"}Greta{"'"} tote has been
                      crafted in Italy from hard-wearing red textured-leather.
                    </div>
                  </CardBody>
                  <CardFooter className={classes.justifyContentBetween}>
                    <div className={classes.price}>
                      <h4>$1,459</h4>
                    </div>
                    <div className={classes.stats}>
                      <Tooltip
                        id="tooltip-top"
                        title="Save to Wishlist"
                        placement="top"
                        classes={{ tooltip: classes.tooltip }}
                      >
                        <Button justIcon color="info" simple>
                          <Favorite />
                        </Button>
                      </Tooltip>
                    </div>
                  </CardFooter>
                </Card>
              </GridItem>
              <GridItem sm={6} md={3}>
                <Card product>
                  <CardHeader image>
                    <a href="#pablo">
                      <img src={cardProduct3} alt="cardProduct3" />
                    </a>
                  </CardHeader>
                  <CardBody>
                    <h6 className={classes.cardCategory}>Popular</h6>
                    <h4 className={classes.cardTitle}>Balmain</h4>
                    <div className={classes.cardDescription}>
                      Balmain{"'"}s mid-rise skinny jeans are cut with stretch
                      to ensure they retain their second-skin fit but move
                      comfortably.
                    </div>
                  </CardBody>
                  <CardFooter className={classes.justifyContentBetween}>
                    <div className={classes.price}>
                      <h4>$459</h4>
                    </div>
                    <div className={classes.stats}>
                      <Tooltip
                        id="tooltip-top"
                        title="Save to Wishlist"
                        placement="top"
                        classes={{ tooltip: classes.tooltip }}
                      >
                        <Button justIcon link>
                          <Favorite />
                        </Button>
                      </Tooltip>
                    </div>
                  </CardFooter>
                </Card>
              </GridItem>
              <GridItem sm={6} md={3}>
                <Card product>
                  <CardHeader image>
                    <a href="#pablo">
                      <img src={cardProduct4} alt="cardProduct4" />
                    </a>
                  </CardHeader>
                  <CardBody>
                    <h6 className={classes.cardCategory}>Popular</h6>
                    <h4 className={classes.cardTitle}>Balenciaga</h4>
                    <div className={classes.cardDescription}>
                      Balenciaga{"'"}s black textured-leather wallet is finished
                      with the label{"'"}s iconic {"'"}Giant{"'"} studs. This is
                      where you can...
                    </div>
                  </CardBody>
                  <CardFooter className={classes.justifyContentBetween}>
                    <div className={classes.price}>
                      <h4>$590</h4>
                    </div>
                    <div className={classes.stats}>
                      <Tooltip
                        id="tooltip-top"
                        title="Save to Wishlist"
                        placement="top"
                        classes={{ tooltip: classes.tooltip }}
                      >
                        <Button justIcon color="info" simple>
                          <Favorite />
                        </Button>
                      </Tooltip>
                    </div>
                  </CardFooter>
                </Card>
              </GridItem>
              <GridItem sm={6} md={3}>
                <Card product>
                  <CardHeader image>
                    <a href="#pablo">
                      <img src={cardProduct2} alt="cardProduct2" />
                    </a>
                  </CardHeader>
                  <CardBody>
                    <h6
                      className={classNames(
                        classes.cardCategory,
                        classes.textRose
                      )}
                    >
                      Trending
                    </h6>
                    <h4 className={classes.cardTitle}>Dolce & Gabbana</h4>
                    <div className={classes.cardDescription}>
                      Dolce & Gabbana{"'"}s {"'"}Greta{"'"} tote has been
                      crafted in Italy from hard-wearing red textured-leather.
                    </div>
                  </CardBody>
                  <CardFooter className={classes.justifyContentBetween}>
                    <div className={classes.price}>
                      <h4>$1,459</h4>
                    </div>
                    <div className={classes.stats}>
                      <Tooltip
                        id="tooltip-top"
                        title="Save to Wishlist"
                        placement="top"
                        classes={{ tooltip: classes.tooltip }}
                      >
                        <Button justIcon link>
                          <Favorite />
                        </Button>
                      </Tooltip>
                    </div>
                  </CardFooter>
                </Card>
              </GridItem>
            </GridContainer>
          </div>
                  )
                }
              ]}
            />
            </div>
        </div>
      </div>
    </div>
  );
}
