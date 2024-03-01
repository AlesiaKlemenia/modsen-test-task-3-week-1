import { Typography } from '@mui/material';

import { IBookDetailInfo } from '@/interfaces/IBookDetailInfo';
import {
  Author,
  BookDetailInfoWrapper,
  BookInfoWrapper,
  Category,
  Description,
  DescriptionWrapper,
  EmptyElement,
  ImageWrapper,
  Title,
} from '@/pages/Book/BookInfo/styled';
import CoverImage from '@/ui/CoverImage';

const BookInfo = ({
  id,
  title,
  bookCategories,
  authors,
  coverUrl,
  description,
}: IBookDetailInfo): JSX.Element => {
  return (
    <BookInfoWrapper>
      <ImageWrapper>
        <CoverImage title={title} coverUrl={coverUrl} />
      </ImageWrapper>
      <BookDetailInfoWrapper>
        {bookCategories ? (
          <Category sx={{ marginBottom: '1rem' }}>
            {bookCategories.join(' | ')}
          </Category>
        ) : (
          <EmptyElement />
        )}
        {title ? (
          <Title sx={{ marginBottom: '1rem', fontWeight: 'bold' }}>
            {title}
          </Title>
        ) : (
          <EmptyElement />
        )}
        {authors ? (
          <Author sx={{ marginBottom: '1rem' }}>{authors.join(', ')}</Author>
        ) : (
          <EmptyElement />
        )}
        <Typography>Description:</Typography>
        <DescriptionWrapper>
          {description ? (
            <Description sx={{ marginBottom: '0.5rem' }}>
              {description}
            </Description>
          ) : (
            <EmptyElement />
          )}
        </DescriptionWrapper>
      </BookDetailInfoWrapper>
    </BookInfoWrapper>
  );
};

export default BookInfo;
