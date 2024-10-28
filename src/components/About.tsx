import "../app/styles/index.css";


const About = () => {
  return (
    <>
        <a id = "about"></a>
        <section className = "about bg-black">
            <div className = "about-content">
                <h1>
                    About me
                </h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit
                </p>
            </div>

            <div className = "block-container">
                <div className = "block"></div>
                <div className = "block"></div>
                <div className = "block"></div>
                <div className = "block"></div>
                <div className = "block"></div>
                <div className = "block"></div>
                <div className = "block"></div>
            </div>
        </section>
    </>
  )
}

export default About