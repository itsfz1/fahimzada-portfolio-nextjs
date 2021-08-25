import { BiHomeHeart } from 'react-icons/bi'
import { FaUserGraduate } from 'react-icons/fa'
import { AiOutlineFundProjectionScreen } from 'react-icons/ai'
import { BsQuestionDiamond } from 'react-icons/bs'
import { BiMailSend } from 'react-icons/bi'
import { FiDownloadCloud } from 'react-icons/fi'

export const Header = () =>
{
    return (
        <div>
            <div className="menu">
                <a><BiHomeHeart className="home align-icons" style={{ height: "2rem", width: "2rem", color: "#f9002f" }} />HOME</a>
                <a href="#education"><FaUserGraduate className="education align-icons" style={{ height: "1.5rem", width: "2rem", color: "#e83611" }} />EDUCATION</a>
                <a href="#projects"><AiOutlineFundProjectionScreen className="projects align-icons" style={{ height: "2rem", width: "2rem", color: "#f1b211" }} />PROJECTS</a>
                <a href="#about"><BsQuestionDiamond className="about align-icons" style={{ height: "1.7rem", width: "2rem", color: "#2a9a9f" }} />ABOUT</a>
                <a href="#contact"><BiMailSend className="contact align-icons" style={{ height: "3rem", width: "2rem", color: "#186cb8" }} />CONTACT</a>
                <a href="/Fahim-Zada-Portfolio-High-Res.png" download="Fahim-Zada-Resume.png"><FiDownloadCloud className="resume align-icons" style={{ height: "2.5rem", width: "2rem", color: "#f9002f" }} />RESUME</a>
            </div>
            <div className="heading-wrapper">
                <div className="heading-container">
                    <h1 className="header-heading">Hi, I&#39;m Fahim Zada</h1>
                    <h1 className="header-heading">Ex LAMP Now Working</h1>
                    <h1 className="header-heading">As MERN Stack Developer </h1>
                </div>
            </div>
            <div>
                <div className="divider div-header">{"</header>"}</div>
            </div>

        </div >
    )
}
