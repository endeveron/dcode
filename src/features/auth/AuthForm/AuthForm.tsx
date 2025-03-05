import { useForm } from 'common/hooks/useForm';
import { FormProps, IFormInputValuesMap } from 'common/types/form';
import { ILoginFormData, ISignupFormData } from 'features/auth';
import { Loading, FormField, Button } from 'components';

import './AuthForm.scss';

type TAuthData = ILoginFormData | ISignupFormData;

const AuthForm = ({
  fields,
  isLoading,
  submitBtnLabel,
  onSubmitted,
}: FormProps<TAuthData>) => {
  const {
    inputValues,
    handleInputChange,
    handleClickShowPassword,
    showPassword,
    validateInputs,
  } = useForm(fields);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    let isValid = validateInputs();
    if (!isValid) return;

    const prepareOutputData = (inputValues: IFormInputValuesMap) => {
      let result = {} as ILoginFormData | ISignupFormData;

      for (let name in inputValues) {
        const fieldData = inputValues[name];
        result = {
          ...result,
          [name]: fieldData.value,
        };
      }
      return result;
    };

    const outputData = prepareOutputData(inputValues);
    onSubmitted(outputData);
  };

  const submitButtonEl = (
    <Button
      variant="contained"
      color="primary"
      type="submit"
      disabled={isLoading}
      className="form-button"
    >
      {submitBtnLabel}
    </Button>
  );

  return (
    <form
      onSubmit={handleSubmit}
      className="form auth-form"
      autoComplete="off"
      noValidate
    >
      <div className="form__fields-wrapper">
        {fields.map((data) => (
          <FormField
            label={data.label}
            name={data.name}
            type={data.type}
            inputData={inputValues[data.name]}
            onChange={handleInputChange}
            fullWidth={true}
            required={data.isRequired ? data.isRequired : false}
            key={data.name}
            showPassword={showPassword}
            onPasswordToggle={handleClickShowPassword}
          />
        ))}
      </div>
      <div className="form__buttons-wrapper">
        {isLoading ? <Loading /> : submitButtonEl}
      </div>
    </form>
  );
};

export { AuthForm };
