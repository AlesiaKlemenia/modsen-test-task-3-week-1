import BookCard from '@components/pages/Home/BookCard';
import renderer from 'react-test-renderer';

import { potterBook } from '@/tests/mocks/bookInfoMock';

it('test bookInfo', () => {
  // eslint-disable-next-line react/jsx-props-no-spreading
  const component = renderer.create(<BookCard {...potterBook} />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
