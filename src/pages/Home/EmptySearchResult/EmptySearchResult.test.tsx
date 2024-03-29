import '@testing-library/jest-dom';

import { StyledEngineProvider } from '@mui/material';
import renderer from 'react-test-renderer';

import EmptySearchResult from '.';

describe('EmptySearchResult component', () => {
  it('renders correctly', () => {
    const componentRenderer = renderer.create(
      <StyledEngineProvider injectFirst>
        <EmptySearchResult />
      </StyledEngineProvider>,
    );
    const tree = componentRenderer.toJSON();

    expect(tree).toMatchSnapshot();
  });
});
