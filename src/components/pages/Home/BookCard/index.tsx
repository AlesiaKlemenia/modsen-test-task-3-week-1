import { Typography } from '@mui/material';
import { IBookCardInfo } from '../../../../consts/bookInfo';
import {
  Author,
  BookInfo,
  Category,
  EmptyElement,
  ImageWrapper,
  StyledCard,
  Title,
} from './styled';
import noCoverImage from './../../../../assets/img/no-image.png';

const BookCard = ({
  id,
  title,
  bookCategories,
  authors,
  coverUrl,
}: IBookCardInfo): JSX.Element => (
  <StyledCard
    sx={{
      border: 'black rgba(0, 0, 0, 0.05) solid',
      backgroundColor: 'rgba(0, 0, 0, 0.02)',
      transition: 'all 0.5s',
    }}
  >
    {/* TODO: delete this Typography tag */}
    <Typography sx={{ visibility: 'collapse' }}>{`${id}`}</Typography>
    <ImageWrapper>
      {coverUrl ? (<img src={coverUrl} width="100%" height="100%" />) : <img src={noCoverImage} width="100%" height="100%" />}
    </ImageWrapper>
    <BookInfo>
      {(bookCategories) ? (<Category sx={{ marginBottom: '1rem' }}>
        {bookCategories?.[0]}
      </Category>) : (<EmptyElement></EmptyElement>)}
      {title ? (
        <Title sx={{ marginBottom: '1rem', fontWeight: 'bold' }}>
          {title.length <= 70 ? title : title.substring(0, 66) + '...'}
        </Title>
      ) : (
        <EmptyElement></EmptyElement>
      )}
      {authors ? (
        <Author>
          {authors.length === 1
            ? authors?.[0]
            : authors?.[0] + ', ' + authors?.[1]}
        </Author>
      ) : (
        <EmptyElement></EmptyElement>
      )}
    </BookInfo>
  </StyledCard>
);

export default BookCard;
