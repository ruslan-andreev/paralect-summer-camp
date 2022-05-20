import React from 'react';
import { useState, useEffect } from 'react';
import ReactPaginate from 'react-paginate';
import Project from './Project.jsx';
import { projectsPerPage } from '../constant/index.js'

const UserRepository = ({userData}) =>{   
    const [repoUrl, setRepoUrl] = useState(userData.repos_url)
    const [repositoryData, setRepositoryData] = useState([])
    const [pageNumber, setPageNumber] = useState(0)
    const pagesVisited = pageNumber * projectsPerPage
    const pageCount = Math.ceil(userData.public_repos / projectsPerPage)
    
    const changePage = ({selected}) => {
        setPageNumber(selected)
    }

    const getUserRepository = async (repoUrl) =>{
        const response = await fetch(`${repoUrl}?page=${pageNumber + 1}&per_page=${projectsPerPage}`)
        const data = await response.json() 
        setRepositoryData(data)
    }

    const displayProjects = repositoryData.map((project)=>{
        return <Project 
                project = {project}
                key = {project.id}
            />   
    })
        
    useEffect(()=>{
        setRepoUrl(userData.repos_url)
        getUserRepository(repoUrl) 

    },[repoUrl, pageNumber])

    useEffect(()=>{
        setRepoUrl(userData.repos_url)
        setPageNumber(0) 
    },[userData])

    return(
        <div className='user-repository'>
            <p className='user-repository__header'>Repositories ({userData.public_repos})</p>
            <div className='repository-wrapper'>
                {displayProjects}   
            </div>
            <div className='pagination-wrapper'>
            <div className='pagination-counter'> {pagesVisited + 1}-{pagesVisited + displayProjects.length} of {userData.public_repos} items</div>
                <ReactPaginate 
                    previousLabel="<"
                    nextLabel=">"
                    pageCount = {pageCount}
                    onPageChange={changePage}
                    pageRangeDisplayed={3}
                    renderOnZeroPageCount={null}
                    breakLabel="..."

                    containerClassName={'pagination-container'}
                    previousLinkClassName={'previous-btn'}
                    nextLinkClassName={'next-btn'}
                    disabledClassName={'pagination-disabled'}
                    activeClassName={'pagination-active'}
                />
            </div>
        </div>
    )
}
export default UserRepository;
