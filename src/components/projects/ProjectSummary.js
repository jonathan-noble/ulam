import React from 'react'

const ProjectSummary = ({project}) => {
    return (
        
        <div className="card project-summary">
          <div className="card-content grey-text text-darken-3">
            <span className="card-title">{project.title}</span>
                <p>Posted by Butan</p>
                <p className="grey-text">3rd August, 2am</p>
          </div>
        </div>
    )
}

export default ProjectSummary;