import { Button as MuiButton, ButtonProps as MuiButtonProps } from '@mui/material';
import { styled } from '@mui/material/styles';

interface ButtonProps extends MuiButtonProps {
  fullWidth?: boolean;
}

const StyledButton = styled(MuiButton)<ButtonProps>(({ theme }) => ({
  padding: '8px 16px',
  fontWeight: 600,
  '&.MuiButton-containedPrimary': {
    background: theme.palette.primary.main,
    '&:hover': {
      background: theme.palette.primary.dark,
    },
  },
  '&.MuiButton-outlinedPrimary': {
    borderColor: theme.palette.primary.main,
    color: theme.palette.primary.main,
    '&:hover': {
      borderColor: theme.palette.primary.dark,
      color: theme.palette.primary.dark,
    },
  },
}));

const Button = ({ children, ...props }: ButtonProps) => {
  return <StyledButton {...props}>{children}</StyledButton>;
};

export default Button;
