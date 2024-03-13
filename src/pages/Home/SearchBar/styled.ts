import { Box } from '@mui/material';
import styled from 'styled-components';

export const SearchField = styled.div`
  width: 100%;
  height: 100%;
  padding: 30px 0;
  background-color: rgba(0, 0, 0, 0.05);

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 1rem;
`;

export const FormBox = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
`;
