import { IFormField } from 'common/types/form';
import { validateEmail, validatePassword } from 'common/utils/validate';

const baseAuthFields: IFormField[] = [
  {
    name: 'email',
    label: 'Email',
    type: 'email',
    validator: validateEmail,
    isRequired: true,
  },
  {
    name: 'password',
    label: 'Password',
    type: 'password',
    isRequired: true,
    validator: validatePassword,
  },
];

export { baseAuthFields };
