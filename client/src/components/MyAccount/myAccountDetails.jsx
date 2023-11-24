import { useSelector } from 'react-redux';
import { useState } from 'react';
import {
  updateUserStart,
  updateUserSuccess,
  updateUserFailure,
  deleteUserFailure,
  deleteUserStart,
  deleteUserSuccess
} from '../../redux/user/userSlice';
import { useDispatch } from 'react-redux';
export default function Profile() {
  const { currentUser, loading, error } = useSelector((state) => state.user);
  const [formData, setFormData] = useState({});
  const [updateSuccess, setUpdateSuccess] = useState(false);

  const dispatch = useDispatch();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      dispatch(updateUserStart());
      const res = await fetch(`/api/user/update/${currentUser._id}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success === false) {
        dispatch(updateUserFailure(data.message));
        return;
      }
      dispatch(updateUserSuccess(data));
      setUpdateSuccess(true);
    } catch (error) {
      dispatch(updateUserFailure(error.message));
    }
  };

  const handleDeleteUser = async () => {
    try {
      dispatch(deleteUserStart());
      const res = await fetch(`/api/user/delete/${currentUser._id}`, {
        method: 'DELETE',
      });
      const data = await res.json();
      if (data.success === false) {
        dispatch(deleteUserFailure(data.message));
        return;
      }
      dispatch(deleteUserSuccess(data));
    } catch (error) {
      dispatch(deleteUserFailure(error.message));
    }
  };

  return (
    <div>
      <h1>Profile</h1>
      <form onSubmit={handleSubmit}>
        <label>First Name <input
          type='text'
          placeholder='First Name'
          defaultValue={currentUser.firstname}
          id='firstname'
          className='input'
          required
          onChange={handleChange}
        /> </label>
        <br />
        <br />
        <label>Last Name<input
          type='text'
          placeholder='Last Name'
          defaultValue={currentUser.lastname}
          id='lastname'
          className='input'
          required
          onChange={handleChange}
        /> </label>
        <br />
        <br />
        <label>Telephone<input
          type='tel'
          placeholder='Mobile'
          defaultValue={currentUser.telephone}
          id='telephone'
          className='input'
          required
          onChange={handleChange}
        /></label>
        <br />
        <br />
        <button disabled={loading}>
          {loading ? 'Loading' : 'Update'}
        </button>
        <p>{error ? error : ''}</p>
        <p>
          {updateSuccess ? 'User updated' : ''}
        </p>
      </form>
      <button onClick={handleDeleteUser}>Delete my account</button>
    </div>
  )
}