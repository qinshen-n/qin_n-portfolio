import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import TrackVisibility from "react-on-screen";
import ProjectCard from './ProjectCard';
import projImg1 from "../assets/img/projImg1.png";
import projImg2 from "../assets/img/projImg2.png";
import projImg3 from "../assets/img/projImg3.png";
import 'animate.css';

function Projects() {
    const projects = [
        {
            title: "Yarning Circles",
            description: "Full Stack Developer | Peer Learning Platform",
            imgUrl: projImg2,
            bullets: [
                "Evolved a group project platform into a community-first learning experience.",
                "Designed 4-zone framework addressing gap in peer-driven learning.",
                "Rebuilt backend enrollment system (localStorage → Django ManyToMany).",
                "Architected conditional dashboards, meeting RSVP, and milestone tracking."
            ],
            techStack: ["React", "Django REST", "PostgreSQL", "Python", "Javascript", "Azure"],
            demoLink: "https://yarning-circles.netlify.app/",
            repoLink: "https://github.com/qinshen-n/yarning-circles_frontend",
            backendRepoLink: "https://github.com/qinshen-n/yarning-circles_backend"
        },
        {
            title: "Conservation Catalyst",
            description: "Full Stack Developer | Crowdfunding Platform",
            imgUrl: projImg1,
            bullets: [
                "Architected a full-stack crowdfunding platform connecting donors with wildlife projects.",
                "Built a custom REST API to handle project submissions, user profiles, and donation logic.",
                "Developed a responsive React frontend with dynamic progress bars and category filtering.",
                "Deployed entire stack: React to Netlify and DRF Backend to Heroku."
            ],
            techStack: ["React", "Javascript", "Django REST", "Python"],
            demoLink: "https://conservation-catalyst.netlify.app/",
            repoLink: "https://github.com/qinshen-n/crowdfunding-frontend",
            backendRepoLink: "https://github.com/qinshen-n/crowdfunding_backend"
        },
        {
            title: "My Portfolio",
            description: "React & Bootstrap Personal Website",
            imgUrl: projImg3,
            bullets: [
            "Designed and developed a responsive personal portfolio using React.",
            "Implemented CSS animations and a dynamic 'orbit' skills visualization.",
            "Optimized for performance and mobile responsiveness."
            ],
            techStack: ["React", "Bootstrap", "CSS3", "Animate.css"],
            demoLink: "https://your-portfolio-link.com",
            repoLink: "https://github.com/yourusername/portfolio",
        }
    ];

    return (
        <section className="project" id="projects">
            <Container>
                <Row>
                    <Col size={12}>
                        <TrackVisibility>
                        {({ isVisible }) =>
                        <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                            <h2>Projects</h2>
                            <p>Here are a few projects I've worked on, ranging from web development to business analysis. Each project represents a step in my journey from retail management to software development.</p>
                                <Row>
                                    {
                                        projects.map((project, index) => {
                                            return (
                                                <ProjectCard
                                                    key={index}
                                                    {...project}
                                                />
                                            )
                                        })
                                    }
                                </Row>                             
                        </div>}
                        </TrackVisibility>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Projects;