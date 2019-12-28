import React from "react";
import ReactDOM from "react-dom";
//import { createBrowserHistory } from "history";
import { HashRouter,Route, Switch } from "react-router-dom";

import "assets/scss/material-kit-pro-react.scss?v=1.8.0";

// pages for this product
import ProfilePage from "views/ProfilePage/ProfilePage.js";
import VideoPage from "views/VideoPage/VideoPage.js";
import ProductPage from "views/ProductPage/ProductPage.js";
import LoginPage from "views/LoginPage/LoginPage.js";
import SignupPage from "views/SignupPage/SignupPage.js";
import ErrorPage from "views/ErrorPage/ErrorPage.js";
import LandingPage from "views/LandingPage/LandingPage.js";

ReactDOM.render(
  <HashRouter basename='/'>
    <Switch>
      <Route exact path="/profile/:id" component={ProfilePage} />
      <Route exact path="/video-page" component={VideoPage} />
      <Route exact path="/product-page" component={ProductPage} />
      <Route exact path="/login" component={LoginPage} />
      <Route exact path="/signup" component={SignupPage} />
      <Route exact path="/error-page" component={ErrorPage} />
      <Route exact path="/" component={LandingPage} />
    </Switch>
  </HashRouter>,
  document.getElementById("root")
);
