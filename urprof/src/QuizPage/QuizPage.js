
import React, { Component } from 'react'
import Navbar from '../HomePage/Navbar'
import Quiz from './Quiz'
import Footer from '../HomePage/Footer'

export class QuizPage extends Component {
  render() {
    return (
      <div>
     
       <Navbar/>
       <Quiz/>
       <Footer/>

     </div>
   
    )
  }
}

export default QuizPage;