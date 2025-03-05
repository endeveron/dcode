import { IFormFieldData } from 'common/types/form';

type ValidateInputArgs = {
  fieldData: IFormFieldData;
  regex: any;
  errMessage: string;
  keepCase?: boolean;
};

const getError = (args: ValidateInputArgs): string | null => {
  const { fieldData, regex, errMessage, keepCase } = args;
  const res = keepCase
    ? regex.test(fieldData.value)
    : regex.test(fieldData.value?.toLowerCase());
  return !res ? errMessage : null;
};

export const validateName = (fieldData: IFormFieldData): IFormFieldData => {
  const regex = /^[a-zA-Z]{2,20}$/;
  const errMessage = '2-20 symbols, only latin letters';
  return {
    ...fieldData,
    error: getError({ fieldData, regex, errMessage }),
  };
};

export const validateUsername = (fieldData: IFormFieldData): IFormFieldData => {
  const regex = /^[a-zA-Z]([.](?![.])|[a-zA-Z]){3,20}$/;
  const errMessage =
    "3-20 symbols, only latin letters and dot, such as 'john.dou'";
  return {
    ...fieldData,
    error: getError({ fieldData, regex, errMessage }),
  };
};

export const validateEmail = (fieldData: IFormFieldData): IFormFieldData => {
  const regex =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const errMessage = 'Invalid Email';
  return {
    ...fieldData,
    error: getError({ fieldData, regex, errMessage }),
  };
};

export const validateCode = (fieldData: IFormFieldData): IFormFieldData => {
  const regex = /^.{4,30}$/;
  const errMessage = '4-30 symbols';
  return {
    ...fieldData,
    error: getError({ fieldData, regex, errMessage }),
  };
};

export const validatePassword = (fieldData: IFormFieldData): IFormFieldData => {
  const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{6,20}$/;
  const errMessage =
    '6-20 symbols, at least one numeric digit, one uppercase and one lowercase latin letter';
  return {
    ...fieldData,
    error: getError({ fieldData, regex, errMessage, keepCase: true }),
  };
};
