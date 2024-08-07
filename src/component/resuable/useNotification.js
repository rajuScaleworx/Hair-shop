import { useCallback } from 'react';
import { notifications } from '@mantine/notifications';
import { IconCheck, IconX, IconExclamationMark, IconInfoCircle } from '@tabler/icons-react';

const icons = {
  success: <IconCheck size="1.1rem" />,
  error: <IconX size="1.1rem" />,
  warning: <IconExclamationMark size="1.1rem" />,
  info: <IconInfoCircle size="1.1rem" />,
};

const useNotification = () => {
  const showNotification = useCallback((type, title, message) => {
    notifications.show({
      title,
      message,
      bg:type,
      color: type,
      icon: icons[type],
      autoClose: 5000, // Automatically close after 5 seconds
    });
  }, []);

  return {
    notifySuccess: (message, title = 'Success') => showNotification('green', title, message),
    notifyError: (message, title = 'Error') => showNotification('red', title, message),
    notifyWarning: (message, title = 'Warning') => showNotification('warning', title, message),
    notifyInfo: (message, title = 'Info') => showNotification('info', title, message),
  };
};

export default useNotification;