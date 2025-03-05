export interface IFormFieldData {
  value: string;
  error: string | null;
}

type FormFieldType = 'text' | 'email' | 'password';

export interface IFormField {
  name: string;
  label: string;
  type: FormFieldType;
  validator: (fieldData: IFormFieldData) => void;
  isRequired?: boolean;
  showPassword?: boolean;
}

export interface IFormInputValuesMap {
  [name: string]: IFormFieldData;
}

export interface FormProps<T> {
  fields: IFormField[];
  isLoading: boolean;
  submitBtnLabel?: string;
  onSubmitted: (data: T) => void;
}
