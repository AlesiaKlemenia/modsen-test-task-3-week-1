import { IBookTitleProps } from '@/ui/BookTitle/interface';
import { Title } from '@/ui/BookTitle/styled';

const BookTitle = ({ title }: IBookTitleProps): JSX.Element => {
  return <Title>{title}</Title>;
};

export default BookTitle;
