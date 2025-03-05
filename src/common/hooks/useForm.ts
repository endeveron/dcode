import { useState } from 'react';

import {
  IFormFieldData,
  IFormField,
  IFormInputValuesMap,
} from 'common/types/form';

interface IFieldValidatorMap {
  [name: string]: (fieldData: IFormFieldData) => IFormFieldData;
}

const initialValue: IFormFieldData = {
  value: '',
  error: null,
};

const initValues = (fields: IFormField[]) => {
  return fields.reduce(
    (acc, item) => ({
      ...acc,
      [item.name]: initialValue,
    }),
    {}
  );
};

export const useForm = (fields: IFormField[]) => {
  const initialValues: IFormInputValuesMap = initValues(fields);
  const [inputValues, setInputValues] = useState(initialValues);
  const [showPassword, setShowPassword] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, checked } = e.target;
    let inputValue;

    if (e.target.type === 'checkbox') {
      inputValue = checked ? '1' : '0';
    } else {
      inputValue = value;
    }

    setInputValues({
      ...inputValues,
      [name]: {
        value: inputValue,
        error: null,
      },
    });
  };

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const validateInputs = () => {
    let isValid = true;

    // Create the map of the validation functions
    const createFieldValidatorMap = (
      fields: IFormField[]
    ): IFieldValidatorMap =>
      fields.reduce(
        (acc, cur) => ({
          ...acc,
          [cur.name]: cur.validator,
        }),
        {}
      );
    const validatorMap = createFieldValidatorMap(fields);

    // Validate the form fields
    let updInputValues: IFormInputValuesMap = JSON.parse(
      JSON.stringify(inputValues)
    );

    for (const name in updInputValues) {
      const IFormFieldData = updInputValues[name];
      const validatorFn = validatorMap[name];

      // Update the `error` key
      const updIFormFieldData = validatorFn(IFormFieldData);
      updInputValues[name] = updIFormFieldData;

      if (updInputValues[name].error) {
        isValid = false;
      }
    }

    setInputValues(updInputValues);
    return isValid;
  };

  const clear = () => {
    setInputValues(initialValues);
  };

  return {
    inputValues,
    handleInputChange,
    handleClickShowPassword,
    showPassword,
    validateInputs,
    clear,
  };
};
