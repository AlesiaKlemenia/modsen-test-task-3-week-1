import { IBookDescriptionProps } from '@/ui/BookDescription/interface';
import { Description } from '@/ui/BookDescription/styled';
import EmptyElement from '@/ui/EmptyElement';

const BookDescription = ({
  description,
}: IBookDescriptionProps): JSX.Element => {
  return description ? (
    <Description sx={{ marginBottom: '0.5rem' }}>{description}</Description>
  ) : (
    <EmptyElement />
  );
};

export default BookDescription;
