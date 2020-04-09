import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Star from "@material-ui/icons/Star";
import Share from "@material-ui/icons/Share";
import Pagination from "@material-ui/lab/Pagination";
import { CardContent, Card, Typography, Button } from "@material-ui/core";
import moment from "moment";

const styles = (theme) => ({
  root: {
    minWidth: 275,
    marginBottom: 10,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 17,
    color: "black",
  },
  pos: {
    marginTop: 30,
  },
});

class CardRepo extends Component {
  render() {
    const { classes } = this.props;

    return (
      <>
        <h3
          style={{
            borderBottom: "3px solid red",
            width: "100px",
            alignItems: "center",
          }}
        >
          Repository
        </h3>
        <Card className={classes.root}>
          <CardContent>
            <Typography
              className={classes.title}
              color="textSecondary"
              style={{ fontWeight: "bold" }}
            >
              Name Repository
            </Typography>

            <Typography className={classes.pos} color="textSecondary">
              language script
            </Typography>
            <Typography style={{ color: "grey" }}>
              <Button>
                <Star style={{ width: "25px", color: "yellow" }} />2
              </Button>
              <Button>
                <Share color="disabled" style={{ width: "25px" }} /> 1
              </Button>{" "}
              | 4 hours ago
            </Typography>
          </CardContent>
        </Card>

        <Card className={classes.root}>
          <CardContent>
            <Typography
              className={classes.title}
              color="textSecondary"
              style={{ fontWeight: "bold" }}
            >
              Name Repository
            </Typography>

            <Typography className={classes.pos} color="textSecondary">
              language script
            </Typography>
            <Typography style={{ color: "grey" }}>
              <Button>
                <Star style={{ width: "25px", color: "yellow" }} />2
              </Button>
              <Button>
                <Share color="disabled" style={{ width: "25px" }} /> 1
              </Button>{" "}
              | 4 hours ago
            </Typography>
          </CardContent>
        </Card>

        <Card className={classes.root}>
          <CardContent>
            <Typography
              className={classes.title}
              color="textSecondary"
              style={{ fontWeight: "bold" }}
            >
              Name Repository
            </Typography>

            <Typography className={classes.pos} color="textSecondary">
              language script
            </Typography>
            <Typography style={{ color: "grey" }}>
              <Button>
                <Star style={{ width: "25px", color: "yellow" }} />2
              </Button>
              <Button>
                <Share color="disabled" style={{ width: "25px" }} /> 1
              </Button>{" "}
              | 4 hours ago
            </Typography>
          </CardContent>
        </Card>

        <Pagination count={10} shape="rounded" />
      </>
    );
  }
}
export default withStyles(styles)(CardRepo);
