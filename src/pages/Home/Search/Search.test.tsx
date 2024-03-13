import { StyledEngineProvider } from '@mui/material';
import React from 'react';
import renderer, { act } from 'react-test-renderer';

import { ISearchProps } from '@/interfaces/ISearchProps';
import Search from '@/pages/Home/Search';

const mockProps: ISearchProps = {
  onFieldChange: jest.fn(),
  onKeyDown: jest.fn(),
  onSearchClick: jest.fn(),
  isError: false,
  value: '',
};

describe('Search component', () => {
  it('renders correctly with default props', () => {
    const component = renderer.create(
      <StyledEngineProvider injectFirst>
        <Search
          onFieldChange={mockProps.onFieldChange}
          onKeyDown={mockProps.onKeyDown}
          onSearchClick={mockProps.onSearchClick}
          isError={mockProps.isError}
          value={mockProps.value}
        />
      </StyledEngineProvider>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('calls onFieldChange when input value changes', () => {
    const component = renderer.create(
      <StyledEngineProvider injectFirst>
        <Search
          onFieldChange={mockProps.onFieldChange}
          onKeyDown={mockProps.onKeyDown}
          onSearchClick={mockProps.onSearchClick}
          isError={mockProps.isError}
          value={mockProps.value}
        />
      </StyledEngineProvider>,
    );
    const instance = component.root;

    const searchInput = instance.findByType('input');
    act(() => {
      searchInput.props.onChange({ target: { value: 'Test Book' } });
    });

    expect(mockProps.onFieldChange).toHaveBeenCalledTimes(1);
    expect(mockProps.onFieldChange).toHaveBeenCalledWith({
      target: { value: 'Test Book' },
    });
  });

  it('calls onSearchClick when the search button is clicked', () => {
    const component = renderer.create(
      <StyledEngineProvider injectFirst>
        <Search
          onFieldChange={mockProps.onFieldChange}
          onKeyDown={mockProps.onKeyDown}
          onSearchClick={mockProps.onSearchClick}
          isError={mockProps.isError}
          value={mockProps.value}
        />
      </StyledEngineProvider>,
    );
    const instance = component.root;

    const searchButton = instance.findByType('button');
    searchButton.props.onClick();

    expect(mockProps.onSearchClick).toHaveBeenCalledTimes(1);
  });

  it('displays error message when isError is true', () => {
    const component = renderer.create(
      <StyledEngineProvider injectFirst>
        <Search
          onFieldChange={mockProps.onFieldChange}
          onKeyDown={mockProps.onKeyDown}
          onSearchClick={mockProps.onSearchClick}
          isError
          value={mockProps.value}
        />
      </StyledEngineProvider>,
    );
    const instance = component.root;
    const helperText = instance.findByType('p');
    expect(helperText.children).toContain('Can not be empty.');
  });
});
