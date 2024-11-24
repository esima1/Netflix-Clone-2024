import React from "react";
import "./header.css";
import NetflixLogo from "../../Assets/Images/logo.png";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const Header = () => {
  return (
    <div className="header_outer_container">
      <div className="header_container">
        <div className="header_left">
          <ul className="header_list_left">
            <li>
              <img src={NetflixLogo} alt="Netflix Logo" wdth={100} />
            </li>
            <li>Home</li>
            <li>TVShows</li>
            <li>Movies</li>
            <li>New & Popular</li>
            <li>MyList</li>
            <li>Browse by Languages</li>
          </ul>
        </div>
        <div className="header_right">
          <ul className="header_list_right">
            <li>
              <SearchIcon />
            </li>
            <li>
              <AccountBoxIcon />
            </li>
            <li>
              <NotificationsNoneIcon />
            </li>
            <li>
              <ArrowDropDownIcon />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
