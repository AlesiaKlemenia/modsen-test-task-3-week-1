import '@testing-library/jest-dom';

import { StyledEngineProvider } from '@mui/material';
import renderer from 'react-test-renderer';

import BookCatalog from '@/pages/Home/BookCatalog';

describe('Book Catalog component', () => {
  it('renders correctly with children', () => {
    const componentRenderer = renderer.create(
      <StyledEngineProvider injectFirst>
        <BookCatalog>
          <div className="test" />
        </BookCatalog>
      </StyledEngineProvider>,
    );
    const tree = componentRenderer.toJSON();

    expect(tree).toMatchSnapshot();
  });
});
