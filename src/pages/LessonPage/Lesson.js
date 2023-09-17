
import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export class LessonPage extends Component {
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
                    <Link to="/quiz">
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
            {/* <!-- end head  --> */}
            <div class="header">
                <h4>Lessons</h4>
                <div class="search ">
                    <input type="search" placeholder="Search"/>
                </div>
            </div>
            <div class="lesson-page">
                {/* input */}
                <div class="lesson">
                    <video muted autoplay loop controls
                    src="img/pexels_videos_1422633 (1080p).mp4" class="cover"></video>
                    <h3>First Unit Second lesson</h3>
                    <div class="info">
                        <span><i class="fa-solid fa-file-lines"></i>1 Quiz</span>
                        <span class="span"><i class="fa-solid fa-eye"></i>3 views</span>
                    </div>
                    <div class="go-to">
                        <Link to="lessondetail.html">Open <i class="fa-solid fa-right-long"></i></Link>
                    </div>
                </div>
                <div class="lesson">
                    <span class="layout"></span>
                    <video muted 
                    src="img/pexels_videos_1422633 (1080p).mp4" class="cover"></video>
                    <span class="lock"><i class="fa-solid fa-lock"></i></span>
                    <h3>First Unit Second lesson</h3>
                    <div class="info">
                        <span><i class="fa-solid fa-file-lines"></i>1 Quiz</span>
                        <span class="span"><i class="fa-solid fa-eye"></i>3 views</span>
                    </div>
                    <div class="go-to">
                        <p><i class="fa-solid fa-circle-exclamation"></i>Complete previous lessons to watch this lesson</p>
                    </div>
                </div>
                <div class="lesson">
                    <span class="layout"></span>
                    <video muted 
                    src="img/pexels_videos_1422633 (1080p).mp4" class="cover"></video>
                    <span class="lock"><i class="fa-solid fa-lock"></i></span>
                    <h3>First Unit Second lesson</h3>
                    <div class="info">
                        <span><i class="fa-solid fa-file-lines"></i>1 Quiz</span>
                        <span class="span"><i class="fa-solid fa-eye"></i>3 views</span>
                    </div>
                    <div class="go-to">
                        <p><i class="fa-solid fa-circle-exclamation"></i>Complete previous lessons to watch this lesson</p>
                    </div>
                </div>
                <div class="lesson">
                    <span class="layout"></span>
                    <video muted 
                    src="img/pexels_videos_1422633 (1080p).mp4" class="cover"></video>
                    <span class="lock"><i class="fa-solid fa-lock"></i></span>
                    <h3>First Unit Second lesson</h3>
                    <div class="info">
                        <span><i class="fa-solid fa-file-lines"></i>1 Quiz</span>
                        <span class="span"><i class="fa-solid fa-eye"></i>3 views</span>
                    </div>
                    <div class="go-to">
                        <p><i class="fa-solid fa-circle-exclamation"></i>Complete previous lessons to watch this lesson</p>
                    </div>
                </div>
                <div class="lesson">
                    <span class="layout"></span>
                    <video muted 
                    src="img/pexels_videos_1422633 (1080p).mp4" class="cover"></video>
                    <span class="lock"><i class="fa-solid fa-lock"></i></span>
                    <h3>First Unit Second lesson</h3>
                    <div class="info">
                        <span><i class="fa-solid fa-file-lines"></i>1 Quiz</span>
                        <span class="span"><i class="fa-solid fa-eye"></i>3 views</span>
                    </div>
                    <div class="go-to">
                        <p><i class="fa-solid fa-circle-exclamation"></i>Complete previous lessons to watch this lesson</p>
                    </div>
                </div>
                <div class="lesson">
                    <span class="layout"></span>
                    <video muted 
                    src="img/pexels_videos_1422633 (1080p).mp4" class="cover"></video>
                    <span class="lock"><i class="fa-solid fa-lock"></i></span>
                    <h3>First Unit Second lesson</h3>
                    <div class="info">
                        <span><i class="fa-solid fa-file-lines"></i>1 Quiz</span>
                        <span class="span"><i class="fa-solid fa-eye"></i>3 views</span>
                    </div>
                    <div class="go-to">
                        <p><i class="fa-solid fa-circle-exclamation"></i>Complete previous lessons to watch this lesson</p>
                    </div>
                </div>
                <div class="lesson">
                    <span class="layout"></span>
                    <video muted 
                    src="img/pexels_videos_1422633 (1080p).mp4" class="cover"></video>
                    <span class="lock"><i class="fa-solid fa-lock"></i></span>
                    <h3>First Unit Second lesson</h3>
                    <div class="info">
                        <span><i class="fa-solid fa-file-lines"></i>1 Quiz</span>
                        <span class="span"><i class="fa-solid fa-eye"></i>3 views</span>
                    </div>
                    <div class="go-to">
                        <p><i class="fa-solid fa-circle-exclamation"></i>Complete previous lessons to watch this lesson</p>
                    </div>
                </div>
                <div class="lesson">
                    <span class="layout"></span>
                    <video muted 
                    src="img/pexels_videos_1422633 (1080p).mp4" class="cover"></video>
                    <span class="lock"><i class="fa-solid fa-lock"></i></span>
                    <h3>First Unit Second lesson</h3>
                    <div class="info">
                        <span><i class="fa-solid fa-file-lines"></i>1 Quiz</span>
                        <span class="span"><i class="fa-solid fa-eye"></i>3 views</span>
                    </div>
                    <div class="go-to">
                        <p><i class="fa-solid fa-circle-exclamation"></i>Complete previous lessons to watch this lesson</p>
                    </div>
                </div>
               
                {/* <!-- end lessons box --> */}
            </div>
        </div>
    </div>
    </div>


     
   
   )
 }
}
                 

export default LessonPage;