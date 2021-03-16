import React, { Component } from "react"

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
                  <img src={"../../assets/pngs/fb_icon.png"}></img>
                </a>
                <a
                  href="https://www.instagram.com/gdg_algiers/"
                  target="_blank"
                >
                  <img src={"../../assets/pngs/insta_icon.png"}></img>
                </a>
                <a href="https://twitter.com/gdg_algiers" target="_blank">
                  {" "}
                  <img src={"../../assets/pngs/twitter_icon.png"}></img>
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
