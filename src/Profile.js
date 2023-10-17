// Profile.js

import React from 'react';
import { Link } from 'react-router-dom'; // Import the Link component
import myImage from './r.jpg';
import myImage1 from './s.jpeg';
import './Profile.css';

function Profile() {
  return (
    <div className="profile">
      <div className="d1" align="center">
        <table id="t1" cellPadding="10" cellSpacing="30">
          <tr>
            <td>
              <img src={myImage} width="130" height="170" border="2" alt="" />
            </td>
            <td>
              <div className="para">
                <h1>
                  <b>Ruchita Dalvi</b>
                </h1>
                <h3>Email:- <a href="mailto:ruchitadalvi20@gmail.com">ruchitadalvi20@gmail.com</a></h3>
                <h3>Contact:- <a href="phone:9359442476">9359442476</a></h3>
                <h3>Git Hub:- <a href="https://github.com/Ruchita-20">Ruchita-20</a></h3>
                <Link to="/contact-form">
                 <button>Contact Me</button>
                </Link>
              </div>
            </td>
          </tr>
        </table>
      </div>

      <div className="content">
        <div className="education card2">
          <h2>Education</h2>
          <table id="edu" cellSpacing="18">
            <tr>
              <th>
                <h3>Diploma</h3>
              </th>
              <th>
                <h3>Degree</h3>
              </th>
            </tr>
            <tr>
              <td>Vidya Prasarak Mandal's Polytechnic (VPM)</td>
              <td>Vivekanand Education Society's Institute of Technology (VESIT)</td>
            </tr>
            <tr>
              <td>Percentage:- 95.94%</td>
              <td>9.3 CGPA</td>
            </tr>
            <tr>
              <td>July 2019 - July 2022</td>
              <td>July 2023 - July 2025</td>
            </tr>
          </table>
        </div>

        <div className="skills card2">
          <h2>Skills</h2>
          <ul>
            <li>Data Structure And Algorithm</li>
            <li>Android Development</li>
            <li>DBMS</li>
            <li>OOP Concepts</li>
          </ul>
          <h2>Languages Known</h2>
          <table width="750">
            <td>
              <details>
                <summary>Programming Languages</summary>
                <ul>
                  <li>C</li>
                  <li>C++</li>
                  <li>Java</li>
                  <li>Python</li>
                </ul>
              </details>
            </td>
            <td>
              <details>
                <summary>Web Languages</summary>
                <ul>
                  <li>Html</li>
                  <li>JavaScript</li>
                  <li>Php</li>
                </ul>
              </details>
            </td>
            <td>
              <details>
                <summary>DBMS</summary>
                <ul>
                  <li>SQL</li>
                </ul>
              </details>
            </td>
          </table>
        </div>
      </div>

      <div className="content">
        <div className="project card3">
          <h2>Smart Home Application Project</h2>
          <table id="t2">
            <tr>
              <td>
                <img src={myImage1} width="400" height="300" border="2" alt="" />
              </td>
              <td>
                <video width="400" height="300" controls>
                  <source src="pro.mp4" type="video/mp4" />
                </video>
              </td>
            </tr>
            <tr>
              <td colSpan="2">
                <audio controls>
                  <source src="voice.mp4" type="audio/mpeg" />
                </audio>
              </td>
            </tr>
          </table>
          <br />
        </div>
      </div>

      {/* Add a button that links to the ContactForm page */}
     
    </div>
  );
}

export default Profile;
