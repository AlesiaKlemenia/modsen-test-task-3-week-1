import { Catalog } from './styled';

interface ICatalogProps {
  children: JSX.Element[] | JSX.Element;
}

const BooksCatalog = ({ children }: ICatalogProps): JSX.Element => (
  <Catalog>{children}</Catalog>
);

export default BooksCatalog;
