import { toast } from 'react-toastify';

export const notificationError = (statusCode, errorMessage, serverError) => {
  switch (statusCode) {
    case 400:
      return toast(errorMessage, {
        hideProgressBar: true,
      });
    case 500:
      return toast(serverError, {
        hideProgressBar: true,
      });

    default:
      break;
  }
};
