import React from 'react'
import { useEffect } from 'react';
import UserIcon from '../assets/img/user-icon.png'

const EmptyPage = ({loading, setLoading}) =>{

    useEffect(()=>{
        setLoading(false)
    },[loading])
    
    return(
        <div className="empty-page _container">
            <div className='empty-page__image'>
                <img src={UserIcon} alt="user-icon" />
            </div>
            <p classNmae='empty-page__text'>User not found</p>
        </div>
    )
}
export default EmptyPage;
