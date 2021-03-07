import React, { Component } from "React"
import fb_logo from "../images/fb_icon.png"
import insta from "../images/insta_icon.png"
import twitter from "../images/twitter_icon.png"
class Footer extends Component {
  render() {
    return (
      <>
        <div className="footer2">
          <div className=" footer_row2">
            <div className="">
              <p className="footer_nav"> FOLLOW US ON MEDIA</p>
            </div>
          </div>
          <div className=" footer_row2">
            <div className="">
              <div className="socialmedia2">
                <a href="https://web.facebook.com/GDGAlgiers" target="_blank">
                  <img src={fb_logo}></img>
                </a>
                <a
                  href="https://www.instagram.com/gdg_algiers/"
                  target="_blank"
                >
                  <img src={insta}></img>
                </a>
                <a href="https://twitter.com/gdg_algiers" target="_blank">
                  {" "}
                  <img src={twitter}></img>
                </a>
              </div>
            </div>
            <div className="col-4"></div>
          </div>
          <div className="row footer_row2">
            <div className="col-12">
              <p className="footer_nav"> ©️ WTM ALGIERS 2021</p>
            </div>
          </div>
        </div>
      </>
    )
  }
}
export default Footer
