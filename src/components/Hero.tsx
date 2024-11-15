import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

const Hero = () => {
    return (
        <section className = "home flex items-center justify-center min-h-screen px-[9%] py-20 gap-32 [box-shadow:0_0_10px_#ffffff_inset]">
            <div className = "home-img rounded-[50%]">
                <img src = "src/media/main.png" alt = "" className = "relative w-[32vw] rounded-[50%] [box-shadow:0_0_25px_solid_#7982ef] cursor-pointer [transition:0.2s_linear]" />
            </div>
            
            <div className = "home-content absolute top-2/5">
                <h1 className = "font-bold text-[6rem] leading-[1.3] pb-[15px]">
                    Hello, I'm <span className = "spec-purple">Brian</span>👋
                </h1>
                <p className = "text-[1.6rem]">
                    Self-taught computer science enthusiast with an interest in web dev, app dev, and cybersecurity. Eager to learn and make new things.
                </p>

            <div className = "home-icons items-center flex gap-6">
                <div className = "social-icon select-none">
                    <a href = "" className = "inline-flex justify-center items-center bg-black spec-purple w-16 h-16 border-[solid] border-[#7982ef] text-[2rem] rounded-[50%] ml-[0] mr-6 my-12 [transition:0.3s_ease]">
                        <FontAwesomeIcon icon = { faLinkedin }/>
                    </a>
                    <a href = "https://github.com/br-iscool" target = "_blank" className = "inline-flex justify-center items-center bg-black spec-purple w-16 h-16 border-[solid] border-[#7982ef] text-[2rem] rounded-[50%] ml-[0] mr-6 my-12 [transition:0.3s_ease]">
                        <FontAwesomeIcon icon = { faGithub }/>
                    </a>
                    <a href = "" className = "inline-flex justify-center items-center bg-black spec-purple w-16 h-16 border-[solid] border-[#7982ef] text-[2rem] rounded-[50%] ml-[0] mr-6 my-12 [transition:0.3s_ease]">
                        <FontAwesomeIcon icon = { faInstagram }/>
                    </a>
                </div>

                <a href = "mailto:" className = "contact-icon inline-block bg-black spec-purple font-semibold px-[2.8rem] py-4 rounded-[4rem] text-[1.6rem] tracking-[0.1rem] border-[solid] border-[#7982ef] [transition:0.3s_ease] cursor-pointer select-none">
                    Contact me
                </a>

            </div>
            </div>
        </section>
    )
}

export default Hero
