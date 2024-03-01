import paths from '@/constants/paths';
import { IBookCardInfo } from '@/interfaces/IBookCardInfo';
import {
  Author,
  BookInfo,
  Category,
  EmptyElement,
  ImageWrapper,
  StyledCard,
  StyledLink,
  Title,
} from '@/pages/Home/BookCard/styled';
import CoverImage from '@/ui/CoverImage';

const BookCard = ({
  id,
  title,
  bookCategories,
  authors,
  coverUrl,
}: IBookCardInfo): JSX.Element => {
  return (
    <StyledLink to={`${paths.book.url}${id}`} isdisabled={!title}>
      <StyledCard
        sx={{
          border: 'black rgba(0, 0, 0, 0.05) solid',
          backgroundColor: 'rgba(0, 0, 0, 0.02)',
          transition: 'all 0.5s',
        }}
      >
        <ImageWrapper>
          <CoverImage title={title} coverUrl={coverUrl} />
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
            <Title
              sx={{
                width: '100%',
                height: '48px',
                marginBottom: '1rem',
                fontWeight: 'bold',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                wordWrap: 'break-word',
              }}
            >
              {title}
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
