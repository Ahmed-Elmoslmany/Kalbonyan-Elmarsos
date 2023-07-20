import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, repo, demo }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} alt="img"/>
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
          <div className="project-btn">
          <a className="repo-btn" href={repo} target="_blank" rel="noreferrer">Repo</a>
          <a className="demo-btn" href={demo} target="_blank" rel="noreferrer">Demo</a>
          </div>
            
        </div>
      </div>
    </Col>
  )
}
