import { IconButton } from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';

import { useAuth } from 'features/auth';

import './LogoutButton.scss';

const LogoutButton = () => {
  const { signOut } = useAuth();

  const handleLogout = () => {
    signOut();
  };

  return (
    <div className="logout-button__wrapper">
      <IconButton
        className="logout-button"
        onClick={handleLogout}
        sx={{
          color: 'inherit',
        }}
      >
        <LogoutIcon />
      </IconButton>
    </div>
  );
};

export { LogoutButton };
