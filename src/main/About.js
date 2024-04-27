import React from 'react';
import './style.css';

export default function About() {
  const backgroundImageStyle = {
    backgroundImage: `url("https://th.bing.com/th/id/OIP.WOabeV0nhrJ8eYeMjpLwlgAAAA?rs=1&pid=ImgDetMain")`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    color: 'white', // Set text color to white
  };

  return (
    <div className="about-container">
      <h4 className="about-title">About</h4>
      <div className="about-content" style={backgroundImageStyle}>
        <h2 align="center" className="content-text">
          Course management refers to the process of designing, organizing, delivering, <br/>
          and evaluating academic courses. It involves the use of various strategies, <br/>
          tools, and techniques to ensure that the learning objectives are met, and the <br/>
          students are engaged and motivated throughout the course.
        </h2>
      </div>
    </div>
  );
}
