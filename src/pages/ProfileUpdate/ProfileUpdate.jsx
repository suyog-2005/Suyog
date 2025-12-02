import React from 'react'
import './ProfileUpdate.css'
import assets from '../../assets/assets'
const ProfileUpdate = () => {
  return (
    <div className='profile'>
      <div className="profile-container">
        <form >
          <h3>Prodile Details</h3>
          <label htmlFor="avatar">
            <input type="file" id='avatar' accept='.png , .jpg, .jpeg ' hidden/>
            <img src={assets.avatar_icon} alt="" />
          </label>
          <input type="text" placeholder='Your Name' required/>
          <textarea placeholder='Write Profile bio' required></textarea>
          <button type='submit'>Save</button>
        </form>
        <img className='profile-pic' src={assets.logo_icon} alt="" />
      </div>
      we are on the profile update page
    </div>
  )
}

export default ProfileUpdate
