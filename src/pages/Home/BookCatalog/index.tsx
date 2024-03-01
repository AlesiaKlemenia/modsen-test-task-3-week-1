import { ICatalogProps } from '@/pages/Home/BookCatalog/interfaces';
import { Catalog } from '@/pages/Home/BookCatalog/styled';

const BooksCatalog = ({ children }: ICatalogProps): JSX.Element => (
  <Catalog>{children}</Catalog>
);

export default BooksCatalog;
