import React from 'react';
import './adminDashboard.css';
import '../../App.css';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux/es/hooks/useSelector.js';
import Content404items from '../content404/content404';
const PORT = process.env.PORT || 3001;

function AdminDashboard() {
  const { currentUser } = useSelector(state => state.user)
  const [results, setResults] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(`http://localhost:${PORT}/api/admin/`);
        if (response.ok) {
          const data = await response.json();
          setResults(data);
        } else {
          console.error('Failed to fetch data');
        }
      } catch (error) {
        console.error('Error during data fetching:', error);
      }
    }
    fetchData();
  }, []);

  const handleUserDeletion = async (userId) => {
    try {
      const res = await fetch(`/api/admin/${userId}`, {
        method: 'DELETE',
      });
      const data = await res.json();
      if (data.success === false) {
        console.log(data.message);
        return;
      }
      setResults((prev) => prev.filter((result) => result._id !== userId))
    } catch (error) {
      console.log(error.message);
    }
  };

  if (currentUser && currentUser.userStateCode === "Admin") {
    return (
      <div>
        <h1>Users:</h1>
        <div>
          <div className='textcontainer'>
            <table className='userTable'>
              <tr>
                <th className='userCollong'>Username</th>
                <th className='userCollong'>Email</th>
                <th className='userCol'>State</th>
                <th className='userCol'>Change State</th>
                <th className='userCol'>Delete</th>
              </tr>
              <tbody className='userTable'>
                {results && results.length > 0 ? (
                  results.map((result) => (
                    <tr key={result.id}>
                      <td className='userCollong'>{result.username}</td>
                      <td className='userCollong'>{result.email}</td>
                      <td className='userCol'>{result.userStateCode}
                      </td>

                      <td className='userCol'><Link to={`/AdminUserview/${result._id}`}><button>Change access</button></Link></td>
                      <td className='userCol'><button onClick={() => handleUserDeletion(result._id)}>Delete user</button></td>
                    </tr>
                  ))) : (
                  <tr>
                    <td colSpan="5">No users found</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  } return (
    <Content404items />
  )
}

export default AdminDashboard;