import React from "react";
import "./About.css";
// import keyboard from "../../assets/keyboard.jpg";
import lily from "../../assets/lily.jpg";

const About = () => {
  return (
    <div className="about">
      <div className="about-title">
        <h1>About Me</h1>
        {/* <img src={keyboard} alt="" style={{ width: "80px", height: "auto" }}/> */}
      </div>
        <div className="about-sections">
            <div className="about-left">
            <img src={lily} alt="" style={{ width: "400px", height: "500px" }} />
        </div>
      
            <div className="about-right">
                <div className="about-para">
                    <p>
                        Developed and maintained responsive, high-performance web
                        applications using React.js, Angular, JavaScript, and Apollo
                        GraphQL, with a strong emphasis on accessibility, scalability, and
                        user experience.
                    </p>
                    <p>
                        Performed incident response, root cause analysis, and implemented
                        corrective actions to minimize downtime.Maintained uptime by
                        automating CI/CD pipelines using Jenkins and ensuring seamless
                        integration and delivery of services to production environments.
                    </p>
                </div>
        
                <div className="about-skills">
                        <div className="about-skill">
                        <p>HTML & CSS</p> <hr style={{ width: "90%" }} />
                        </div>
                        <div className="about-skill">
                        <p>React JS</p> <hr style={{ width: "85%" }} />
                        </div>
                        <div className="about-skill">
                        <p>Javascript</p> <hr style={{ width: "90%" }} />
                        </div>
                        <div className="about-skill">
                        <p>Next Js</p> <hr style={{ width: "80%" }} />
                        </div>
                        <div className="about-skill">
                        <p>SRE</p> <hr style={{ width: "70%" }} />
                        </div>
                </div>
            </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
          <h1>10+</h1>
          <p>YEARS OF EXPERIENCE</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>70+</h1>
          <p>PROJECTS COMPLETED</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>10+</h1>
          <p>HAPPY CLIENTS </p>
        </div>
      </div>
    </div>
  );
};

export default About;
