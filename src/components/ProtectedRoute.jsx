import React, { useContext } from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import { AuthContext } from '../context/FirebaseAuthContext';

export default function ProtectedRoute() {
  const authValue = useContext(AuthContext);

  if (authValue.userDataPresent) {
    if (authValue.user == null) {
      return <Navigate to="/login" />;
    }
    return <Outlet />;
  }
  return null;
}
