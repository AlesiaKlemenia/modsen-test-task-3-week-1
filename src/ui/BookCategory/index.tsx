import { useMemo } from 'react';

import { IBookCategoryProps } from '@/ui/BookCategory/interface';
import { Category } from '@/ui/BookCategory/styled';

const BookCategory = ({ bookCategories }: IBookCategoryProps): JSX.Element => {
  const categories = useMemo(
    () =>
      Array.isArray(bookCategories)
        ? bookCategories.join(' | ')
        : bookCategories,
    [bookCategories],
  );

  return <Category>{categories}</Category>;
};

export default BookCategory;
