import React from 'react'
import Cover from './cover.jpg'
import Profile from './profileImg.jpg'
import './ProfileCard.css';

const ProfileCard = () => {
  
    const ProfilePage = true;



  return (
    <div className='ProfileCard'>
        
        <div className='ProfileImages'>
            <img src={Cover} alt="" />
            <img src={Profile} alt="" />
        </div>

        <div className='ProfileName'>
            <span>Zendaya MJ</span>
            <span>Web Developer</span>
        </div>
        
        <div className='followStatus'>
            <hr />
            <div>
                <div className='follow'>
                    <span>1m</span>
                    <span>Followers</span>
                </div>
                
                <div className='vl'></div>

                <div className='follow'>
                    <span>308</span>
                    <span>Following</span>
                </div>

                {ProfilePage && (
                   <>
                   <div className='vl'>

                   </div>
                   <div className='follow'>
                        <span>3</span>
                        <span>Posts</span>
                   </div>
                   </> 
                )}
            </div>
            <hr />

        </div>

        <span>
            My Profile
        </span>

    </div>
  )
}

export default ProfileCard