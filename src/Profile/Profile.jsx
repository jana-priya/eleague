import React from 'react';
import {Footer} from '../Components/Footer/Footer';
import {Cards} from '../Components/Cards/Cards';
import { ProfilePart } from '../Components/ProfilePart/ProfilePart';

export const Profile = () => {
  return (
  
    <div className='bg-gray-900 '>
        
        <ProfilePart/>
        <Cards/>
        <Footer/>
    </div>
  )
}
