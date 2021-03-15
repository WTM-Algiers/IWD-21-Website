import React, { useState, useEffect } from "react"
import "../css/navbar.css"

function Navbar() {
  const [isActive, setActive] = useState(false)

  const titles = ["Home", "About", "Speakers", "Schedule", "Contact"]

  const navElements = titles.map((title) => {
    return (
      <li key={title}>
        <a
          href={`#${title}`}
          onClick={() => {
            document.querySelector(
              "head title"
            ).textContent = `${title} | IWD-21`
          }}
        >
          {title}
        </a>
      </li>
    )
  })

  let navLinksClass = "navbar-links"
  navLinksClass += isActive ? " active" : ""
  let toggleClass = "toggle-btn"
  toggleClass += isActive ? " active" : ""

  return (
    <nav className="navbar">
      <a href="#" className="logo">
        <img
          src={require("../../public/icons/icon-72x72.png")}
          alt="IWD logo"
        />
      </a>
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
            <a href="#" className="register-btn">
              Register
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
