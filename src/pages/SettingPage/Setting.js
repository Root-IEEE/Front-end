
import { NavLink } from 'react-router-dom';

const  SettingPage =()=> {
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
                    <NavLink to="/message" >
                        <i className="fa-regular fa-comments"></i>
                        <span>messages</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/setting" className="active">
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
                    <img src="img/avatar.png" alt=""/>
                </div>
            </div>
        </div>
    </div>
     </div>
   
    )
  }
    

export default SettingPage;