import { Container, Row, Col, Tab} from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/YardSale.png";
import projImg2 from "../assets/VideoQuiz.png";
import projImg3 from "../assets/Captura desde 2024-08-29 14-29-08.png";
import colorSharp2 from "../assets/abstract-luxury-blur-dark-grey-black-gradient-used-as-background-studio-wall-display-your-products.jpg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "YardSale",
      description: "E-commerce",
      imgUrl: projImg1,
      link: 'https://yardsalefernando.netlify.app/'
    },
    {
      title: "Video Quiz",
      description: "Web application",
      imgUrl: projImg2,
      link: 'https://videocuestionariofernandoavendano.netlify.app/'
    },
    {
      title: "Whereitis?",
      description: "Web application using google maps api",
      imgUrl: projImg3,
      link: 'https://whereitis.vercel.app'
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
                <p>These are the projects that I have done on my own to test my knowledge and skills in web development and mobile development, challenging myself to implement common cases and requirements in the work area.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
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
                    </Tab.Pane>
                    <Tab.Pane eventKey="section">
                      <p>I constantly update and improve these projects in order to stay up to date with new versions of the libraries and the Javascript language, as well as learning about typescript.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>I am open to any work and/or learning proposal in which I can put my skills and knowledge into practice, as well as acquire work experience to continue growing as a professional.</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt=""></img>
    </section>
  )
}