import { Card, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

interface StyledLinkProps {
  isdisabled?: boolean;
}

export const StyledLink = styled(Link)<StyledLinkProps>`
  ${({ isdisabled }) =>
    isdisabled
      ? css`
          pointer-events: none;
        `
      : null}
`;

export const StyledCard = styled(Card)`
  width: calc(100% - 34px);
  height: calc(100% - 34px);
  padding: 16px;

  display: flex;
  align-self: center;
  justify-self: center;
  flex-direction: column;

  &:hover {
    transform: scale(1.05);
  }
`;

export const ImageWrapper = styled.div`
  width: 200px;
  height: 300px;
  margin: auto auto;
`;

export const BookInfo = styled.div`
  width: 100%;
  height: 125px;
`;

export const Category = styled(Typography)`
  color: rgba(0, 0, 0, 0.6);
  text-decoration: underline;
`;

export const Title = styled(Typography)`
  font-weight: bold;
`;

export const Author = styled(Typography)`
  color: rgba(0, 0, 0, 0.6);
`;

export const EmptyElement = styled.div`
  height: 24px;
  margin-bottom: 1rem;
`;
