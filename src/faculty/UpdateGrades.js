import React, { useState } from 'react';
import axios from 'axios';
import config from '../config'

function UpdateGrades() {
  const [studentId, setStudentId] = useState('');
  const [newGrade, setNewGrade] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);
    setSuccessMessage('');

    try {
      const response = await axios.post(`${config.url}/updategrades`, {
        studentId: studentId,
        newGrade: newGrade
      });
      if (response.data.success) {
        setSuccessMessage('Grade updated successfully');
      } else {
        setError(response.data.message || 'Failed to update grade');
      }
    } catch (error) {
      setError('Error updating grade');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <h2>Update Grades</h2>
      {error && <p>{error}</p>}
      {successMessage && <p>{successMessage}</p>}
      <table border={1} align="center" style={{ width: '50%', marginTop: '20px' }}>
        <thead>
          <tr>
            <th>Student ID</th>
            <th>New Grade</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <input
                type="text"
                value={studentId}
                onChange={(e) => setStudentId(e.target.value)}
              />
            </td>
            <td>
              <input
                type="text"
                value={newGrade}
                onChange={(e) => setNewGrade(e.target.value)}
              />
            </td>
            <td>
              <button type="submit" onClick={handleSubmit} disabled={isLoading}>
                {isLoading ? 'Updating...' : 'Update Grade'}
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default UpdateGrades;
