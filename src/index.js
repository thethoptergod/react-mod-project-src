import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import NavBar from './components/NavBar';
import Title from './components/Title';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import HBLBB from "./routes/HBLBB";
import TDRS from "./routes/TDRS";
import BBFW from "./routes/BBFW";
import SACD from "./routes/SACD";
import LSBT from "./routes/LSBT";
import JWDB from "./routes/JWDB";
import JWBL from "./routes/JWBL";
import JW18 from "./routes/JW18";
import L11O from "./routes/L11O";
import G15S from "./routes/G15S";
import STTK from "./routes/STTK";
import Contact from "./routes/Contact";



ReactDOM.render(
  <BrowserRouter>
    <Title />
    <Routes>
      <Route path="/" element={<NavBar />}>
      <Route path="home" element={<App pass="6d005c7e35bd4818ad42b0c7bab1c28b"/>} />
      <Route path="HBLBB" element={<HBLBB lat="41.686908" long="-74.176883" pass="key=AIzaSyATBJXGGm80JZoJt7TORuWcxFCN_MNi2k4" id="11001" />} />
      <Route path="TDRS" element={<TDRS lat="41.887372" long="-73.728530" pass="key=AIzaSyATBJXGGm80JZoJt7TORuWcxFCN_MNi2k4" id="11129" />} />
      <Route path="BBFW" element={<BBFW lat="38.222983" long="-85.137184" pass="key=AIzaSyATBJXGGm80JZoJt7TORuWcxFCN_MNi2k4" id="11001" />} />
      <Route path="SACD" element={<SACD lat="37.864279" long="-80.400168" pass="key=AIzaSyATBJXGGm80JZoJt7TORuWcxFCN_MNi2k4" />} />
      <Route path="LSBT" element={<LSBT lat="37.793350" long="-85.465600" pass="key=AIzaSyATBJXGGm80JZoJt7TORuWcxFCN_MNi2k4" id="12127" />} />
      <Route path="JWDB" element={<JWDB lat="55.950466" long="-3.207577" pass="key=AIzaSyATBJXGGm80JZoJt7TORuWcxFCN_MNi2k4" id="11008" />} />
      <Route path="JWBL" element={<JWBL lat="55.950466" long="-3.207577" pass="key=AIzaSyATBJXGGm80JZoJt7TORuWcxFCN_MNi2k4" />} />
      <Route path="JW18" element={<JW18 lat="55.950466" long="-3.207577" pass="key=AIzaSyATBJXGGm80JZoJt7TORuWcxFCN_MNi2k4" />} />
      <Route path="L11O" element={<L11O lat="55.635648" long="-6.126183" pass="key=AIzaSyATBJXGGm80JZoJt7TORuWcxFCN_MNi2k4" />} />
      <Route path="G15S" element={<G15S lat="57.455152" long="-3.128712" pass="key=AIzaSyATBJXGGm80JZoJt7TORuWcxFCN_MNi2k4" id="12158" />} />
      <Route path="STTK" element={<STTK lat="34.892574" long="135.674487" pass="key=AIzaSyATBJXGGm80JZoJt7TORuWcxFCN_MNi2k4" />} />
      <Route path="contact" element={<Contact />} />
      <Route path="/" element={<Navigate replace to="/home" />} />
      </Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

