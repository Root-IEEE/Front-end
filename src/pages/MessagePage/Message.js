
import { NavLink } from 'react-router-dom';


const  MessagePage =()=> {
    return (
      <div>
     
<div className="page">
<div className="sidebar">
    <h3>Logo</h3>
    <ul>

        <li>
            <NavLink to="/overview">
                <i className="fa-solid fa-shapes"></i>
                <span>Overview</span>
            </NavLink>
        </li>
        <li>
            <NavLink to="/lesson" >
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
    <div className="header">
        <h4>Massages</h4>
    </div>
    <div className="massage-page">
        <div className="massage">
            <div className="boxies">
                <div className="box">
                    <img src="img/friend-01.jpg" className="cover"/>
                    <div className="info">
                        <h6>User</h6>
                        <p>Typing...</p>
                    </div>
                    <div className="btn-shape ">3:30</div>
                </div>
                <div className="box">
                    <img src="img/friend-02.jpg" className="cover"/>
                    <div className="info">
                        <h6>User</h6>
                        <p>Typing...</p>
                    </div>
                    <div className="btn-shape ">3:30</div>
                </div>
                <div className="box">
                    <img src="img/friend-03.jpg" className="cover"/>
                    <div className="info">
                        <h6>User</h6>
                        <p>Typing...</p>
                    </div>
                    <div className="btn-shape ">3:30</div>
                </div>
                <div className="box">
                    <img src="img/friend-04.jpg" className="cover"/>
                    <div className="info">
                        <h6>User</h6>
                        <p>Typing...</p>
                    </div>
                    <div className="btn-shape ">3:30</div>
                </div>
            </div>
            <div className="content">
                <div className="box">
                    <img src="img/friend-01.jpg" className="cover"/>
                    <div className="info">
                        <h6>User</h6>
                        <p>Online</p>
                    </div>
                </div>
                
                <div className="form">
                    <form action="#">
                    <div className="form-group">
                        <input type="text" className="form-control" id="exampleInputMassage" placeholder="write a message here..."/>
                        <i className="fa-regular fa-paper-plane"></i>
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
                  

export default MessagePage;