import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../../slice/authSlice';
import { RootState } from '../../store';
import DashboardHeader from './DashboardHeader';
import DashboardContent from './DashboardContent';
import { User } from './types';

const DashboardPage: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state: RootState) => state.auth);

  const handleLogout = () => {
    dispatch(logout());
    navigate('/login');
  };

  // Ensure user exists (this should be handled by protected route)
  if (!user) {
    return null;
  }

  const userData: User = {
    id: user.id || '1',
    name: user.name || 'User',
    email: user.email || 'user@example.com',
    avatar: user.avatar,
  };

  return (
    <>
      <DashboardHeader
        title="Dashboard"
        onLogout={handleLogout}
      />

      <DashboardContent user={userData} />
    </>
  );
};

export default DashboardPage;
