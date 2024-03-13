import { useMemo } from 'react';

import { IBookAuthorsProps } from '@/ui/BookAuthors/interface';
import { Author } from '@/ui/BookAuthors/styled';

const BookAuthors = ({ authors }: IBookAuthorsProps): JSX.Element => {
  const bookAuthors = useMemo(
    () => (Array.isArray(authors) ? authors.join(', ') : authors),
    [authors],
  );

  return <Author>{bookAuthors}</Author>;
};

export default BookAuthors;
