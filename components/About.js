import Image from "next/image"
import itsfz1 from "../public/images/itsfz1.png"
import { AiOutlineRead } from "react-icons/ai"
import { GiCampCookingPot } from "react-icons/gi"
import { BsMusicNoteList } from "react-icons/bs"
import { CgGames } from "react-icons/cg"
import { FaFacebook } from "react-icons/fa"
import { FaLinkedin } from "react-icons/fa"
import { FaInstagramSquare } from "react-icons/fa"
import { FaGithub } from "react-icons/fa"
import { FaWhatsappSquare } from "react-icons/fa"
import { ImMail } from "react-icons/im"

export const About = () => {
  return (
    <div id="about">
      <h2 className="project-heading">ABOUT</h2>
      <div id="about" className="aboutme">
        <div className="left-side">
          <ul>
            <li>
              <Image src={itsfz1} width={400} height={300} alt="my pic" />
            </li>
            <li>
              <h3>
                Fahim <span className="second-name">Zada</span>
              </h3>
            </li>
            <li>
              <h3>
                Software <span className="engineer">Engineer</span>
              </h3>
            </li>
            <li>
              <h3>
                Full Stack <span className="developer">Web Developer</span>
              </h3>
            </li>
          </ul>
        </div>
        <div className="right-side">
          <p>
            Creative Developer offering 7+ years of experience providing high-impact web solutions for diverse industry
            organizations and individuals. Skilled in designing, developing and testing multiple web-based applications
            incorporating a range of technologies. Aspiring to combine broad background with strong technical skills to
            excel as a Developer.
            <br></br>
            <br></br>
            <b>
              <span className="developer">Languages:</span>
            </b>{" "}
            Pashto, Urdu, English
            <br></br>
            <b>
              <span className="developer">Country:</span>
            </b>{" "}
            Pakistan (Nowshera, KPK)
          </p>
          <h3 className="second-name">Hobbies</h3>
          <div className="about-icons">
            <a title="Reading">
              <AiOutlineRead className="view" style={{ height: "2rem", width: "2rem", color: "#fff" }} />
            </a>
            <a title="Cooking">
              <GiCampCookingPot className="view" style={{ height: "2rem", width: "2rem", color: "#fff" }} />
            </a>
            <a title="Music">
              <BsMusicNoteList className="view" style={{ height: "2rem", width: "2rem", color: "#fff" }} />
            </a>
            <a title="Video Games">
              <CgGames className="view" style={{ height: "2rem", width: "2rem", color: "#fff" }} />
            </a>
          </div>
          <h3 className="engineer">Socials</h3>
          <div className="about-icons">
            <a href="https://www.facebook.com/faheem.zada.9/" target="_blank" rel="noreferrer" title="Facebook">
              <FaFacebook className="view" style={{ height: "2rem", width: "2rem", color: "#fff" }} />
            </a>
            <a href="https://www.linkedin.com/in/fahimzada/" target="_blank" rel="noreferrer" title="Linkedin">
              <FaLinkedin className="view" style={{ height: "2rem", width: "2rem", color: "#fff" }} />
            </a>
            <a href="https://www.instagram.com/itsfz1/" target="_blank" rel="noreferrer" title="Instagram">
              <FaInstagramSquare className="view" style={{ height: "2rem", width: "2rem", color: "#fff" }} />
            </a>
            <a href="https://github.com/itsfz1" target="_blank" rel="noreferrer" title="Github">
              <FaGithub className="view" style={{ height: "2rem", width: "2rem", color: "#fff" }} />
            </a>
            <a
              href="https://api.whatsapp.com/send?phone=923349093082&text=Thank%20You%20For%20Contacting%20Will%20Get%20Back%20To%20You%20As%20Soon%20As%20Possible%20:)"
              target="_blank"
              rel="noreferrer"
              title="Whatsapp"
            >
              <FaWhatsappSquare className="view" style={{ height: "2rem", width: "2rem", color: "#fff" }} />
            </a>
            <a href="mailto:me@fahimzada.com" target="_blank" rel="noreferrer" title="Mail">
              <ImMail className="view" style={{ height: "1.9rem", width: "2rem", color: "#fff" }} />
            </a>
          </div>
        </div>
      </div>
      <div>
        <div className="divider div-projects">{"</about>"}</div>
      </div>
    </div>
  )
}
