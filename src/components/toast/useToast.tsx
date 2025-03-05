import { useAppSelector } from 'store/store';
import { selectToastContent, selectToastIsOpen } from 'store/ui';

import { Toast as ToastEl } from './Toast/Toast';

export const useToast = () => {
  const content = useAppSelector(selectToastContent);
  const isOpen = useAppSelector(selectToastIsOpen);

  const Toast = () => <ToastEl content={content} isOpen={isOpen} />;

  return { Toast };
};
