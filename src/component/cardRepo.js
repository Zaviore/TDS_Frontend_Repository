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
    const { data } = this.props;
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
        {data
          ? data.map((value, index) => {
              return (
                <Card className={classes.root} key={index}>
                  <CardContent>
                    <Typography
                      className={classes.title}
                      color="textSecondary"
                      style={{ fontWeight: "bold" }}
                    >
                      <a href={value.html_url}> {value.name}</a>
                    </Typography>

                    <Typography className={classes.pos} color="textSecondary">
                      {value.language}
                    </Typography>
                    <Typography style={{ color: "grey" }}>
                      <Button>
                        <Star style={{ width: "25px", color: "yellow" }} />
                        {value.stargazers_count}
                      </Button>
                      <Button>
                        <Share color="disabled" style={{ width: "25px" }} />{" "}
                        {value.forks_count}
                      </Button>{" "}
                      | {moment(value.updated_at, "YYYYMMDD").fromNow()}
                    </Typography>
                  </CardContent>
                </Card>
              );
            })
          : null}
        {(data.lenght = 0 ? <Pagination count={10} shape="rounded" /> : "")}
      </>
    );
  }
}
export default withStyles(styles)(CardRepo);
