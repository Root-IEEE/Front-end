import { NavLink } from "react-router-dom";

const  QuizdetailPage =()=> {
    return (
      <div>
     
     <div className="page">
         <div className="sidebar-quize">
             <h3 >Logo</h3>
             <NavLink to="/quiz"><i className="fa-solid fa-arrow-left fa-2x"></i></NavLink>
         </div>
         <div className="content">
             <div className="head ">
               <div className="info">
                 <h5>Unit 3 practice test 1</h5>
               </div>
               <div className="icons">
                 <h6><span>60:00</span>MINS - time left</h6>
                 <i className="fa-solid fa-stopwatch"></i>
               </div>
             </div>
         </div>
         </div>
     </div>
   
    )
  }
    
export default QuizdetailPage;