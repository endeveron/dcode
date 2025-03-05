import { useAppSelector } from 'store';
import { selectModalWindowContent, selectModalWindowIsOpen } from 'store/ui';
import { ModalWindow as ModalWindowEl } from './ModalWindow/ModalWindow';

interface UseModalWindowProps {
  onAcceptCb?: () => void;
  onCancelCb?: () => void;
}

const useModalWindow = (props: UseModalWindowProps) => {
  const { onAcceptCb, onCancelCb } = props;

  const content = useAppSelector(selectModalWindowContent);
  const isOpen = useAppSelector(selectModalWindowIsOpen);

  const modalAcceptHandler = () => {
    onAcceptCb && onAcceptCb();
  };

  const modalCancelHandler = () => {
    onCancelCb && onCancelCb();
  };

  const ModalWindow = () => (
    <ModalWindowEl
      content={content}
      isOpen={isOpen}
      onAcceptCb={modalAcceptHandler}
      onCancelCb={modalCancelHandler}
    />
  );

  return { ModalWindow };
};

export { useModalWindow };
