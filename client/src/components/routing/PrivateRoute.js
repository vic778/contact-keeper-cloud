import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import AuthContext from '../../context/auth/authContext';

const PrivateRoutes = ({ component: Component, ...rest }) => {
  const authContext = useContext(AuthContext);
  const { isAuthenticated, loading } = authContext;
  return (
    <Route
      {...rest}
      render={(props) =>
        !isAuthenticated && !loading ? <Redirect to="/login" /> : <Component {...props} />
      }
    />
  );
};

export default PrivateRoutes;
