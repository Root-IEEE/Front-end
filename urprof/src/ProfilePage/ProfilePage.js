
import React, { Component } from 'react'
import Navbar from '../HomePage/Navbar'
import Profile from './Profile'
import Footer from '../HomePage/Footer'

export class ProfilePage extends Component {
  render() {
    return (
      <div>
     
      <Navbar/>
      <Profile/>
      <Footer/>

     </div>
   
    )
  }
}

export default ProfilePage;