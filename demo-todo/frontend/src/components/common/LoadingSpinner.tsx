import { CircularProgress, Box } from '@mui/material';
import { styled } from '@mui/material/styles';

interface LoadingSpinnerProps {
  fullScreen?: boolean;
  size?: number;
}

const FullScreenWrapper = styled(Box)({
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: 'rgba(255, 255, 255, 0.8)',
  zIndex: 9999,
});

const LoadingSpinner = ({ fullScreen = false, size = 40 }: LoadingSpinnerProps) => {
  if (fullScreen) {
    return (
      <FullScreenWrapper>
        <CircularProgress size={size} />
      </FullScreenWrapper>
    );
  }

  return <CircularProgress size={size} />;
};

export default LoadingSpinner;
