import { Typography } from '@mui/material';

import { IBookDetailInfo } from '@/interfaces/IBookDetailInfo';
import {
  BookDetailInfoWrapper,
  BookInfoWrapper,
  DescriptionWrapper,
  ImageWrapper,
} from '@/pages/Book/BookInfo/styled';
import CoverImage from '@/ui/CoverImage';
import BookCategory from '@/ui/BookCategory';
import BookTitle from '@/ui/BookTitle';
import BookAuthors from '@/ui/BookAuthors';
import BookDescription from '@/ui/BookDescription';

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
        <BookCategory bookCategories={bookCategories} />
        <BookTitle title={title} />
        <BookAuthors authors={authors} />
        <Typography>Description:</Typography>
        <DescriptionWrapper>
          <BookDescription description={description} />
        </DescriptionWrapper>
      </BookDetailInfoWrapper>
    </BookInfoWrapper>
  );
};

export default BookInfo;
