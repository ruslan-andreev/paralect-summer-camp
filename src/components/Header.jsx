import React from 'react';
import GitImage from '../assets/img/logo.png';
import SearchIcon from '../assets/img/search-icon.png';

const Header = ({setUserName, getUserData}) =>{
    
    const getUserName = (event) => {
        setUserName(event.target.value)
    }

    const handlerSubmit = (event) => {
        event.preventDefault()
        getUserData()
    }

    return (
        <header className='header'>
            <div className='header__content _container'>
                <div className='header-logo'>
                    <img className='logo _img-responsive' src={GitImage} alt='logo'/>
                </div>
                <form className='input-wrapper' onSubmit={(event)=>{handlerSubmit(event)}}>
                    <span className='input-icon'><img className='_img-responsive' src={SearchIcon} alt='search-icon'/></span>
                    <input type="text" className='input-search' placeholder='Enter GitHub username'
                        onChange={(event) => {getUserName (event)}}
                    />
                </form>
            </div>
        </header>
    )
}
export default Header;
