import { Box, Typography } from '@mui/material';
import styled from 'styled-components';

export const NotFoundWrapper = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 64px;
  min-height: 100vh;
`;

export const NotFoundTitle = styled(Typography)`
  font-size: 128px;
  text-align: center;
`;

export const NotFoundDescription = styled(Typography)`
  text-align: center;
`;
