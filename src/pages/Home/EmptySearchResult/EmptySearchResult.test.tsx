import '@testing-library/jest-dom';

import EmptySearchResult from '@components/pages/Home/EmptySearchResult/index';
import { StyledEngineProvider } from '@mui/material';
import renderer from 'react-test-renderer';

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
