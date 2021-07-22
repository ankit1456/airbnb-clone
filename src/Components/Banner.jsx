import React, { useState } from "react";
import "../CSS/banner.css";
import { Button } from "@material-ui/core";
import Search from "./Search";

const Banner = () => {
  const [showSearch, setShowSearch] = useState(false);
  return (
    <div className='banner'>
      <div className='banner__search'>
        <Button
          style={{ fontSize: 14 }}
          onClick={() => setShowSearch(!showSearch)}
          variant='outlined'
          className='banner__searchButton'
        >
          {showSearch ? "Hide" : "Search Dates"}{" "}
        </Button>
        {showSearch && <Search />}
      </div>
      <div className='banner__info'>
        <h1>get out stretch your imagination </h1>
        <h5>
          plan a different kind of getaway to uncover the hidden gems near you
        </h5>
        <Button style={{ fontSize: 17 }} variant='outlined'>
          Explore Nearby{" "}
        </Button>
      </div>
    </div>
  );
};

export default Banner;
