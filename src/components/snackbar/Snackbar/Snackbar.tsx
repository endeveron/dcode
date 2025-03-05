import { useEffect, useRef, useState } from 'react';
import { styled } from '@mui/material/styles';
import { Snackbar as MUISnackbar } from '@mui/material';
import { SnackbarProps } from '@mui/material/Snackbar';

import { Button, ISnackbarContent } from 'components';
import { useAppDispatch } from 'store';
import { closeSnackbar } from 'store/ui';

import './Snackbar.scss';

interface ISnackbarProps {
  content: ISnackbarContent;
  isOpen: boolean;
  onAccept: () => void;
}

const Snackbar = ({ content, isOpen, onAccept }: ISnackbarProps) => {
  const dispatch = useAppDispatch();

  const [open, setOpen] = useState(false);

  const timerRef: React.MutableRefObject<
    ReturnType<typeof setTimeout> | undefined
  > = useRef(undefined);

  useEffect(() => {
    isOpen && setOpen(true);
  }, [isOpen]);

  const clearReduxDataWithDelay = (delay: number) => {
    timerRef.current = setTimeout(() => {
      dispatch(closeSnackbar());
    }, delay);
  };

  const handleAction = (event?: React.SyntheticEvent | Event) => {
    onAccept();
    setOpen(false);
    clearReduxDataWithDelay(1000);
  };

  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === 'clickaway') return;

    setOpen(false);
    clearReduxDataWithDelay(1000);
  };

  // clear timer on component dismount
  useEffect(() => {
    return () => {
      timerRef.current && clearTimeout(timerRef.current);
    };
  }, []);

  const StyledSnackbar = styled(MUISnackbar)<SnackbarProps>({
    bottom: '1.5rem',
  });

  return content && isOpen ? (
    <div className="snackbar" onClick={handleClose}>
      <StyledSnackbar
        autoHideDuration={5000}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        open={open}
        onClose={handleClose}
        key="bottomcenter"
      >
        <div className="snackbar__content">
          <div className="snackbar__message">{content.message}</div>
          <Button
            variant="contained"
            className="snackbar__action"
            onClick={handleAction}
          >
            {content.btnTitle}
          </Button>
        </div>
      </StyledSnackbar>
    </div>
  ) : null;
};

export { Snackbar };
