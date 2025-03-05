import React from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';
import Fade from '@mui/material/Fade';
import Dialog from '@mui/material/Dialog';
import { TransitionProps } from '@mui/material/transitions';

import { useAppDispatch } from 'store';
import { closeModalWindow } from 'store/ui';
import { Button, IModalWindowContent } from 'components';

import './ModalWindow.scss';

const modalRoot = document.getElementById('modal-root') as HTMLElement;

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Fade ref={ref} {...props} />;
});

interface ModalWindowProps {
  content: IModalWindowContent;
  isOpen: boolean;
  onAcceptCb: () => void;
  onCancelCb: () => void;
}

const ModalWindow = (props: ModalWindowProps) => {
  const { content, isOpen, onAcceptCb, onCancelCb } = props;

  const dispatch = useAppDispatch();

  const handleClose = () => {
    dispatch(closeModalWindow());
  };

  const handleAccept = () => {
    onAcceptCb && onAcceptCb();
    handleClose();
  };

  const onCancellHandler = () => {
    onCancelCb && onCancelCb();
    handleClose();
  };

  return (
    content &&
    ReactDOM.createPortal(
      <Dialog
        open={isOpen}
        keepMounted
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <div className="modal-window__content">
          <div
            className={classNames('modal-window__title', {
              [`modal-window__title--${content.status}`]: content.status,
            })}
          >
            {content.title}
          </div>
          <div className="modal-window__text">{content.message}</div>
          <div className="modal-window__actions">
            {content.secondBtnText && (
              <Button onClick={onCancellHandler} color="secondary">
                {content.secondBtnText}
              </Button>
            )}
            <Button
              onClick={handleAccept}
              color="primary"
              // variant={ content?.btnType && content.btnType }
            >
              {content.btnText || 'OK'}
            </Button>
          </div>
        </div>
      </Dialog>,
      modalRoot
    )
  );
};

export { ModalWindow };
