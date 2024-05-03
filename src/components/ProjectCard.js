import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl,link }) => {
  return (
    <Col size={12} sm={6} md={4} style={{width: '520px',height:'382px'}}>
      <div className="proj-imgbx">
        <img src={imgUrl} alt="projectImg" style={{width: '500px', height:'300px'}}/>
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
          <a href={link} style={{textDecoration: 'none',display:'block'}}> Click aqui para acceder al proyecto</a>
        </div>
      </div>
    </Col>
  )
}