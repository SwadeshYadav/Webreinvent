
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { checkAuthStatus } from './redux/actions/authActions';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import List from './components/List';
import DetailView from './components/DetailView';
import PrivateRoute from './PrivateRoute';
import UserDetails from './components/UserDetails'; 

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkAuthStatus());
  }, [dispatch]);

  return (
    <Router>
      <Routes>
        <Route path="/dashboard" element={
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        } />
        <Route path="/list/details" element={
          <PrivateRoute>
            <DetailView />
          </PrivateRoute>
        } />
        <Route path="/list" element={
          <PrivateRoute>
            <List />
          </PrivateRoute>
        } />
        <Route path="/user/:id" element={ 
          <PrivateRoute>
            <UserDetails />
          </PrivateRoute>
        } />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Login />} />
      </Routes> 
    </Router>
  ); 
};

export default App;
