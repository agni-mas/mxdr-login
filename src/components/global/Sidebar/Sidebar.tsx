import React from "react";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Drawer from '@mui/material/Drawer';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { Link } from "react-router-dom";
import GridViewRoundedIcon from '@mui/icons-material/GridViewRounded';
import ListItemButton from "@mui/material/ListItemButton";
import accLogoWhite from "../../../accLogoWhite.svg"


const styles = {
  main: {
    width: 250,
    flexShrink: 0,
    '& .MuiDrawer-paper': {
        width: 250,
        boxSizing: 'border-box',
        backgroundColor: '#460073',
        paddingTop: 2,
    },
  },
  logo: { 
    width: 120,
    height: 32,
    marginBottom: 30,
    marginLeft: 15,
  },
}

const Sidebar = () => {
    const itemslist = [
      { text: "Client Admin", icon: <GridViewRoundedIcon />, onclick: "/AdminDash" },
      {
        text: "Client Analyst",
        icon: <GridViewRoundedIcon />,
        onclick: "/AnalystDash"
      },
      {
        text: "Network Engineer",
        icon: <GridViewRoundedIcon />,
        onclick: "/EngineerDash"
      }
    ];
    
    return (
      <Drawer 
        sx={styles.main}
        variant="permanent"
      >
        <img 
          src={accLogoWhite}
          alt="Accenture Logo"
          style={styles.logo}
        />
        <List>
          {itemslist.map((item, index) => {
            const { text, icon, onclick } = item;
            return (
              <ListItem key={text} disablePadding>
                <ListItemButton
                    component={Link}
                    to={onclick}
                    style={{
                      height: 30,
                      marginBottom: 10,
                  }}
                >
                    <ListItemIcon style={{ color: 'white' }}>{icon}</ListItemIcon>
                    <ListItemText style={{ color: 'white' }} primary={text} />
                </ListItemButton>
              </ListItem>
            );
          })}
        </List>
      </Drawer>
    );
  };
  export default Sidebar;