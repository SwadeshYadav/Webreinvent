import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Typography, Paper } from '@mui/material';
import { fetchUserById } from '../services/api';

const UserDetails = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadUser = async () => {
      try {
        const response = await fetchUserById(id);
        setUser(response.data.data);
      } catch (error) {
        console.error('Error fetching user:', error);
      } finally {
        setLoading(false);
      }
    };

    loadUser();
  }, [id]);

  if (loading) return <Typography variant="h6">Loading...</Typography>;
  if (!user) return <Typography variant="h6">User not found</Typography>;

  return (
    <Paper elevation={3} style={{ padding: '20px' }}>
      <Typography variant="h4" gutterBottom>
        {user.first_name} {user.last_name}
      </Typography>
      <img
        src={user.avatar}
        alt={`${user.first_name} ${user.last_name}`}
        style={{ width: '100px', borderRadius: '50%' }}
      />
      <Typography variant="body1">
        <span className="text-black">Email: </span>
        <span className="text-blue-500">{user.email}</span>
      </Typography>
      <Typography variant="body1">
        <span className="text-black">ID: </span>
        <span className="text-blue-500">{user.id}</span>
      </Typography>
    </Paper>
  );
};

export default UserDetails;
