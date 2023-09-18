
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { getLessonsThunk } from '../../app/lessons/lessonsSlice';

const LessonPage = () => {

    const dispatch = useDispatch()
    const { lessons } = useSelector(({ lessons }) => lessons)

    useEffect(() => {
        dispatch(getLessonsThunk())
    }, [dispatch])

    return (
        <div>

            <div className="page">
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
                                <input type="search" placeholder="Search" />
                            </div>
                            <span className="notification p-re">
                                <i className="fa-regular fa-bell fa-lg"></i>
                            </span>
                            <img src="img/avatar.png" />
                        </div>
                    </div>
                    {/* <!-- end head  --> */}
                    <div className="header">
                        <h4>Lessons</h4>
                        <div className="search ">
                            <input type="search" placeholder="Search" />
                        </div>
                    </div>
                    <div className="lesson-page">

                        {lessons.map(lesson =>
                            <div className="lesson">
                                <video muted autoplay loop controls
                                    src="img/pexels_videos_1422633 (1080p).mp4" className="cover"></video>
                                <h3>{lesson.title}</h3>
                                <div className="info">
                                    <span><i className="fa-solid fa-file-lines"></i>1 Quiz</span>
                                    <span className="span"><i className="fa-solid fa-eye"></i>3 views</span>
                                </div>
                                <div className="go-to">
                                    <NavLink to="/lessondetail"><i className="fa-solid fa-lg fa-right-long"></i></NavLink>
                                </div>
                            </div>)}


                        {/* <!-- end lessons box --> */}
                    </div>
                </div>
            </div>
        </div>

    )
}


export default LessonPage;