import React, { useState } from "react"
import { Link } from "gatsby"
import "../../css/navbar.css"
import {
  INDEX_ABOUT_SECTION,
  INDEX_SCHEDULE_SECTION,
  INDEX_HOME_SECTION,
  INDEX_SPEAKERS_SECTION,
} from "../../utils"

const links = [
  {
    linkName: "Home",
    linkUrl: INDEX_HOME_SECTION,
  },
  {
    linkName: "About",
    linkUrl: INDEX_ABOUT_SECTION,
  },
  {
    linkName: "Speakers",
    linkUrl: INDEX_SPEAKERS_SECTION,
  },
  {
    linkName: "Schedule",
    linkUrl: INDEX_SCHEDULE_SECTION,
  },
]

function Navbar() {
  const [isActive, setActive] = useState(false)

  const navElements = links.map((link) => {
    return (
      <li key={link.linkName}>
        <Link to={link.linkUrl}>{link.linkName}</Link>
      </li>
    )
  })

  let navLinksClass = "navbar-links"
  navLinksClass += isActive ? " active" : ""
  let toggleClass = "toggle-btn"
  toggleClass += isActive ? " active" : ""

  return (
    <nav className="navbar">
      <Link to="/" className="logo">
        <img src={require("../../assets/svgs/Logo.svg")} alt="IWD logo" />
      </Link>

      <a
        href="#"
        className={toggleClass}
        onClick={() => {
          setActive(!isActive)
        }}
      >
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </a>

      <div className={navLinksClass}>
        <ul>
          {navElements}
          <li>
            <Link
              to="https://tripetto.app/run/T06ISDL4E9"
              className="register-btn"
            >
              Register
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
