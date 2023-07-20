import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/kal4.png";
import projImg2 from "../assets/img/kal3.png";
import projImg3 from "../assets/img/kal2.png";
import projImg4 from "../assets/img/kal1.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "4th Project Albounyan",
      description: "Your Notes! MERN project",
      imgUrl: projImg1,
      repo: "https://github.com/Ahmed-Elmoslmany/your-note",
      demo: "https://your-note.onrender.com/"
    },
    {
      title: "3rd Project Albounyan",
      description: "Your cars! React project",
      imgUrl: projImg2,
      repo: "https://github.com/Ahmed-Elmoslmany/albonyanalmarsos-03-task",
      demo: "https://albonyanalmarsos-03-task.netlify.app/"
    },
    {
      title: "2nd Project Albounyan",
      description: "Vanilla JavaScript todo project",
      imgUrl: projImg3,

      repo: "https://github.com/Ahmed-Elmoslmany/albonyanalmarsos-02-task",
      demo: "https://albonyanalmarsos-02-task.netlify.app/"
    },
    {
      title: "1st Project Albounyan",
      description: "Static responsive webpage using HTML & CSS",
      imgUrl: projImg4,

      repo: "https://github.com/Ahmed-Elmoslmany/albonyanalmarsos-01-task",
      demo: "https://albonyanalmarsos-01-task.netlify.app/"
    },
   
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                {/* <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p> */}
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Finished Projects</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Current Projects</Nav.Link>
                    </Nav.Item>
                    
                    <Nav.Item>
                      <Nav.Link eventKey="third">Upcoming Projects</Nav.Link>
                    </Nav.Item> 
                  </Nav>
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
                      {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p> */}
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p> */}
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="sharp"></img>
    </section>
  )
}
