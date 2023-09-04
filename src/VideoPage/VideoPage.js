

import React, { Component } from 'react'
import Navbar from '../HomePage/Navbar'
import Video from './Video'
import Footer from '../HomePage/Footer'

export class VideoPage extends Component {
  render() {
    return (
      <div>
     
       <Navbar/>
       <Video/>
       <Footer/>

     </div>
   
    )
  }
}

export default VideoPage;