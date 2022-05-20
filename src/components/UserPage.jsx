import React from 'react';
import UserInfo from './UserInfo.jsx';
import UserRepository from './UserRepository.jsx';
import EmptyRepository from './EmptyRepository.jsx';

const UserPage = ({userData}) =>{
    
    return (
        <div className='user-page _container'>
            <UserInfo 
                userData = {userData}
                />   
            {userData.public_repos > 0 ? <UserRepository userData = {userData}/> :
                <EmptyRepository />
            }   
        </div>
    )
}
export default UserPage;