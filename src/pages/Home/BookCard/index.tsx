import { useCallback, useMemo } from 'react';

import paths from '@/constants/paths';
import { IBookCardInfo } from '@/interfaces/IBookCardInfo';
import {
  BookInfo,
  ImageWrapper,
  StyledBookAuthors,
  StyledBookTitle,
  StyledCard,
  StyledLink,
} from '@/pages/Home/BookCard/styled';
import BookCategory from '@/ui/BookCategory';
import CoverImage from '@/ui/CoverImage';

const BookCard = ({
  id,
  title,
  bookCategories,
  authors,
  coverUrl,
}: IBookCardInfo): JSX.Element => {
  const parsedAuthors = useMemo(() => {
    if (authors) {
      return authors.length === 1
        ? authors?.[0]
        : `${authors?.[0]}, ${authors?.[1]}`;
    }
    return authors;
  }, [authors]);

  return (
    <StyledLink to={`${paths.book.url}${id}`} isdisabled={!title}>
      <StyledCard>
        <ImageWrapper>
          <CoverImage title={title} coverUrl={coverUrl} />
        </ImageWrapper>
        <BookInfo>
          <BookCategory bookCategories={bookCategories?.[0]} />
          <StyledBookTitle>{title}</StyledBookTitle>
          <StyledBookAuthors>{parsedAuthors}</StyledBookAuthors>
        </BookInfo>
      </StyledCard>
    </StyledLink>
  );
};

export default BookCard;
