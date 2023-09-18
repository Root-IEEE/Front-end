
import { NavLink } from 'react-router-dom';

const  LessondetailPage =()=> {
        return (
      <div>

<div className="page">
                      {/*  Sidebar  */}
    <div className="sidebar">
        <h3 >Logo</h3>
        <ul>
            <li>
                <NavLink to="/overview">
                    <i className="fa-solid fa-shapes"></i>
                    <span>Overview</span>
                </NavLink>
            </li>
            <li>
                <NavLink to="/lesson" className="active">
                    <i className="fa-regular fa-circle-play"></i>
                    <span>lessons</span>
                </NavLink>
            </li>
            <li>
                <NavLink to="/quiz">
                    <i className="fa-regular fa-file-lines"></i>
                    <span>Quizzes</span>
                </NavLink>
            </li>
            <li>
                <NavLink to="/message">
                    <i className="fa-regular fa-comments"></i>
                    <span>messages</span>
                </NavLink>
            </li>
            <li>
                <NavLink to="/setting">
                    <i className="fa-solid fa-gear"></i>
                    <span>settings</span>
                </NavLink>
            </li>
        </ul>
        <NavLink to="/login">
            <i className="fa-solid fa-arrow-right-from-bracket"></i>
            <span>Log Out</span>
        </NavLink>
    </div>
    <div className="content">
        {/* <!-- start head  --> */}
        <div className="head ">
            <div className="info">
                <h3>Welcome,User</h3>
                <p>Tue, 12 Sep 2023</p>
            </div>
            <div className="icons">
                <div className="search ">
                    <input type="search" placeholder="Search"/>
                </div>
                <span className="notification p-re">
                    <i className="fa-regular fa-bell fa-lg"></i>
                </span>
                <img src="img/avatar.png"/>
            </div>
        </div>
        {/* <!-- start head  --> */}
        <div className="detalis">
            <div className="activities">
                <video muted loop controls autoplay
                src="img/pexels_videos_1422633 (1080p).mp4" className="cover"></video>
                <h3>First Unit Second lesson</h3>
                <div className="to">
                    <button to="#" className="one">Description</button>
                    <NavLink to="/quizdetail" className="two">Quiz</NavLink>
                </div>
                
                <div className="detali">
                    <p>Lorem ipsum dolor sit amet consectetur. Mollis aliquam nec amet habitant sagittis bibendum <br/>nisl felis viverra. Mollis ultricies scelerisque tortor eu viverra. Fusce habitant tincidunt velit tortor <br/>aenean amet ut pharetra ut. Facilisi eu morbi consectetur sed vitae condimentum consequat.<br/> <NavLink to="www.google.com">https://www.google.com</NavLink> consectetur arcu nisi fermentum. In lorem sapien nullam placerat.<br/> Dolor vitae in vitae at pellentesque id quis sem. Orci vel lectus dui nisl. Mauris ut scelerisque <br/>lectus interdum vitae consequat nascetur. Dui ut porttitor egestas tincidunt faucibus quis.</p>
                    <br/>
                    <p>Lorem ipsum dolor sit amet consectetur. Mollis aliquam nec amet habitant sagittis bibendum <br/>nisl felis viverra. Mollis ultricies scelerisque tortor eu viverra. Fusce habitant tincidunt velit tortor <br/>aenean amet ut pharetra ut. Facilisi eu morbi consectetur sed vitae condimentum consequat.<br/> <NavLink to="www.google.com">https://www.google.com</NavLink> consectetur arcu nisi fermentum. In lorem sapien nullam placerat.<br/> Dolor vitae in vitae at pellentesque id quis sem. Orci vel lectus dui nisl. Mauris ut scelerisque <br/>lectus interdum vitae consequat nascetur. Dui ut porttitor egestas tincidunt faucibus quis.</p>
                </div>
            </div>
            <div className="test">
            <div className="other-data">
                <h3>Next Up</h3>
                <div className="data-row">
                    <span className="layout"></span>
                    <video 
                    src="img/pexels_videos_1422633 (1080p).mp4" className="cover"></video>
                    <span className="lock"><i className="fa-solid fa-lock"></i></span>
                    <div className="info">
                        <h3>First Unit Second lesson</h3>
                        <p className="m-0 fs-14 c-grey">Mollis aliquam nec amet habitant sagittis<br/> bibendum nisl felis viverra.....</p>
                        <div className="view">
                            <span><i className="fa-solid fa-file-lines"></i>1 Quiz</span>
                            <span className="span"><i className="fa-solid fa-eye"></i>3 views</span>
                        </div>
                    </div>
                </div>
                <div className="data-row">
                    <span className="layout"></span>
                    <video 
                    src="img/pexels_videos_1422633 (1080p).mp4" className="cover"></video>
                    <span className="lock"><i className="fa-solid fa-lock"></i></span>
                    <div className="info">
                        <h3>First Unit Second lesson</h3>
                        <p className="m-0 fs-14 c-grey">Mollis aliquam nec amet habitant sagittis<br/> bibendum nisl felis viverra.....</p>
                        <div className="view">
                            <span><i className="fa-solid fa-file-lines"></i>1 Quiz</span>
                            <span className="span"><i className="fa-solid fa-eye"></i>3 views</span>
                        </div>
                    </div>
                </div>
                <div className="data-row">
                    <span className="layout"></span>
                    <video 
                    src="img/pexels_videos_1422633 (1080p).mp4" className="cover"></video>
                    <span className="lock"><i className="fa-solid fa-lock"></i></span>
                    <div className="info">
                        <h3>First Unit Second lesson</h3>
                        <p className="m-0 fs-14 c-grey">Mollis aliquam nec amet habitant sagittis<br/> bibendum nisl felis viverra.....</p>
                        <div className="view">
                            <span><i className="fa-solid fa-file-lines"></i>1 Quiz</span>
                            <span className="span"><i className="fa-solid fa-eye"></i>3 views</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="comments">
            <h3>Comment</h3>
            <div className="comment">
                <img src="img/avatar.png" className="cover"/>
                <form action="#">
                    <input type="text" placeholder="write your comment here..." className="input" name="comment" id="comment"/>
                </form>
            </div>
            <div className="box">
                <img src="img/team-01.png" className="cover"/>
                <div className="info">
                    <h4>ahmed mohamed</h4>
                    <p>habitant sagittis bibendum nisl felis viverra.<br/> Mollis ultricies scelerisque tFusce ha</p>
                </div>
            </div>
            <div className="box">
                <img src="img/team-02.png" className="cover"/>
                <div className="info">
                    <h4>ahmed mohamed</h4>
                    <p>habitant sagittis bibendum nisl felis viverra.<br/> Mollis ultricies scelerisque tFusce ha</p>
                </div>
            </div>
            <div className="box">
                <img src="img/team-03.png" className="cover"/>
                <div className="info">
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

export default LessondetailPage;