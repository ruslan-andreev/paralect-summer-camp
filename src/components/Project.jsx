import React from 'react';

const Project = ({project}) => {
    
    return(
        <div className='repository-item'>
            <p className='repository-item__title'><a href={project.html_url} target='_blank'>{project.name}</a></p>
            <p className='repository-item__description'>{project.description}</p>
        </div>
    )
}
export default Project;