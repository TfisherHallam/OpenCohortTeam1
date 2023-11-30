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
    <div className="profile-container">
      <h1></h1>
      <form onSubmit={handleSubmit} className="profile-form">
        <div className="form-group">
          <label htmlFor="firstname">First Name :</label>
          <input
            type="text"
            id="firstname"
            className="input"
            placeholder="First Name"
            defaultValue={currentUser.firstname}
            required
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="lastname">Last Name: </label>
          <input
            type="text"
            id="lastname"
            className="input"
            placeholder="Last Name"
            defaultValue={currentUser.lastname}
            required
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="telephone">Telephone:    </label>
          <input
            type="tel"
            id="telephone"
            className="input"
            placeholder="Mobile"
            defaultValue={currentUser.telephone}
            required
            onChange={handleChange}
          />
        </div>

        <button disabled={loading}>
          {loading ? 'Loading' : 'Update'}
        </button>

        <p className="error-message">{error ? error : ''}</p>
        <p className="success-message">
          {updateSuccess ? 'User updated' : ''}
        </p>
      </form>

      <button onClick={handleDeleteUser} className="delete-button">
        Delete my account:
      </button>
    </div>
  )
};