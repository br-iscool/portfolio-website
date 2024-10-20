import "../css/index.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

const Home = () => {
  return (
    <section className = "home flex items-center justify-center">
        <div className = "home-img">
            <img src = "src/media/main.png" alt = "" className = "relative" />
        </div>
        
        <div className = "home-content absolute">
            <h1 className = "font-bold">
                Hello, I'm <span className = "spec-purple">Brian</span>👋
            </h1>
            <p>
                Self-taught computer science enthusiast with an interest in web dev, app dev, and cybersecurity. Eager to learn and make new things.
            </p>

        <div className = "home-icons items-center flex">
            <div className = "social-icon">
                <a href = "" className = "inline-flex justify-center items-center bg-black spec-purple">
                    <FontAwesomeIcon icon = { faLinkedin }/>
                </a>
                <a href = "https://github.com/br-iscool" className = "inline-flex justify-center items-center bg-black spec-purple">
                    <FontAwesomeIcon icon = { faGithub }/>
                </a>
                <a href = "" className = "inline-flex justify-center items-center bg-black spec-purple">
                    <FontAwesomeIcon icon = { faInstagram }/>
                </a>
            </div>

            <a href = "mailto:" className = "contact-icon inline-block bg-black spec-purple font-semibold">
              Contact me
            </a>

        </div>
        </div>
    </section>
  )
}

export default Home