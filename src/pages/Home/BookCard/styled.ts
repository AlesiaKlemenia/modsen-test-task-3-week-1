import { Card } from '@mui/material';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

import BookTitle from '@/ui/BookTitle';

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

  border: 1px rgba(0, 0, 0, 0.05) solid;
  background-color: rgba(0, 0, 0, 0.02);
  transition: all 0.5s;

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

export const StyledBookTitle = styled(BookTitle)`
  & {
    width: 100%;
    height: 48px;
    margin-bottom: 1rem;
    font-weight: bold;
    overflow: hidden;
    text-overflow: ellipsis;
    word-wrap: break-word;
  }
`;
