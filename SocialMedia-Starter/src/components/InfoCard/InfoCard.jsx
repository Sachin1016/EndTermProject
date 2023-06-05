import React from 'react'
import './InfoCard.css'
import {UilPen} from '@iconscout/react-unicons'
import ProfileModal from '../ProfileModal/ProfileModal';
import { useState } from 'react';

const InfoCard = () => {

    const [modalOpened , setModalOpened] = useState(false);

  return (
    <div className='InfoCard'>
        <div className='infoHead'>
            <h4>Your Info</h4>
            <div>
            <UilPen className="uil" onClick={()=>setModalOpened(true)}/>
            <ProfileModal modalOpened = {modalOpened} setModalOpened={setModalOpened}/>
            </div>
        </div>

        <div className='Info'>
            <span>
                <b>Status </b>
            </span>
            <span>
                in Realtionship
            </span>
        </div>

        <div className='Info'>
            <span>
                <b>Lives in </b>
            </span>
            <span>
                Talwara
            </span>
        </div>

        <div className='Info'>
            <span>
                <b>Works at </b>
            </span>
            <span>
                Organe Gurugram
            </span>
        </div>

        <button className='button logout-button'>Logout</button>
    </div>
  )
}

export default InfoCard