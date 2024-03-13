import { Box, Typography } from '@mui/material';
import styled from 'styled-components';

export const NoResultsWrapper = styled(Box)`
  width: 50vw;
  min-width: 300px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 24px;
`;

export const NoResultsTitle = styled(Typography)`
  margin: 48px;
  text-align: center;
`;

export const WhatCanYouTryToDoWrapper = styled(Box)`
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 16px;
`;
