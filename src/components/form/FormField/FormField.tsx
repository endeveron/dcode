import classNames from 'classnames';
import {
  FormControl,
  FormHelperText,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
  TextFieldProps,
} from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';

import { IFormFieldData } from 'common/types/form';

import './FormField.scss';

type FormFieldProps = TextFieldProps & {
  inputData: IFormFieldData;
  showPassword?: boolean;
  onPasswordToggle?: () => void;
};

const FormField = (props: FormFieldProps) => {
  const d = props.inputData;
  const err = d?.error != null;

  const textFieldEl = (
    <div className={classNames('form-field form-field--text', props.className)}>
      <TextField
        variant={props.variant}
        id={props.name}
        label={props.label}
        name={props.name}
        type={props.type}
        onChange={props.onChange}
        value={d.value}
        error={err}
        helperText={err && d.error}
        required={props.required}
        autoFocus={props.autoFocus}
        autoComplete={props.autoComplete}
        fullWidth={props.fullWidth}
        disabled={props.disabled}
      />
    </div>
  );

  const passwordFormControl = (
    <div
      className={classNames('form-field form-field--password', props.className)}
    >
      <FormControl
        variant={props.variant}
        id={props.name}
        fullWidth={props.fullWidth}
        error={err}
        required={props.required}
      >
        <InputLabel htmlFor="outlined-adornment-password">
          {props.label}
        </InputLabel>
        <OutlinedInput
          id={props.name}
          label={props.label}
          name={props.name}
          type={props.showPassword ? 'text' : 'password'}
          value={d.value}
          onChange={props.onChange}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={props.onPasswordToggle}
                onMouseDown={(e: React.MouseEvent<HTMLButtonElement>) => {
                  e.preventDefault();
                }}
                edge="end"
              >
                {props.showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          }
          required={true}
        />
        {err && d.error && <FormHelperText>{d.error}</FormHelperText>}
      </FormControl>
    </div>
  );

  switch (props.type) {
    case 'text':
    case 'email':
      return textFieldEl;
    case 'password':
      return passwordFormControl;
    default:
      return null;
  }
};

export { FormField };
