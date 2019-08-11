import React from 'react'

const ProjectSummary = ({project}) => {
    return (
        
        <div className="card project-summary">
          <div className="card-content grey-text text-darken-3">
            <span className="card-title">{project.title}</span>
                <p>Posted by {project.authorFirstName} {project.authorLastName} </p>
                <p className="grey-text">{project.createdAt.toDate().toDateString()}</p>
          </div>
        </div>
    )
}

export default ProjectSummary;