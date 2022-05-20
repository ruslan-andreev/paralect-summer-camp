import React from 'react';
import SearchImage from '../assets/img/search-icon.png'

const StartPage = () =>{

    return(
        <div className='start-page _container'>
            <div className='start-page__image'>
                <img src={SearchImage} alt="search-icon" />
            </div>
            <p className='start-page__text'>Start with searching a GitHub user</p>
        </div>  
    )
}
export default StartPage;
