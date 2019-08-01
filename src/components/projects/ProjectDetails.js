import React from 'react'

const ProjectDetails = (props) => {
    const id = props.match.params.id;
    return (
        <div className="container section project-details">
            <div className="card z-depth-0">
                <div className="card-content">
                    <span className="card-title">Project Title - {id} </span>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe enim debitis soluta labore adipisci, ut, quasi obcaecati possimus inventore, tempora a veritatis excepturi suscipit placeat ipsa minima omnis recusandae culpa.</p>
                </div>
                <div className="card-action grey lighten-4 grey-text">
                    <div>Posted by Butan</div>
                    <div>15th August, 2am</div>
                </div>
            </div>

        </div>
    )
}

export default ProjectDetails
