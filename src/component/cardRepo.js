import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";

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

    return <></>;
  }
}
export default withStyles(styles)(CardRepo);
