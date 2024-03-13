import { Box, Typography } from '@mui/material';
import styled from 'styled-components';

export const ProgressBarWrapper = styled(Box)`
  width: 100%;
`;

export const CatalogField = styled.div`
  width: 100%;
  margin: 2rem 0;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 0.5rem;
`;

export const CatalogFoundResultsTitle = styled(Typography)`
  color: rgba(0, 0, 0);
  font-size: 1.7rem;
`;
