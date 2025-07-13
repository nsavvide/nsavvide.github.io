import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { BsGithub } from "react-icons/bs";

function ProjectCards({ imgPath, icon: Icon, title, description, ghLink, isBlog }) {
  return (
    <Card className="project-card-view">
      {Icon ? (
        <div style={{ fontSize: "4rem", textAlign: "center", paddingTop: "1rem", color: "#CC5500" }}>
          <Icon />
        </div>
      ) : (
        <Card.Img variant="top" src={imgPath} alt="card-img" />
      )}

      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {description}
        </Card.Text>
        {ghLink && (
          <Button variant="primary" href={ghLink} target="_blank">
            <BsGithub /> &nbsp;
            {isBlog ? "Blog" : "GitHub"}
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}

export default ProjectCards;
