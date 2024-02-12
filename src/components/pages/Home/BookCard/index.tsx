import { useCallback, useEffect } from 'react';
import { Box } from '@mui/material';
import { IBookCardInfo } from '../../../../consts/bookInfo';
import {
  Author,
  BookInfo,
  Category,
  EmptyElement,
  ImageWrapper,
  StyledLink,
  StyledCard,
  Title,
} from './styled';
import noCoverImage from '../../../../assets/img/no-image.png';
import bookStore from '../../../../stores/BookStore';

// import Book from '../../Book';

const BookCard = ({
  id,
  title,
  bookCategories,
  authors,
  coverUrl,
}: IBookCardInfo): JSX.Element => {
  const onLinkClick = useCallback(() => {
    if (title) {
      bookStore.id = id;
      bookStore.title = title;
      bookStore.bookCategories = bookCategories;
      bookStore.authors = authors;
      bookStore.coverUrl = coverUrl;
    }
  }, [id, title, bookCategories, authors, coverUrl]);

  useEffect(() => {
    const handleContextmenu = (e: any): void => {
      e.preventDefault();
    };
    document.addEventListener('contextmenu', handleContextmenu);
    return function cleanup() {
      document.removeEventListener('contextmenu', handleContextmenu);
    };
  }, []);

  return (
    <StyledLink onClick={onLinkClick} to={`/books/${id}`} isdisabled={!title}>
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
