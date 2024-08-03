import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginSuccess } from '../redux/actions/authActions';
import { useNavigate } from 'react-router-dom';
import { TextField, Button, Container, Box } from '@mui/material';

const Login = () => {
  const [username, setUsername] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = () => {
    const user = { username, mobileNumber };
    dispatch(loginSuccess(user));
    navigate('/dashboard');
  }; 

  return (
    <div className="bg-gray-300 min-h-screen flex items-center justify-center">
      <Container>
        <Box 
          display="flex"
          flexDirection="column" 
          alignItems="center"
          justifyContent="center"
          className="bg-white p-6 rounded shadow-md"
          sx={{ maxWidth: '400px', width: '100%', margin: 'auto' }} 
        > 
          <h2 className='text-[22px] font-bold'>Login</h2>
          <TextField
            label="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            fullWidth
            margin="normal"
            size="small" 
          />
          <TextField
            label="Mobile Number"
            value={mobileNumber}
            onChange={(e) => setMobileNumber(e.target.value)}
            fullWidth
            margin="normal"
            size="small" 
          />
          <Button
            onClick={handleLogin}
            variant="contained"
            color="primary"
            style={{ marginTop: '20px', width: '100%' }} 
            size="medium" 
          >
            Login
          </Button>
        </Box>
      </Container>
    </div>
  );
};

export default Login;
