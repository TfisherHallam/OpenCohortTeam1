import React from 'react';
import './adminDashboard.css';
import '../../App.css';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux/es/hooks/useSelector.js';
import Content404items from '../content404/content404';
import Cookies from 'js-cookie';
const PORT = process.env.PORT || 3001;

function AdminDashboard() {
  const { currentUser } = useSelector(state => state.user)
  const [results, setResults] = useState(null);
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

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

const getData = async () => {
    try {
      const res = await fetch(`http://localhost:${PORT}/api/admin/`, {
       method: 'GET',
       headers: {
        'Content-Type': 'application/json',
        'Cookie': Cookies.get('access_token')
       } 
      });
      if (res.ok) {
        const data = await res.json();

        setResults(data);
      } else {
        console.error('Failed to fetch data');
      }
    } catch (error) {
      console.error('Error during data fetching:', error);
    }
  };

  const handleUserUpdate = async (userId) => {
    try {
      const res = await fetch(`/api/admin/${userId}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });
      const data = await res.json();
      if (data.success === false) {
        console.log(data.message);
        return;
      }
      setResults((prev) => prev.filter((result) => result._id !== userId));
      getData();
    } catch (error) {
      console.log(error.message);
    }
  };

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
      getData();
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
                      <td className='userCollong'><form>
                        <select id='userStateCode' onChange={handleChange}>
                          <option value="New User">New User</option>
                          <option value="Blocked User">Blocked User</option>
                          <option value="Super User">Super User</option>
                          <option value="Admin">Admin</option>
                        </select></form><button onClick={() => handleUserUpdate(result._id)}>Change access</button></td>
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