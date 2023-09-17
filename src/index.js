import React from "react";
import { createRoot } from "react-dom/client";
import router from './routerConfig';
import {
  RouterProvider,
 

} from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';
import "./App.css" 




const rootElement = document.getElementById('root');
const root = createRoot(rootElement);
root.render(
  <RouterProvider router={router} />
);

