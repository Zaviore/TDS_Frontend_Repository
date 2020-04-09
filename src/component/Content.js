import React, { Component } from "react";
import Foto from "../images/foto.jpg";
import Icons from "../images/github.png";
import {
  Drawer,
  AppBar,
  Toolbar,
  CssBaseline,
  List,
  Divider,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
  Button,
} from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import CardRepo from "../component/cardRepo";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import axios from "axios";

const drawerWidth = 240;
const styles = (theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerContainer: {
    overflow: "auto",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
});

class Drawers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      data2: [],
      data3: [],
      search: "Zaviore",
    };
  }

  handlechange = (e) => {
    e.preventDefault();
    this.setState({
      search: e.target.value,
    });
  };
  getRepo = (e) => {
    e.preventDefault();
    axios({
      method: "get",
      url: `https://api.github.com/users/${this.state.search}/repos`,
      responseType: "json",
    }).then((response) => {
      this.setState({ data: response.data });
    });

    axios({
      method: "get",
      url: `https://api.github.com/users/${this.state.search}/followers`,
      responseType: "json",
    }).then((response) => {
      this.setState({ data1: response.data });
    });

    axios({
      method: "get",
      url: `https://api.github.com/users/${this.state.search}/following`,
      responseType: "json",
    }).then((response) => {
      this.setState({ data2: response.data });
    });
    this.setState({ search: "" });
  };

  render() {
    const { data, data1, data2 } = this.state;
    const { classes } = this.props;
    console.log(data1, "asss");
    const owner = this.state.data[0];
    return (
      <div className={classes.root}>
        <CssBaseline />
        <AppBar
          position="fixed"
          className={classes.appBar}
          style={{ backgroundColor: "black" }}
        >
          <Toolbar>
            <img
              src={Icons}
              width="50px"
              height="50px"
              style={{ padding: "8px", marginRight: "10px" }}
            />
            <Typography variant="h6" noWrap>
              Repository API
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer
          className={classes.drawer}
          variant="permanent"
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <Toolbar />
          <div
            className={classes.drawerContainer}
            style={{ textAlign: "center" }}
          >
            <img
              src={owner && owner.owner.avatar_url}
              width="200px"
              height="200px"
              style={{ marginLeft: "0px", marginTop: "10px" }}
            />
            <b> {owner && owner.owner.login} </b>
            <p>
              Follower: {data1 && data1.length} Following :{" "}
              {data2 && data2.length}{" "}
            </p>
            <List>
              {["All Repository"].map((text, index) => (
                <ListItem button key={text}>
                  <ListItemIcon>
                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItem>
              ))}
            </List>
            <Divider />
          </div>
        </Drawer>
        <main className={classes.content}>
          <Toolbar />
          <Typography variant="h5" paragraph>
            List Repository
          </Typography>
          <form>
            <input
              type="text"
              placeholder="Search"
              onChange={this.handlechange}
              value={this.state.search}
              style={{ marginBottom: "10px", padding: "8px", width: "400px" }}
            />
            <Button
              variant=""
              disableElevation
              onClick={this.getRepo}
              style={{ color: "white", backgroundColor: "#4caf50" }}
            >
              Search
            </Button>
          </form>
          <CardRepo data={data} />
        </main>
      </div>
    );
  }
}
export default withStyles(styles)(Drawers);
