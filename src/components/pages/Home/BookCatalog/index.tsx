import { ICatalogProps } from './interfaces';
import { Catalog } from './styled';

const BooksCatalog = ({ children }: ICatalogProps): JSX.Element => (
  <Catalog>{children}</Catalog>
);

export default BooksCatalog;
