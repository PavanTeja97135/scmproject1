// import React, { useState } from 'react';
// import axios from 'axios';
// import config from '../config'

// const PostAttendance = () => {
//   const [studentId, setStudentId] = useState('');
//   const [courseId, setCourseId] = useState('');
//   const [status, setStatus] = useState(''); 

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await axios.post(`${config.url}/attendance`, {
//         studentId,
//         courseId,
//         status,
//       });

//       setStatus('Success: Attendance posted!');
//     } catch (error) {
//       console.error(error);
//       setStatus('Error: An error occurred while posting attendance.');
//     }
//   };

//   return (
//     <div>
//       <h3 align="center">Post Attendence</h3>
//     <form onSubmit={handleSubmit}>
//       <label className="white-label">
//         Student ID:
//         <input type="text" value={studentId} onChange={(e) => setStudentId(e.target.value)} required />
//       </label>
//       <label className="white-label">
//         Course ID:
//         <input type="text" value={courseId} onChange={(e) => setCourseId(e.target.value)} required />
//       </label>
//       <label className="white-label">
//         Status:
//         <select value={status} onChange={(e) => setStatus(e.target.value)} required>
//           <option value="">-- Select Status --</option>
//           <option value="Present">Present</option>
//           <option value="Absent">Absent</option>
//         </select>
//       </label>
//       <button type="submit">Submit Attendance</button>
//       <p>{status}</p>
//     </form>
//     </div>
//   );
// };

// export default PostAttendance;