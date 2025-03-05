import { CircularProgress, Fade } from '@mui/material';

import './Loading.scss';

interface LoadingProps {
  delay?: boolean;
  size?: string;
}

const Loading = (props: LoadingProps) => {
  const { delay, size } = props;

  return (
    <div className="loading">
      <Fade
        in={true}
        style={
          delay
            ? {
                transitionDelay: '1000ms',
              }
            : {}
        }
        unmountOnExit
      >
        <CircularProgress
          size={size || '1.75rem'}
          color="primary"
          thickness={3.5}
        />
      </Fade>
    </div>
  );
};

export { Loading };
