import React from 'react';

const backgroundImageStyle = {
  backgroundImage: 'url(https://t3.ftcdn.net/jpg/06/31/68/54/360_F_631685409_kS5k87y2gJP8SnzruUqDPPjRYxjNXDOz.jpg)',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  color: 'white', // Set text color to white for better contrast
};

export default function AdminHome() {
  return (
    <div style={backgroundImageStyle}>
      <h1><b>Welcome, Admin!</b></h1>
    </div>
  );
}
