import { FaReact } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'
import { AiOutlineFundView } from 'react-icons/ai'
import { BiBookReader } from 'react-icons/bi'
import { SiNextDotJs } from 'react-icons/si'
import { SiSocketDotIo } from 'react-icons/si'

export const Projects = () =>
{
    return (
        <div id="projects">
            <h2 className="project-heading">Projects</h2>
            <div className="card-container">
                <div className="block">
                    <div className="overlay"></div>
                    <div className="block-text">
                        <div className="text-head">Horoscope Checker <br></br><br></br>
                            <FaReact style={{ height: "3rem", width: "3rem", color: "#fff" }} />
                            <br></br><br></br>
                            <a href="https://github.com/itsfz1/horoscope-checker-reactjs" target="_blank" rel="noreferrer">
                                <FaGithub className="github" style={{ height: "2rem", width: "2rem" }} />
                            </a>
                            <a href="https://fahimzada.com/projects/horoscope/" target="_blank" rel="noreferrer">
                                <AiOutlineFundView className="view" style={{ height: "2rem", width: "2rem" }} />
                            </a>
                            <a><BiBookReader style={{ height: "2rem", width: "2rem", color: "#fff" }} rel="noreferrer" />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="block">
                    <div className="overlay"></div>
                    <div className="block-text">
                        <div className="text-head">Component UI<br></br><br></br>
                            <FaReact style={{ height: "3rem", width: "3rem", color: "#fff" }} />
                            <br></br><br></br>
                            <a href="https://github.com/itsfz1/mixed-react-components" target="_blank" rel="noreferrer">
                                <FaGithub className="github" style={{ height: "2rem", width: "2rem" }} />
                            </a>
                            <a href="https://www.npmjs.com/package/mixed-react-components" target="_blank" rel="noreferrer">
                                <AiOutlineFundView className="view" style={{ height: "2rem", width: "2rem" }} />
                            </a>
                            <a><BiBookReader style={{ height: "2rem", width: "2rem", color: "#fff" }} rel="noreferrer" />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="block">
                    <div className="overlay"></div>
                    <div className="block-text">
                        <div className="text-head">Youtube Comments<br></br><br></br>
                            <FaReact style={{ height: "3rem", width: "3rem", color: "#fff" }} />
                            <br></br><br></br>
                            <a href="https://github.com/itsfz1/Youtube-Comments-Analyst" target="_blank" rel="noreferrer">
                                <FaGithub className="github" style={{ height: "2rem", width: "2rem" }} />
                            </a>
                            <a href="https://fahimzada.com/projects/ytanalyst/" target="_blank">
                                <AiOutlineFundView className="view" style={{ height: "2rem", width: "2rem" }} rel="noreferrer" />
                            </a>
                            <a><BiBookReader style={{ height: "2rem", width: "2rem", color: "#fff" }} rel="noreferrer" />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="block">
                    <div className="overlay"></div>
                    <div className="block-text">
                        <div className="text-head">Auto News Blogging<br></br><br></br>
                            <SiNextDotJs style={{ height: "3rem", width: "3rem", color: "#fff" }} />
                            <br></br><br></br>
                            <a href="https://github.com/itsfz1/Youtube-Comments-Analyst" target="_blank" rel="noreferrer">
                                <FaGithub className="github" style={{ height: "2rem", width: "2rem" }} />
                            </a>
                            <a href="https://fahimzada.com/projects/ytanalyst/" target="_blank" rel="noreferrer">
                                <AiOutlineFundView className="view" style={{ height: "2rem", width: "2rem" }} />
                            </a>
                            <a><BiBookReader style={{ height: "2rem", width: "2rem", color: "#fff" }} rel="noreferrer" />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="block">
                    <div className="overlay"></div>
                    <div className="block-text">
                        <div className="text-head">99 chatroom<br></br><br></br>
                            <SiSocketDotIo style={{ height: "3rem", width: "3rem", color: "#fff" }} />
                            <br></br><br></br>
                            <a href="https://github.com/itsfz1/99chats-ExpressJs-Socketio" target="_blank" rel="noreferrer">
                                <FaGithub className="github" style={{ height: "2rem", width: "2rem" }} />
                            </a>
                            <a href="https://chats99.herokuapp.com/" target="_blank" rel="noreferrer">
                                <AiOutlineFundView className="view" style={{ height: "2rem", width: "2rem" }} />
                            </a>
                            <a><BiBookReader style={{ height: "2rem", width: "2rem", color: "#fff" }} rel="noreferrer" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className="divider div-projects">{"</projects>"}</div>
            </div>
        </div>
    )
}
