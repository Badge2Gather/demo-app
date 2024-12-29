import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  IconButton,
  Typography,
} from '@mui/material';
import { Close as CloseIcon } from '@mui/icons-material';
import { styled } from '@mui/material/styles';
import Button from './Button';

interface ModalProps {
  open: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
  onConfirm?: () => void;
  confirmText?: string;
  cancelText?: string;
  maxWidth?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
}

const StyledDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialog-paper': {
    borderRadius: 12,
    padding: theme.spacing(2),
  },
}));

const StyledDialogTitle = styled(DialogTitle)({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '8px 8px 16px 8px',
});

const Modal = ({
  open,
  onClose,
  title,
  children,
  onConfirm,
  confirmText = '확인',
  cancelText = '취소',
  maxWidth = 'sm',
}: ModalProps) => {
  return (
    <StyledDialog open={open} onClose={onClose} maxWidth={maxWidth} fullWidth>
      <StyledDialogTitle>
        <Typography variant="h6" component="div">
          {title}
        </Typography>
        <IconButton onClick={onClose} size="small">
          <CloseIcon />
        </IconButton>
      </StyledDialogTitle>
      <DialogContent>{children}</DialogContent>
      <DialogActions>
        <Button variant="outlined" onClick={onClose}>
          {cancelText}
        </Button>
        {onConfirm && (
          <Button variant="contained" onClick={onConfirm}>
            {confirmText}
          </Button>
        )}
      </DialogActions>
    </StyledDialog>
  );
};

export default Modal;
