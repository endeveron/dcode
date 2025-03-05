import { Link, useLocation, useNavigate } from 'react-router-dom';

import { useError } from 'common/hooks/useError';
import { LocationState } from 'common/types';
import { TitleGroup } from 'components';
import {
  AuthForm,
  IAuthResData,
  IBaseAuth,
  useAuth,
  useLoginMutation,
} from 'features/auth';
import { baseAuthFields } from './common';

import './Auth.scss';

const Login = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const { signIn } = useAuth();
  const { handleApiError } = useError();
  const [sendRequest, { isLoading }] = useLoginMutation();

  const state = location.state as LocationState;
  const from = state?.from?.pathname || '/';

  const handleSubmit = async (authReqData: IBaseAuth) => {
    try {
      const data: IAuthResData = await sendRequest(authReqData).unwrap();
      signIn(data, () => {
        navigate(from, { replace: true });
      });
    } catch (err: any) {
      handleApiError(err);
    }
  };

  return (
    <div className="auth page">
      <TitleGroup title="Log In" subtitle="Nice to meet you again!" />
      <AuthForm
        fields={baseAuthFields}
        isLoading={isLoading}
        submitBtnLabel="Login"
        onSubmitted={handleSubmit}
      />
      <div className="auth__link-wrapper">
        <Link to="/signup">Don't have an account ?</Link>
      </div>
    </div>
  );
};

export { Login };
