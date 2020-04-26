import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <nav className="navbar justify-content-center">
      <li className="nav-item nav-link">
        <Link to="/react-twitch-viewer/games">Top Games</Link>
      </li>
      <li className="nav-item nav-link">
        <Link activeOnlyWhenExact to="/react-twitch-viewer/streams">Top Live Streams</Link>
      </li>
    </nav>
  );
}

export default Header;
