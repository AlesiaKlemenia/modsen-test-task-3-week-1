import { IBookDescriptionProps } from '@/ui/BookDescription/interface';
import { Description } from '@/ui/BookDescription/styled';

const BookDescription = ({
  description,
}: IBookDescriptionProps): JSX.Element => {
  return <Description>{description}</Description>;
};

export default BookDescription;
