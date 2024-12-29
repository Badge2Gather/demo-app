import { Snackbar as MuiSnackbar, Alert, AlertColor } from '@mui/material';

interface SnackbarProps {
  open: boolean;
  message: string;
  severity?: AlertColor;
  onClose: () => void;
  autoHideDuration?: number;
}

const Snackbar = ({
  open,
  message,
  severity = 'success',
  onClose,
  autoHideDuration = 3000,
}: SnackbarProps) => {
  return (
    <MuiSnackbar
      open={open}
      autoHideDuration={autoHideDuration}
      onClose={onClose}
      anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
    >
      <Alert onClose={onClose} severity={severity} variant="filled">
        {message}
      </Alert>
    </MuiSnackbar>
  );
};

export default Snackbar;
