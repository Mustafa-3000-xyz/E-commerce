import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';

import App from './App.jsx';
import './index.css';
import { RecoilRoot } from "recoil";
// ======================================================= //
createRoot(document.getElementById('root')).render(
  <RecoilRoot>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </RecoilRoot>
)
