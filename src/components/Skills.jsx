import { Container, Row, Col } from "react-bootstrap";
import { FaHtml5, FaCss3Alt, FaReact, FaPython, FaGitAlt, FaDatabase } from "react-icons/fa";
import { SiJavascript, SiBootstrap, SiMysql, SiNetlify, SiHeroku, SiInsomnia, SiDjango, SiPostgresql, SiGithub } from "react-icons/si";
import { VscAzure, VscVscode } from "react-icons/vsc";
import colorSharp from "../assets/img/color-sharp.png";

function Skills() {
    return (
    <section className="skill" id="skills">
        <Container>
        <div className="skill-bx">
            <h2>Skills</h2>
            
            <div className="orbit-container">
            {/* --- CENTER --- */}
            <div className="orbit-center">
                <h3>Full<br/>Stack</h3>
            </div>

            {/* --- INNER RING (Core) --- */}
            <div className="orbit-ring inner">
                <div className="orbit-item" style={{'--angle': '0deg'}}><FaHtml5 color="#E34F26" /><span>HTML</span></div>
                <div className="orbit-item" style={{'--angle': '120deg'}}><FaCss3Alt color="#1572B6" /><span>CSS</span></div>
                <div className="orbit-item" style={{'--angle': '240deg'}}><SiJavascript color="#F7DF1E" /><span>JS</span></div>
            </div>

            {/* --- MIDDLE RING (Frameworks) --- */}
            <div className="orbit-ring middle">
                <div className="orbit-item" style={{'--angle': '0deg'}}><FaReact color="#61DAFB" /><span>React</span></div>
                <div className="orbit-item" style={{'--angle': '51deg'}}><SiBootstrap color="#7952B3" /><span>Bootstrap</span></div>
                <div className="orbit-item" style={{'--angle': '103deg'}}><FaPython color="#3776AB" /><span>Python</span></div>
                <div className="orbit-item" style={{'--angle': '154deg'}}><SiDjango color="#092E20" /><span>Django</span></div>
                <div className="orbit-item" style={{'--angle': '206deg'}}><FaDatabase color="#f29111" /><span>SQL</span></div>
                <div className="orbit-item" style={{'--angle': '257deg'}}><SiPostgresql color="#336791" /><span>Postgres</span></div>
                <div className="orbit-item" style={{'--angle': '308deg'}}><SiMysql color="#00758F" /><span>MySQL</span></div>
            </div>

            {/* --- OUTER RING (Backend/Tools) --- */}
            <div className="orbit-ring outer">
                <div className="orbit-item" style={{'--angle': '0deg'}}><FaGitAlt color="#F05032" /><span>Git</span></div>
                <div className="orbit-item" style={{'--angle': '51deg'}}><VscVscode color="#007ACC" /><span>VS Code</span></div>
                <div className="orbit-item" style={{'--angle': '103deg'}}><SiInsomnia color="#5849BE" /><span>Insomnia</span></div>
                <div className="orbit-item" style={{'--angle': '154deg'}}><SiGithub color="#fff" /><span>GitHub</span></div>
                <div className="orbit-item" style={{'--angle': '206deg'}}><SiNetlify color="#00C7B7" /><span>Netlify</span></div>
                <div className="orbit-item" style={{'--angle': '257deg'}}><SiHeroku color="#430098" /><span>Heroku</span></div>
                <div className="orbit-item" style={{'--angle': '308deg'}}><VscAzure color="#0078D4" /><span>Azure</span></div>
            </div>
            
            {/* The Grid Lines Background */}
            <div className="grid-lines"></div>
            </div>
        </div>
        </Container>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
    )
}

export default Skills;