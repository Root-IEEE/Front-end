
import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export class MessagePage extends Component {
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
                    <Link to="/Message" class="active">
                        <i class="fa-regular fa-comments"></i>
                        <span>messages</span>
                    </Link>
                </li>
                <li>
                    <Link to="/Setting">
                        <i class="fa-solid fa-gear"></i>
                        <span>settings</span>
                    </Link>
                </li>
            </ul>
            <Link to="login">
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
            <div class="header">
                <h4>Massages</h4>
            </div>
            <div class="massage-page">
                <div class="massage">
                    <div class="boxies">
                        <div class="box">
                            <img src="img/friend-01.jpg" class="cover"/>
                            <div class="info">
                                <h6>User</h6>
                                <p>Typing...</p>
                            </div>
                            <div class="btn-shape ">3:30</div>
                        </div>
                        <div class="box">
                            <img src="img/friend-02.jpg" class="cover"/>
                            <div class="info">
                                <h6>User</h6>
                                <p>Typing...</p>
                            </div>
                            <div class="btn-shape ">3:30</div>
                        </div>
                        <div class="box">
                            <img src="img/friend-03.jpg" class="cover"/>
                            <div class="info">
                                <h6>User</h6>
                                <p>Typing...</p>
                            </div>
                            <div class="btn-shape ">3:30</div>
                        </div>
                        <div class="box">
                            <img src="img/friend-04.jpg" class="cover"/>
                            <div class="info">
                                <h6>User</h6>
                                <p>Typing...</p>
                            </div>
                            <div class="btn-shape ">3:30</div>
                        </div>
                    </div>
                    <div class="content">
                        <div class="box">
                            <img src="img/friend-01.jpg" class="cover"/>
                            <div class="info">
                                <h6>User</h6>
                                <p>Online</p>
                            </div>
                        </div>
                       
                        <div class="form">
                         <form action="#">
                            <div class="form-group">
                                <input type="text" class="form-control" id="exampleInputMassage" placeholder="write Link message here..."/>
                                <i class="fa-regular fa-paper-plane"></i>
                              </div>
                         </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

     </div>
   
    )
  }
}
                  

export default MessagePage;