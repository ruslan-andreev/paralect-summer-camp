import React from 'react';

const UserInfo = ({userData}) =>{

    return(
        <div className='user-info'>
            <div className='user-info__image'>
                <img className='_img-responsive' src={userData.avatar_url} alt="user-image" />
            </div>
            <div className='user-info__wrapper'>
                <p className='user-name'>{userData.name}</p>
                <p className='user-login'><a className='user-login__link' href={userData.html_url} target = "_blank">{userData.login}</a></p>
                <div className='user-contacts'>
                    <span className='user-contacts__followers'>{userData.followers} followers</span>
                    <span className='user-contacts__following'>{userData.following} following</span>
                </div>
            </div>
        </div>
    )
}
export default UserInfo;

/**
 * const [userAvatar, setUserAvatar] = useState()
    const getUserAvatar = async (userData) => {
        console.log(userData.avatar_url)
        console.log(userAvatar)
        const response = await fetch(userData.avatar_url)
        const data = await response.json()
        
        console.log(data)   
    }

    useEffect(()=>{
        console.log('user info')
        getUserAvatar(userData)
    }, [])
 */