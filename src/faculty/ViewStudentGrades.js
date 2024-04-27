import React, { useState, useEffect } from 'react';
import axios from 'axios';
import config from '../config'

function ViewUpdateGrades() {
  const [grades, setGrades] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchGrades = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(`${config.url}/viewgrades`);
        setGrades(response.data);
      } catch (error) {
        setError('Error fetching grades');
      } finally {
        setIsLoading(false);
      }
    };
    
    fetchGrades();
  }, []);

  const updateGrade = async (gradeId, newGrade) => {
    setIsLoading(true);
    setError(null);

    try {
      await axios.put(`${config.url}/updategrades/${gradeId}`, { newGrade });
      // Assuming the server updates the grade successfully
      setGrades(prevGrades => prevGrades.map(grade => {
        if (grade.gradeId === gradeId) {
          return { ...grade, grade: newGrade };
        }
        return grade;
      }));
    } catch (error) {
      setError('Error updating grade');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <h2 align="center">View Grades</h2>
      {isLoading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      <table border="1" style={{ borderCollapse: 'collapse', width: '100%' }}>
        <thead>
          <tr>
            <th>Student ID</th>
            <th>Subject</th>
            <th>Grade</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {grades.map(grade => (
            <tr key={grade.gradeId}>
              <td>{grade.studentId}</td>
              <td>{grade.subject}</td>
              <td>
                <input
                  type="text"
                  value={grade.grade}
                  onChange={(e) => updateGrade(grade.gradeId, e.target.value)}
                />
              </td>
              <td>
                <button onClick={() => updateGrade(grade.gradeId, grade.grade)}>Update</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ViewUpdateGrades;
