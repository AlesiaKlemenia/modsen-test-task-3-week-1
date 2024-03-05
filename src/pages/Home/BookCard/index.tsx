import { useCallback } from 'react';

import paths from '@/constants/paths';
import { IBookCardInfo } from '@/interfaces/IBookCardInfo';
import {
  BookInfo,
  ImageWrapper,
  StyledBookTitle,
  StyledCard,
  StyledLink,
} from '@/pages/Home/BookCard/styled';
import BookAuthors from '@/ui/BookAuthors';
import BookCategory from '@/ui/BookCategory';
import CoverImage from '@/ui/CoverImage';

const BookCard = ({
  id,
  title,
  bookCategories,
  authors,
  coverUrl,
}: IBookCardInfo): JSX.Element => {
  const getAuthors = useCallback((): string | undefined => {
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
          <StyledBookTitle title={title} />
          <BookAuthors authors={getAuthors()} />
        </BookInfo>
      </StyledCard>
    </StyledLink>
  );
};

export default BookCard;
