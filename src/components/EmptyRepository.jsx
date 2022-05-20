import React from 'react';
import EmptyIcon from '../assets/img/empty-repository-icon.png'

const EmptyRepository = () =>{

    return(
        <div className='empty-repository'>
            <div className='empty-repository__image'>
                <img src={EmptyIcon} alt='empti-repository-icon'/>
            </div>
            <p className='empty-repository__text'>Repository list is empty</p>
        </div>
    )
}
export default EmptyRepository;
