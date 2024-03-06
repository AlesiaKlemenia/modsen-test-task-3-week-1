import { Typography } from '@mui/material';
import styled from 'styled-components';

// convert to grid
export const BookInfoWrapper = styled.div`
  width: 90%;
  height: calc(100% - 7vh);
  margin-top: 4%;

  display: grid;
  align-items: center;
  grid-template-columns: repeat(12, 1fr);
  grid-gap: 3%;

  @media (max-width: 800px) {
    display: block;
  }
`;

export const ImageWrapper = styled.div`
  min-width: 200px;
  min-height: 300px;
  grid-column: span 4;
`;

export const BookDetailInfoWrapper = styled.div`
  padding: 5vw 0;
  height: auto;

  grid-column: span 8;

  display: flex;
  flex-direction: column;
`;

export const DescriptionWrapper = styled.div`
  width: calc(100% - 20px);
  border: rgba(0, 0, 0, 0.4) 1px solid;
  background-color: rgba(0, 0, 0, 0.05);
  padding: 10px;
`;
