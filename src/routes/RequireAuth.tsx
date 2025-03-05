import { Navigate, useLocation } from 'react-router-dom';

import { useAppSelector } from 'store';
import { selectAuthToken } from 'features/auth';

const RequireAuth = ({ children }: { children: JSX.Element }) => {
  const location = useLocation();
  const token = useAppSelector(selectAuthToken);

  if (!token) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
};

export { RequireAuth };
