
import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export class QuizPage extends Component {
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
                    <Link to="/lesson" >
                        <i class="fa-regular fa-circle-play"></i>
                        <span>lessons</span>
                    </Link>
                </li>
                <li>
                    <Link to="/quiz" class="active">
                        <i class="fa-regular fa-file-lines"></i>
                        <span>Quizzes</span>
                    </Link>
                </li>
                <li>
                    <Link to="/Message">
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
            <div class="header">
                <h4>Quizzes</h4>
                <div class="search ">
                    <input type="search" placeholder="Search"/>
                </div>
            </div>
            {/* <!-- start head  --> */}

             <div class="quize-page">
                <div class="quiz">
                    <div class="file">
                        <div class="text">
                        <i class="fa-regular fa-file-lines fa-2x"></i>
                        <div>Quiz 1</div>
                        </div>
                        <div class="num">
                            <span>45/50</span>
                        </div>
                     
                    </div>
                    <div class="info">
                        <h4>Quiz name here</h4>
                        <p>First Unit second lesson ( lesson name )</p>
                    </div>
                    <Link to="#">Open <i class="fa-solid fa-right-long"></i></Link>
                 </div>
                <div class="quiz">
                    <div class="file">
                        <div class="text">
                            <i class="fa-regular fa-file-lines fa-2x"></i>
                        <div>Quiz 2</div>
                        </div>
                        <div class="num">
                            <span>45/50</span>
                        </div>
                     
                    </div>
                    <div class="info">
                        <h4>Quiz name here</h4>
                        <p>First Unit second lesson ( lesson name )</p>
                    </div>
                    <Link to="#">Open <i class="fa-solid fa-right-long"></i></Link>
                 </div>
                <div class="quiz">
                    <div class="file">
                        <div class="text">
                            <i class="fa-regular fa-file-lines fa-2x"></i>
                        <div>Quiz 3</div>
                        </div>
                        <div class="num">
                            <span>45/50</span>
                        </div>
                     
                    </div>
                    <div class="info">
                        <h4>Quiz name here</h4>
                        <p>First Unit second lesson ( lesson name )</p>
                    </div>
                    <Link to="#">Open <i class="fa-solid fa-right-long"></i></Link>
                 </div>
                <div class="quiz">
                    <div class="file">
                        <div class="text">
                            <i class="fa-regular fa-file-lines fa-2x"></i>
                        <div class="one">Quiz 4</div>
                        </div>
                        <div class="num">
                            <span>45/50</span>
                        </div>
                     
                    </div>
                    <div class="info">
                        <h4>Quiz name here</h4>
                        <p>First Unit second lesson ( lesson name )</p>
                    </div>
                    <Link to="#">Open <i class="fa-solid fa-right-long"></i></Link>
                 </div>
                <div class="quiz">
                    <div class="file">
                        <div class="text">
                            <i class="fa-regular fa-file-lines fa-2x"></i>
                        <div class="one">Quiz 5</div>
                        </div>
                        <div class="num">
                            <span class="mark">25/50</span>
                        </div>
                     
                    </div>
                    <div class="info">
                        <h4>Quiz name here</h4>
                        <p>First Unit second lesson ( lesson name )</p>
                    </div>
                    <Link to="#">Open <i class="fa-solid fa-right-long"></i></Link>
                 </div>
                <div class="quiz">
                    <div class="file">
                        <div class="text">
                            <i class="fa-regular fa-file-lines fa-2x"></i>
                        <div class="one">Quiz 6</div>
                        </div>
                        <div class="num">
                            <span class="mark">25/50</span>
                        </div>
                     
                    </div>
                    <div class="info">
                        <h4>Quiz name here</h4>
                        <p>First Unit second lesson ( lesson name )</p>
                    </div>
                    <Link to="#">Open <i class="fa-solid fa-right-long"></i></Link>
                 </div>
                <div class="quiz">
                    <div class="file">
                        <div class="text">
                            <i class="fa-regular fa-file-lines fa-2x"></i>
                        <div class="one">Quiz 7</div>
                        </div>
                        <div class="num">
                            <span>45/50</span>
                        </div>
                     
                    </div>
                    <div class="info">
                        <h4>Quiz name here</h4>
                        <p>First Unit second lesson ( lesson name )</p>
                    </div>
                    <Link to="#">Open <i class="fa-solid fa-right-long"></i></Link>
                 </div>
                <div class="quiz">
                    <div class="file">
                        <div class="text">
                            <i class="fa-regular fa-file-lines fa-2x"></i>
                        <div class="one">Quiz 8</div>
                        </div>
                        <div class="num">
                            <span>45/50</span>
                        </div>
                     
                    </div>
                    <div class="info">
                        <h4>Quiz name here</h4>
                        <p>First Unit second lesson ( lesson name )</p>
                    </div>
                    <Link to="#">Open <i class="fa-solid fa-right-long"></i></Link>
                 </div>
                <div class="quiz">
                    <div class="file">
                        <div class="text">
                            <i class="fa-regular fa-file-lines fa-2x"></i>
                        <div class="one">Quiz 9</div>
                        </div>
                        <div class="num">
                            <span>45/50</span>
                        </div>
                     
                    </div>
                    <div class="info">
                        <h4>Quiz name here</h4>
                        <p>First Unit second lesson ( lesson name )</p>
                    </div>
                    <Link to="#">Open <i class="fa-solid fa-right-long"></i></Link>
                 </div>
                <div class="quiz">
                    <div class="file">
                        <div class="text">
                            <i class="fa-regular fa-file-lines fa-2x"></i>
                        <div class="one">Quiz 10</div>
                        </div>
                        <div class="num">
                            <span class="mark">25/50</span>
                        </div>
                     
                    </div>
                    <div class="info">
                        <h4>Quiz name here</h4>
                        <p>First Unit second lesson ( lesson name )</p>
                    </div>
                    <Link to="#">Open <i class="fa-solid fa-right-long"></i></Link>
                 </div>
                <div class="quiz">
                    <div class="file">
                        <div class="text">
                            <i class="fa-regular fa-file-lines fa-2x"></i>
                        <div class="one">Quiz 11</div>
                        </div>
                        <div class="num">
                            <span>45/50</span>
                        </div>
                     
                    </div>
                    <div class="info">
                        <h4>Quiz name here</h4>
                        <p>First Unit second lesson ( lesson name )</p>
                    </div>
                    <Link to="#">Open <i class="fa-solid fa-right-long"></i></Link>
                 </div>
                <div class="quiz">
                    <div class="file">
                        <div class="text">
                            <i class="fa-regular fa-file-lines fa-2x"></i>
                        <div class="one">Quiz 11</div>
                        </div>
                        <div class="num">
                            <span class="mark">25/50</span>
                        </div>
                     
                    </div>
                    <div class="info">
                        <h4>Quiz name here</h4>
                        <p>First Unit second lesson ( lesson name )</p>
                    </div>
                    <Link to="#">Open <i class="fa-solid fa-right-long"></i></Link>
                 </div>
             </div>
           
             {/* <!-- end quizzes box  --> */}
            </div>
        </div>
    </div>

   
    )
  }
}
                  

export default QuizPage;