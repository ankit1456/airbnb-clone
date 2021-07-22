import React from "react";
import "../CSS/header.css";
import SearchIcon from "@material-ui/icons/Search";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import LanguageIcon from "@material-ui/icons/Language";
import { Avatar } from "@material-ui/core";
const Header = () => {
  return (
    <div className='header'>
      <img
        className='header__icon'
        src='https://i.pinimg.com/originals/3c/bf/be/3cbfbe148597341fa56f2f87ade90956.png'
        alt=''
      />

      <div className='header__center'>
        <input type='text' placeholder='Search' />
        <SearchIcon />
      </div>

      <div className='header__right'>
        <p>Become a host</p>
        <LanguageIcon style={{ fontSize: 20 }} />
        <ExpandMoreIcon style={{ fontSize: 15 }} />
        <Avatar
          className='header__avatar'
          src='https://avatars.githubusercontent.com/u/62655089?v=4'
        />
      </div>
    </div>
  );
};

export default Header;
