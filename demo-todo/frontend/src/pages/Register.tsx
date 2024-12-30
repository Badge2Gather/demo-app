import { useNavigate } from 'react-router-dom';
import { Container, Link as MuiLink, Typography, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import { RegisterInput } from '../types/auth';
import AuthForm from '../components/auth/AuthForm';
import { LoadingSpinner, Snackbar } from '../components/common';
import { useState } from 'react';

const Register = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleRegister = async (data: RegisterInput) => {
    try {
      setIsLoading(true);
      setError(null);

      // TODO: 실제 API 연동 시 대체
      // const response = await registerApi(data);
      await new Promise((resolve) => setTimeout(resolve, 1000)); // 가짜 지연

      navigate('/login', { 
        state: { message: '회원가입이 완료되었습니다. 로그인해주세요.' } 
      });
    } catch (err) {
      setError('회원가입에 실패했습니다. 다시 시도해주세요.');
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return <LoadingSpinner fullScreen />;
  }

  return (
    <Container maxWidth="sm">
      <AuthForm type="register" onSubmit={handleRegister} isLoading={isLoading} />
      <Box textAlign="center" mt={2}>
        <Typography variant="body2" color="textSecondary">
          이미 계정이 있으신가요?{' '}
          <MuiLink component={Link} to="/login">
            로그인
          </MuiLink>
        </Typography>
      </Box>
      <Snackbar
        open={!!error}
        message={error || ''}
        severity="error"
        onClose={() => setError(null)}
      />
    </Container>
  );
};

export default Register;
