import { IBookAuthorsProps } from '@/ui/BookAuthors/interface';
import { Author } from '@/ui/BookAuthors/styled';
import EmptyElement from '@/ui/EmptyElement';

const BookAuthors = ({ authors }: IBookAuthorsProps): JSX.Element => {
  return authors ? (
    <Author>{Array.isArray(authors) ? authors.join(', ') : authors}</Author>
  ) : (
    <EmptyElement />
  );
};

export default BookAuthors;
