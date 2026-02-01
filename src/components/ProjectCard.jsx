import { Row, Col } from "react-bootstrap";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

function ProjectCard({ title, description, imgUrl, bullets, techStack, demoLink, repoLink, backendRepoLink  }) {
    return (
        <div className="project-card-row">
            <Row className="align-items-center">
                {/* Left Side: Image */}
                <Col size={12} md={4}>
                    <div className="proj-imgbx">
                        <img src={imgUrl} alt={title} />
                    </div>     
                </Col>

                {/* Right Side: Detailed Text */}
                <Col>
                    <div className="project-content">
                        <h3>{title}</h3>
                        <h5 className="role-subtitle">{description}</h5>

                        {/* Bullet Points */}
                        <ul className="project-bullets">
                            {bullets.map((point, index) => (
                                <li key={index}>{point}</li>
                            ))}
                        </ul>
                        {/* Tech Stach Tags */}
                        <div className="tech-stack">
                            <strong>Tech Stack: </strong>
                            {techStack.map((tech, index) => (
                                <span key={index} className="tech-badge">{tech}</span>
                            ))}
                        </div>

                        {/* Buttons */}
                        <div className="project-buttons">
                            <a href={demoLink} target="_blank" rel="noreferrer" className="btn-action">
                                Live Demo <FaExternalLinkAlt size={15} />
                            </a>
                            {/* Logic: If there is a backend link, show two buttons. If not, show one generic 'GitHub' button */}
                            {backendRepoLink ? (
                                <>
                                    <a href={repoLink} target="_blank" rel="noreferrer" className="btn-action hollow">
                                        FE Code <FaGithub size={18} />
                                    </a>
                                    <a href={backendRepoLink} target="_blank" rel="noreferrer" className="btn-action hollow">
                                        BE Code <FaGithub size={18} />
                                    </a>
                                </>
                            ) : (
                                <a href={repoLink} target="_blank" rel="noreferrer" className="btn-action hollow">
                                    GitHub <FaGithub size={18} />
                                </a>
                            )}
                        </div>
                    </div>
                </Col>
            </Row>
            <hr className="project-divider" />
        </div>
    )
}

export default ProjectCard;