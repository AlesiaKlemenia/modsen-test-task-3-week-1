import { Box } from '@mui/material';

import noCoverImage from '../../../../assets/img/no-image.png';
import { IBookCardInfo } from '../../../../interfaces/IBookCardInfo';
import {
  Author,
  BookInfo,
  Category,
  EmptyElement,
  ImageWrapper,
  StyledCard,
  StyledLink,
  Title,
} from './styled';

const BookCard = ({
  id,
  title,
  bookCategories,
  authors,
  coverUrl,
}: IBookCardInfo): JSX.Element => {
  return (
    <StyledLink to={`/books/${id}`} isdisabled={!title}>
      <StyledCard
        sx={{
          border: 'black rgba(0, 0, 0, 0.05) solid',
          backgroundColor: 'rgba(0, 0, 0, 0.02)',
          transition: 'all 0.5s',
        }}
      >
        <ImageWrapper>
          {coverUrl ? (
            <Box
              component="img"
              sx={{ width: '100%', height: '100%' }}
              alt={title}
              src={coverUrl}
            />
          ) : (
            <Box
              component="img"
              sx={{ width: '100%', height: '100%' }}
              alt={title}
              src={noCoverImage}
            />
          )}
        </ImageWrapper>
        <BookInfo>
          {bookCategories ? (
            <Category sx={{ marginBottom: '1rem' }}>
              {bookCategories?.[0]}
            </Category>
          ) : (
            <EmptyElement />
          )}
          {title ? (
            <Title sx={{ marginBottom: '1rem', fontWeight: 'bold' }}>
              {title.length <= 70 ? title : `${title.substring(0, 66)}...`}
            </Title>
          ) : (
            <EmptyElement />
          )}
          {authors ? (
            <Author>
              {authors.length === 1
                ? authors?.[0]
                : `${authors?.[0]}, ${authors?.[1]}`}
            </Author>
          ) : (
            <EmptyElement />
          )}
        </BookInfo>
      </StyledCard>
    </StyledLink>
  );
};

export default BookCard;
