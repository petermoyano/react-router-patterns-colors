import React from 'react';
import './index.css';
import App from './App';
import NewColorForm from './routes/NewColorForm';
import reportWebVitals from './reportWebVitals';
import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import Color from './components/Color';


const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
  <Routes>
    <Route  path="/" element={<App/>} />
    <Route  path="/newcolor" element={<NewColorForm/>} />
    <Route path="/:color" element={<Color />} />
    <Route path="*" element={<Navigate to="/" replace />}
    />
  </Routes>
  </BrowserRouter>,
  rootElement);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
