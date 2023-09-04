
import React, { Component } from 'react'
import Navbar from '../HomePage/Navbar'
import Material from './Material'
import Footer from '../HomePage/Footer'

export class MaterialPage extends Component {
  render() {
    return (
      <div>
     
       <Navbar/>
       <Material/>
       <Footer/>

     </div>
   
    )
  }
}

export default MaterialPage;