
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from './Layout';
import { Typography, Paper, Grid } from '@mui/material';
import { fetchUsers } from '../services/api';
  
const Dashboard = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const loadAllUsers = async () => {
      try {
        let allUsers = [];
        let page = 1;
        let totalPages = 1;

        do {
          const response = await fetchUsers(page);
          allUsers = [...allUsers, ...response.data.data];
          totalPages = response.data.total_pages;
          page += 1;
        } while (page <= totalPages);

        setUsers(allUsers);
      } catch (error) {
        console.error('Error fetching users:', error);
      } finally {
        setLoading(false);
      }
    };

    loadAllUsers();
  }, []);

  return (
    <Layout>
      <Typography variant="h4" gutterBottom className="text-blue-500">
        Dashboard
      </Typography>
      {loading ? (
        <Typography variant="h6">Loading...</Typography>
      ) : (
        <Grid container spacing={3} className="grid-container">
          {users.map((user) => (
            <Grid item xs={12} md={6} lg={4} key={user.id}>
              <Paper
                elevation={3}
                style={{ padding: '20px', height: '100%', cursor: 'pointer' }}
                onClick={() => navigate(`/user/${user.id}`)}
              >
                <img
                  src={user.avatar}
                  alt={`${user.first_name} ${user.last_name}`}
                  style={{ width: '100px', borderRadius: '50%' }}
                />
                <Typography variant="h6" gutterBottom className="font-bold mt-1">
                  {user.first_name} {user.last_name}
                </Typography>
                <Typography variant="body1">
                  <span className="text-black">Email: </span>
                  <span className="text-blue-500">{user.email}</span>
                </Typography>
                
              </Paper>
            </Grid>
          ))}
        </Grid>
      )}
    </Layout>
  );
};

export default Dashboard;
