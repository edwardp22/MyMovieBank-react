import React from "react";

import MyMovieDBIcon from "../../images/MyMovieDBIcon.png";

export default function Header() {
  return (
    <header>
      <img src={MyMovieDBIcon} alt="My Movie DB Icon" />
      <h1>My Movie Bank</h1>
    </header>
  );
}
