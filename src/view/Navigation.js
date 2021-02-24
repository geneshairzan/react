import React from "react";
import { Link } from "react-router-dom";
import LanguageSelect from "component/langSelect/index";

import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Fade from "@material-ui/core/Fade";

export default function AppNavigation2(props) {
  return (
    <div className="app_nav">
      <div className="navGroup">
        <Link to="/home">
          <div className="nav_menu">Home</div>
        </Link>
        <Link to="/dashboard">
          <div className="nav_menu">Dashboard</div>
        </Link>
        <Link to="/material-ui">
          <div className="nav_menu">Material UI</div>
        </Link>

        <Link to="/Smartfren">
          <div className="nav_menu">Smartfren</div>
        </Link>
      </div>

      <div className="langSelect">
        <LanguageSelect />
      </div>
    </div>
  );
}

export function AppNavigation(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="app_nav">
      <div className="navGroup">
        <Link to="/home">
          <div className="nav_menu">Home</div>
        </Link>
        <Link to="/dashboard">
          <div className="nav_menu">Dashboard</div>
        </Link>
        {/* <Link to="/profil">
          <div className="nav_menu">Profile</div>
        </Link> */}
        <div>
          <div
            aria-controls="fade-menu"
            aria-haspopup="true"
            onClick={handleClick}
            className="nav_menu"
          >
            Ex. Page
          </div>
          <Menu
            id="fade-menu"
            anchorEl={anchorEl}
            keepMounted
            open={open}
            onClose={handleClose}
            TransitionComponent={Fade}
          >
            <MenuItem onClick={handleClose}>Profile</MenuItem>
            <MenuItem onClick={handleClose}>My account</MenuItem>
            <MenuItem onClick={handleClose}>Logout</MenuItem>
          </Menu>
        </div>
        <Link to="/pricing">
          <div className="nav_menu">Pricing</div>
        </Link>
        <Link to="/bookmark">
          <div className="nav_menu">Bookmark</div>
        </Link>
        <Link to="/imgcrop">
          <div className="nav_menu">Img Crop</div>
        </Link>
        <Link to="/datatables">
          <div className="nav_menu">datatables</div>
        </Link>
        <Link to="/material-ui">
          <div className="nav_menu">Material UI</div>
        </Link>
      </div>

      <div className="langSelect">
        <LanguageSelect />
      </div>
    </div>
  );
}
