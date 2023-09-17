
import React, { Component } from 'react'
import { Lin, Link, Linkk } from 'react-router-dom';

export class SettingPage extends Component {
  render() {
    return (
      <div>
     
     <div class="page">
        <div class="sidebar">
            <h3>Logo</h3>
            <ul>

                <li>
                    <Link to="/overview">
                        <i class="fa-solid fa-shapes"></i>
                        <span>Overview</span>
                    </Link>
                </li>
                <li>
                    <Link to="/lesson" >
                        <i class="fa-regular fa-circle-play"></i>
                        <span>lessons</span>
                    </Link>
                </li>
                <li>
                    <Link to="/quiz">
                        <i class="fa-regular fa-file-lines"></i>
                        <span>Quizzes</span>
                    </Link>
                </li>
                <li>
                    <Link to="/Message" >
                        <i class="fa-regular fa-comments"></i>
                        <span>messages</span>
                    </Link>
                </li>
                <li>
                    <Link to="/Setting" class="active">
                        <i class="fa-solid fa-gear"></i>
                        <span>settings</span>
                    </Link>
                </li>
            </ul>
            <Link to="/login">
                <i class="fa-solid fa-arrow-right-from-bracket"></i>
                <span>Log Out</span>
            </Link>
        </div>
        <div class="content">
            <div class="head ">
                <div class="info">
                    <h3>Welcome,User</h3>
                    <p>Tue, 12 Sep 2023</p>
                </div>
                <div class="icons">
                    <div class="search ">
                        <input type="search" placeholder="Search"/>
                    </div>
                    <span class="notification p-re">
                        <i class="fa-regular fa-bell fa-lg"></i>
                    </span>
                    <img src="img/avatar.png"/>
                </div>
            </div>
        </div>
    </div>
     </div>
   
    )
  }
}
                  

export default SettingPage;