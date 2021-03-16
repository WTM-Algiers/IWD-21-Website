import React, { ReactElement } from "react"
import { H3, H5 } from "../typography"
import { Link } from "gatsby"
import Section from "../Section"
function Footer(): ReactElement {
  return (
    <Section id="footer">
      <div className="w-full pt-16 mb-20">
        <div className="w-full lg:w-2/5 mt-64 m-auto border-t-2 border-gray-600">
          <img
            src={require("../../assets/svgs/Logo.svg")}
            alt="IWD 21"
            className="mt-5 m-auto"
            style={{
              width: "350px",
            }}
          />

          <p className="text-center mt-6 text-nightBlue">
            One week, Multiple speakers, Different Workshops and one single
            objective Courage to create
          </p>
          <div className="mt-5 flex justify-center">
            <Link to="https://www.instagram.com/wtm_algiers/" target="_blank">
              <img
                src={require("../../assets/svgs/instagram.svg")}
                alt="WTMAlgiers"
                className="ml-5 mr-5"
                style={{
                  width: "25px",
                }}
              />
            </Link>

            <Link to="https://twitter.com/algierswtm" target="_blank">
              <img
                src={require("../../assets/svgs/TwitterSimpl.svg")}
                alt="WTMAlgiers"
                style={{
                  width: "25px",
                }}
              />
            </Link>

            <Link
              to="https://www.facebook.com/WomenTechmakersAlgiers/"
              target="_blank"
            >
              <img
                src={require("../../assets/svgs/facebookSimple.svg")}
                alt="gdgAlgiers"
                className="ml-5 mr-5"
                style={{
                  width: "25px",
                }}
              />
            </Link>
          </div>
        </div>
      </div>

      <footer className="flex justify-around items-center py-4 footer2">
        <Link to="https://gdg.community.dev/iwd/" target="_blank">
          <H3 className="text-white text-base md:text-xl">IWD in the world</H3>
        </Link>

        <Link to="https://www.gdgalgiers.com/" target="_blank">
          <H3 className="text-white text-base md:text-xl">GDG Algiers</H3>
        </Link>

        <Link to="https://www.wtm-algiers.tech/" target="_blank">
          <H3 className="text-white text-base md:text-xl">WTM Algiers</H3>
        </Link>

        <Link to="https://iwd20-algiers.netlify.app/" target="_blank">
          <H3 className="text-white text-base md:text-xl">2020 edition</H3>
        </Link>
      </footer>
    </Section>
  )
}

export default Footer
