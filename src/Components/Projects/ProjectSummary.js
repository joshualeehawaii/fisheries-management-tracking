import React from "react";

const ProjectSummary = ({ project }) => {
  return (
    <div className="card z-depth-3">
      <div className="card-content grey-text text-darken-3">
        <span className="card-title ">{project.title}</span>
        <p>
          Posted by {project.authorFirstName} {project.authorLastName}
        </p>
        <p className="grey-text">{project.createdAt.toDate().toString()}</p>
      </div>
    </div>
  );
};

export default ProjectSummary;
