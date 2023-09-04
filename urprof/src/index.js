import React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
 

} from "react-router-dom";


import App from "./App";
import HomePage from "./HomePage/HomePage";
import VideoPage from "./VideoPage/VideoPage";
import MaterialPage from "./MaterialPage/MaterialPage";
import ProfilePage from "./ProfilePage/ProfilePage";
import QuizPage from "./QuizPage/QuizPage";
import MassagePage from "./MassagePage/MassagePage";




const router = createBrowserRouter([
  {
    path: "/",
    element:<App/> 
  },
  {
    path: "/home",
    element:<HomePage/> 
      
    
  },
  {
    path: "/video",
    element:<VideoPage/>
      
    
  },
  {
    path: "/material",
    element:<MaterialPage/>
      
    
  },
  {
    path: "/profile",
    element:<ProfilePage/>
      
    
  },
  {
    path: "/quiz",
    element:<QuizPage/>
      
    
  },
 
  {
    path: "/massage",
    element:<MassagePage/>
      
    
  },
  
  

]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);




















// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';


// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

