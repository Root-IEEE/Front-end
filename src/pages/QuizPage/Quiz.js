import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { getExamsThunk } from '../../app/exams/examsSlice';

const QuizPage = () => {

    const dispatch = useDispatch()
    const { exams } = useSelector(({ exams }) => exams)

    useEffect(() => {
        dispatch(getExamsThunk())

    }, [dispatch])

    return (
        <div>

            <div className="page">
                <div className="sidebar">
                    <h3 >Logo</h3>
                    <ul>
                        <li>
                            <NavLink to="/overview">
                                <i className="fa-solid  fa-shapes"></i>
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
                    <div className="header">
                        <h4>Quizzes</h4>
                        <div className="search ">
                            <input type="search" placeholder="Search" />
                        </div>
                    </div>
                    {/* <!-- start head  --> */}

                    <div className="quize-page">
                        {exams.map(exam => <div className="quiz">
                            <div className="file">
                                <div className="text">
                                    <i className="fa-regular fa-file-lines fa-2x"></i>
                                    <div>Quiz 1</div>
                                </div>
                                <div className="num">
                                    <span>45/50</span>
                                </div>

                            </div>
                            <div className="info">
                                <h4>{exam.title}</h4>
                                <p>{exam.description}</p>
                            </div>
                            <NavLink to="/quizdetail"> <i className="fa-solid fa-lg fa-right-long"></i></NavLink>
                        </div>)}
                    </div>

                    {/* <!-- end quizzes box  --> */}
                </div>
            </div>
        </div>


    )
}



export default QuizPage;