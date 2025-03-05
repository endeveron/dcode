import { useAppDispatch } from 'store';
import { openToast } from 'store/ui';
import { ApiError } from 'common/types/http';

const useError = () => {
  const dispatch = useAppDispatch();

  const getErrorMessage = (error: ApiError): string => {
    if (error) {
      // handle FetchBaseQueryError
      if ('status' in error) {
        const errorData = error.data as { error: { message: string } };
        return errorData.error.message;
      }

      // handle SerializedError
      if (error?.message) return error.message;
    }
    return 'An error occured. Please try again later.';
  };

  const handleApiError = (error: ApiError) => {
    dispatch(
      openToast({
        status: 'error',
        message: getErrorMessage(error),
      })
    );
  };

  return { handleApiError };
};

export { useError };
