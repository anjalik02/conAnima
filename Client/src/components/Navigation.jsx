import React from "react";
import { Link, withRouter } from "react-router-dom";

function Navigation(props) {
  return (
    <div className="navigation">
      <nav class="navbar navbar-expand navbar-dark bg-dark">
        <div class="container">
          <Link class="navbar-brand" to="/">
            Con Anima
          </Link>

          <div>
            <ul class="navbar-nav ml-auto">
              <li
                class={`nav-item  ${
                  props.location.pathname === "/" ? "active" : ""
                }`}
              >
                <Link class="nav-link" to="/">
                  Home
                  <span class="sr-only">(current)</span>
                </Link>
              </li>
              <li
                class={`nav-item  ${
                  props.location.pathname === "/generator" ? "active" : ""
                }`}
              >
                <Link class="nav-link" to="/generator">
                  Generator
                  <span class="sr-only">(current)</span>
                </Link>
              </li>
              <li
                class={`nav-item  ${
                  props.location.pathname === "/brainstorming" ? "active" : ""
                }`}
              >
                <Link class="nav-link" to="/brainstorming">
                  Brainstorming
                </Link>
              </li>
              <li
                class={`nav-item  ${
                  props.location.pathname === "/Sheet" ? "active" : ""
                }`}
              >
                <Link class="nav-link" to="/Sheet">
                  Sheet Music
                </Link>
              </li>
              <li
                class={`nav-item  ${
                  props.location.pathname === "/lyrics" ? "active" : ""
                }`}
              >
                <Link class="nav-link" to="/lyrics">
                  Lyrics
                </Link>
              </li>
              <li
                class={`nav-item  ${
                  props.location.pathname === "/share" ? "active" : ""
                }`}
              >
                <Link class="nav-link" to="/share">
                  Share
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default withRouter(Navigation);