import { IBookTitleProps } from '@/ui/BookTitle/interface';
import { Title } from '@/ui/BookTitle/styled';
import EmptyElement from '@/ui/EmptyElement';

const BookTitle = ({ title }: IBookTitleProps): JSX.Element => {
  return title ? (
    <Title sx={{ marginBottom: '1rem', fontWeight: 'bold' }}>{title}</Title>
  ) : (
    <EmptyElement />
  );
};

export default BookTitle;
