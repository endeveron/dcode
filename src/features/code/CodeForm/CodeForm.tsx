import { Button, FormField, Loading } from 'components';
import { FormProps, IFormInputValuesMap } from 'common/types/form';
import { ICodeFormData } from 'features/code/codeTypes';
import { Slider } from 'components/Slider/Slider';
import { selectCodeSliderValue } from 'features/code/codeSlice';
import { useAppSelector } from 'store';
import { useForm } from 'common/hooks/useForm';

import './CodeForm.scss';

const sliderMarks = [
  {
    value: 1,
    // valueLabel: 'dS7',
  },
  {
    value: 2,
    // valueLabel: 'dS75p',
    label: 'simpler',
  },
  {
    value: 3,
    // valueLabel: 'dS7*5-',
  },
  {
    value: 4,
    // valueLabel: '2dS7*}s',
    label: 'stronger',
  },
  {
    value: 5,
    // valueLabel: '2Б7*kmЛp',
  },
];

const CodeForm = ({
  fields,
  isLoading,
  onSubmitted,
  submitBtnLabel,
}: FormProps<any>) => {
  const sliderValue = useAppSelector(selectCodeSliderValue);

  const {
    inputValues,
    handleInputChange,
    handleClickShowPassword,
    showPassword,
    validateInputs,
    clear,
  } = useForm(fields);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    let isValid = validateInputs();
    if (!isValid) return;

    const prepareOutputData = (inputValues: IFormInputValuesMap) => {
      let result = {} as ICodeFormData;

      for (let name in inputValues) {
        const fieldData = inputValues[name];
        result = {
          ...result,
          [name]: fieldData.value,
        };
      }

      // add slider value
      result = {
        ...result,
        level: sliderValue,
      };

      return result;
    };
    const outputData = prepareOutputData(inputValues);
    onSubmitted(outputData);

    clear();
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
      className="code-form"
      autoComplete="off"
      noValidate
    >
      <div className="form__fields-wrapper">
        {fields.map((data) => (
          <FormField
            autoFocus
            label={data.label}
            name={data.name}
            type={data.type}
            inputData={inputValues[data.name]}
            onChange={handleInputChange}
            fullWidth
            required={data.isRequired ? data.isRequired : false}
            key={data.name}
            showPassword={showPassword}
            onPasswordToggle={handleClickShowPassword}
          />
        ))}
        <div className="form__slider">
          <Slider marks={sliderMarks} />
        </div>
      </div>

      <div className="form__buttons-wrapper">
        {isLoading ? <Loading /> : submitButtonEl}
      </div>
    </form>
  );
};

export { CodeForm };
