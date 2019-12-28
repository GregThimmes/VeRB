import React from "react";
import {Link} from "react-router-dom";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Tooltip from "@material-ui/core/Tooltip";
// @material-ui/icons
import Reply from "@material-ui/icons/Reply";
import Favorite from "@material-ui/icons/Favorite";
// core components
import Media from "components/Media/Media.js";
import Button from "components/CustomButtons/Button.js";

import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";


import profile4 from "assets/img/faces/card-profile4-square.jpg";

import sectionCommentsStyle from "assets/jss/material-kit-pro-react/views/blogPostSections/sectionCommentsStyle.js";

const useStyles = makeStyles(sectionCommentsStyle);

export default function CommentsPage() {
  const classes = useStyles();
  return (
    <>
    <Card>
        <CardBody>
            <Media
            avatar={profile4}
            title={
              <span>
                Tina Andrew <small>· 7 minutes ago</small>
              </span>
            }
            body={
              <p className={classes.color555}>
                Chance too good. God level bars. I'm so proud of
                @LifeOfDesiigner #1 song in the country. Panda! Don't be
                scared of the truth because we need to restart the human
                foundation in truth I stand with the most humility. We are so
                blessed!
              </p>
            }
            footer={
              <div>
                <Tooltip
                  id="tooltip-tina"
                  title="Reply to comment"
                  placement="top"
                  classes={{ tooltip: classes.tooltip }}
                >
                  <Button
                    color="primary"
                    simple
                    className={classes.footerButtons}
                  >
                    <Reply className={classes.footerIcons} /> Reply
                  </Button>
                </Tooltip>

                <Button
                  color="danger"
                  simple
                  className={classes.footerButtons}
                >
                  <Favorite className={classes.footerIcons} /> 243
                </Button>
              </div>
            }
            />
        </CardBody>
    </Card>

    <Card>
        <CardBody>
            <Media
            avatar={profile4}
            title={
              <span>
                Tina Andrew <small>· 7 minutes ago</small>
              </span>
            }
            body={
              <p className={classes.color555}>
                Chance too good. God level bars. I'm so proud of
                @LifeOfDesiigner #1 song in the country. Panda! Don't be
                scared of the truth because we need to restart the human
                foundation in truth I stand with the most humility. We are so
                blessed!
              </p>
            }
            footer={
              <div>
                <Tooltip
                  id="tooltip-tina"
                  title="Reply to comment"
                  placement="top"
                  classes={{ tooltip: classes.tooltip }}
                >
                  <Button
                    color="primary"
                    simple
                    className={classes.footerButtons}
                  >
                    <Reply className={classes.footerIcons} /> Reply
                  </Button>
                </Tooltip>

                <Button
                  color="danger"
                  simple
                  className={classes.footerButtons}
                >
                  <Favorite className={classes.footerIcons} /> 243
                </Button>
              </div>
            }
            />
        </CardBody>
    </Card>

    <Card>
        <CardBody>
            <Media
            avatar={profile4}
            title={
              <span>
                Tina Andrew <small>· 7 minutes ago</small>
              </span>
            }
            body={
              <p className={classes.color555}>
                Chance too good. God level bars. I'm so proud of
                @LifeOfDesiigner #1 song in the country. Panda! Don't be
                scared of the truth because we need to restart the human
                foundation in truth I stand with the most humility. We are so
                blessed!
              </p>
            }
            footer={
              <div>
                <Tooltip
                  id="tooltip-tina"
                  title="Reply to comment"
                  placement="top"
                  classes={{ tooltip: classes.tooltip }}
                >
                  <Button
                    color="primary"
                    simple
                    className={classes.footerButtons}
                  >
                    <Reply className={classes.footerIcons} /> Reply
                  </Button>
                </Tooltip>

                <Button
                  color="danger"
                  simple
                  className={classes.footerButtons}
                >
                  <Favorite className={classes.footerIcons} /> 243
                </Button>
              </div>
            }
            />
        </CardBody>
    </Card>

    <Card>
        <CardBody>
            <Media
            avatar={profile4}
            title={
              <span>
                Tina Andrew <small>· 7 minutes ago</small>
              </span>
            }
            body={
              <p className={classes.color555}>
                Chance too good. God level bars. I'm so proud of
                @LifeOfDesiigner #1 song in the country. Panda! Don't be
                scared of the truth because we need to restart the human
                foundation in truth I stand with the most humility. We are so
                blessed!
              </p>
            }
            footer={
              <div>
                <Tooltip
                  id="tooltip-tina"
                  title="Reply to comment"
                  placement="top"
                  classes={{ tooltip: classes.tooltip }}
                >
                  <Button
                    color="primary"
                    simple
                    className={classes.footerButtons}
                  >
                    <Reply className={classes.footerIcons} /> Reply
                  </Button>
                </Tooltip>

                <Button
                  color="danger"
                  simple
                  className={classes.footerButtons}
                >
                  <Favorite className={classes.footerIcons} /> 243
                </Button>
              </div>
            }
            />
        </CardBody>
    </Card>

    <Card>
        <CardBody>
            <Media
            avatar={profile4}
            title={
              <span>
                Tina Andrew <small>· 7 minutes ago</small>
              </span>
            }
            body={
              <p className={classes.color555}>
                Chance too good. God level bars. I'm so proud of
                @LifeOfDesiigner #1 song in the country. Panda! Don't be
                scared of the truth because we need to restart the human
                foundation in truth I stand with the most humility. We are so
                blessed!
              </p>
            }
            footer={
              <div>
                <Tooltip
                  id="tooltip-tina"
                  title="Reply to comment"
                  placement="top"
                  classes={{ tooltip: classes.tooltip }}
                >
                  <Button
                    color="primary"
                    simple
                    className={classes.footerButtons}
                  >
                    <Reply className={classes.footerIcons} /> Reply
                  </Button>
                </Tooltip>

                <Button
                  color="danger"
                  simple
                  className={classes.footerButtons}
                >
                  <Favorite className={classes.footerIcons} /> 243
                </Button>
              </div>
            }
            />
        </CardBody>
    </Card>

    </>
  );
};