
import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export class LessondetailPage extends Component {
  render() {
    return (
      <div>

<div class="page">
        <div class="sidebar">
            <h3 >Logo</h3>
            <ul>

                <li>
                    <Link to="/overview">
                        <i class="fa-solid fa-shapes"></i>
                        <span>Overview</span>
                    </Link>
                </li>
                <li>
                    <Link to="/lesson" class="active">
                        <i class="fa-regular fa-circle-play"></i>
                        <span>lessons</span>
                    </Link>
                </li>
                <li>
                    <Link to="quiz">
                        <i class="fa-regular fa-file-lines"></i>
                        <span>Quizzes</span>
                    </Link>
                </li>
                <li>
                    <Link to="/message">
                        <i class="fa-regular fa-comments"></i>
                        <span>messages</span>
                    </Link>
                </li>
                <li>
                    <Link to="/setting">
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
            {/* <!-- start head  --> */}
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
            {/* <!-- start head  --> */}
            <div class="detalis">
                <div class="activities">
                    <video muted loop controls autoplay
                    src="img/pexels_videos_1422633 (1080p).mp4" class="cover"></video>
                    <h3>First Unit Second lesson</h3>
                    <div class="to">
                        <button to="#" class="one">Description</button>
                        <button to="#" class="two">Quiz</button>
                    </div>
                    
                    <div class="detali">
                        <p>Lorem ipsum dolor sit amet consectetur. Mollis aliquam nec amet habitant sagittis bibendum <br/>nisl felis viverra. Mollis ultricies scelerisque tortor eu viverra. Fusce habitant tincidunt velit tortor <br/>aenean amet ut pharetra ut. Facilisi eu morbi consectetur sed vitae condimentum consequat.<br/> <Link to="www.google.com">https://www.google.com</Link> consectetur arcu nisi fermentum. In lorem sapien nullam placerat.<br/> Dolor vitae in vitae at pellentesque id quis sem. Orci vel lectus dui nisl. Mauris ut scelerisque <br/>lectus interdum vitae consequat nascetur. Dui ut porttitor egestas tincidunt faucibus quis.</p>
                        <br/>
                        <p>Lorem ipsum dolor sit amet consectetur. Mollis aliquam nec amet habitant sagittis bibendum <br/>nisl felis viverra. Mollis ultricies scelerisque tortor eu viverra. Fusce habitant tincidunt velit tortor <br/>aenean amet ut pharetra ut. Facilisi eu morbi consectetur sed vitae condimentum consequat.<br/> <Link to="www.google.com">https://www.google.com</Link> consectetur arcu nisi fermentum. In lorem sapien nullam placerat.<br/> Dolor vitae in vitae at pellentesque id quis sem. Orci vel lectus dui nisl. Mauris ut scelerisque <br/>lectus interdum vitae consequat nascetur. Dui ut porttitor egestas tincidunt faucibus quis.</p>
                    </div>
                </div>
                <div class="test">
                <div class="other-data">
                    <h3>Next Up</h3>
                    <div class="data-row">
                        <span class="layout"></span>
                        <video 
                        src="img/pexels_videos_1422633 (1080p).mp4" class="cover"></video>
                        <span class="lock"><i class="fa-solid fa-lock"></i></span>
                        <div class="info">
                            <h3>First Unit Second lesson</h3>
                            <p class="m-0 fs-14 c-grey">Mollis aliquam nec amet habitant sagittis<br/> bibendum nisl felis viverra.....</p>
                            <div class="view">
                                <span><i class="fa-solid fa-file-lines"></i>1 Quiz</span>
                                <span class="span"><i class="fa-solid fa-eye"></i>3 views</span>
                            </div>
                        </div>
                    </div>
                    <div class="data-row">
                        <span class="layout"></span>
                        <video 
                        src="img/pexels_videos_1422633 (1080p).mp4" class="cover"></video>
                        <span class="lock"><i class="fa-solid fa-lock"></i></span>
                        <div class="info">
                            <h3>First Unit Second lesson</h3>
                            <p class="m-0 fs-14 c-grey">Mollis aliquam nec amet habitant sagittis<br/> bibendum nisl felis viverra.....</p>
                            <div class="view">
                                <span><i class="fa-solid fa-file-lines"></i>1 Quiz</span>
                                <span class="span"><i class="fa-solid fa-eye"></i>3 views</span>
                            </div>
                        </div>
                    </div>
                    <div class="data-row">
                        <span class="layout"></span>
                        <video 
                        src="img/pexels_videos_1422633 (1080p).mp4" class="cover"></video>
                        <span class="lock"><i class="fa-solid fa-lock"></i></span>
                        <div class="info">
                            <h3>First Unit Second lesson</h3>
                            <p class="m-0 fs-14 c-grey">Mollis aliquam nec amet habitant sagittis<br/> bibendum nisl felis viverra.....</p>
                            <div class="view">
                                <span><i class="fa-solid fa-file-lines"></i>1 Quiz</span>
                                <span class="span"><i class="fa-solid fa-eye"></i>3 views</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="comments">
                <h3>Comment</h3>
                <div class="comment">
                    <img src="img/avatar.png" class="cover"/>
                    <form action="#">
                        <input type="text" placeholder="write your comment here..." class="input" name="comment" id="comment"/>
                    </form>
                </div>
                <div class="box">
                    <img src="img/team-01.png" class="cover"/>
                    <div class="info">
                        <h4>ahmed mohamed</h4>
                        <p>habitant sagittis bibendum nisl felis viverra.<br/> Mollis ultricies scelerisque tFusce ha</p>
                    </div>
                </div>
                <div class="box">
                    <img src="img/team-02.png" class="cover"/>
                    <div class="info">
                        <h4>ahmed mohamed</h4>
                        <p>habitant sagittis bibendum nisl felis viverra.<br/> Mollis ultricies scelerisque tFusce ha</p>
                    </div>
                </div>
                <div class="box">
                    <img src="img/team-03.png" class="cover"/>
                    <div class="info">
                        <h4>ahmed mohamed</h4>
                        <p>habitant sagittis bibendum nisl felis viverra.<br/> Mollis ultricies scelerisque tFusce ha</p>
                    </div>
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
                 

export default LessondetailPage;