import { Link, useLocation, useNavigate } from 'react-router-dom';

import { useError } from 'common/hooks/useError';
import { LocationState } from 'common/types';
import { IFormField } from 'common/types/form';
import { validateName } from 'common/utils/validate';
import { TitleGroup } from 'components';
import {
  AuthForm,
  IAuthResData,
  ISignupFormData,
  useAuth,
  useSignupMutation,
} from 'features/auth';
import { baseAuthFields } from 'pages/auth/common';

import './Auth.scss';

const fields: IFormField[] = [
  {
    name: 'name',
    label: 'Name',
    type: 'text',
    validator: validateName,
    isRequired: true,
  },
  ...baseAuthFields,
];

const Signup = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const { signIn } = useAuth();
  const { handleApiError } = useError();
  const [sendRequest, { isLoading }] = useSignupMutation();

  const state = location.state as LocationState;
  const from = state?.from?.pathname || '/';

  const handleSubmit = async (authReqData: ISignupFormData) => {
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
      <TitleGroup title="Sign Up" subtitle="Create an account" />
      <AuthForm
        fields={fields}
        isLoading={isLoading}
        submitBtnLabel="Signup"
        onSubmitted={handleSubmit}
      />
      <div className="auth__link-wrapper">
        <Link to="/login">Already registered ?</Link>
      </div>
    </div>
  );
};

export { Signup };
