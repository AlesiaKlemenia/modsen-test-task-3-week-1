import { Button, TextField } from '@mui/material';
import styled from 'styled-components';

export const SearchFieldWrapper = styled.div`
  width: 40vw;
  min-width: 300px;
  height: 60px;

  display: flex;
  gap: 5px;
  align-items: center;
`;

export const SearchField = styled(TextField)`
  height: 100%;
`;

export const SearchButton = styled(Button)`
  height: 40px;
`;
