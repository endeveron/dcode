import { styled } from '@mui/material/styles';
import { Button as ButtonMUI } from '@mui/material';
import { ButtonProps } from '@mui/material/Button';
import classNames from 'classnames';

const StyledButton = styled(ButtonMUI)<ButtonProps>({
  borderRadius: '3rem',
  padding: '0.75rem 2rem',
  fontSize: '1rem',
  lineHeight: '1.5rem',
  letterSpacing: '0.03125rem',
  textTransform: 'none',
  boxShadow: 'none',

  '&:hover': {
    boxShadow: 'none',
  },
  '&:active': {
    boxShadow: 'none',
  },
  '&:focus': {
    boxShadow: 'none',
  },
});

const Button = (props: ButtonProps) => (
  <StyledButton
    {...props}
    className={classNames('button', props.className)}
  ></StyledButton>
);

export { Button };
