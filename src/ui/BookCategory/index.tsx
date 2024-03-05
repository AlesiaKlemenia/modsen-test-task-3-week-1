import { IBookCategoryProps } from '@/ui/BookCategory/interface';
import { Category } from '@/ui/BookCategory/styled';
import EmptyElement from '@/ui/EmptyElement';

const BookCategory = ({ bookCategories }: IBookCategoryProps): JSX.Element => {
  return bookCategories ? (
    <Category sx={{ marginBottom: '1rem' }}>
      {Array.isArray(bookCategories)
        ? bookCategories.join(' | ')
        : bookCategories}
    </Category>
  ) : (
    <EmptyElement />
  );
};

export default BookCategory;
