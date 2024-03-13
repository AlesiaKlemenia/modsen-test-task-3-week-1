import '@testing-library/jest-dom';

import { StyledEngineProvider } from '@mui/material';
import renderer from 'react-test-renderer';

import FilterBar from '@/pages/Home/FilterBar';
import { categoryItems, sortingItems } from '@/pages/Home/FilterBar/consts';

const mockCategorySelectChange = jest.fn();
const mockSortingSelectChange = jest.fn();

describe('Filter Bar component', () => {
  it('renders correctly with correct props', () => {
    const component = renderer.create(
      <StyledEngineProvider injectFirst>
        <FilterBar
          category={categoryItems[0].value}
          onCategorySelectChange={mockCategorySelectChange}
          sort={sortingItems[0].value}
          onSortingSelectChange={mockSortingSelectChange}
        />
      </StyledEngineProvider>,
    );

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('calls onCategorySelectChange when category is selected', () => {
    const component = renderer.create(
      <StyledEngineProvider injectFirst>
        <FilterBar
          category={categoryItems[0].value}
          onCategorySelectChange={mockCategorySelectChange}
          sort={sortingItems[0].value}
          onSortingSelectChange={mockSortingSelectChange}
        />
      </StyledEngineProvider>,
    );

    const instance = component.root;

    const categorySelect = instance.findByProps({ label: 'Category' });
    categorySelect.props.onSelectChange(categoryItems[1].value);
    expect(mockCategorySelectChange).toHaveBeenCalledWith(
      categoryItems[1].value,
    );
  });

  it('calls onSortingSelectChange when sorting option is selected', () => {
    const component = renderer.create(
      <StyledEngineProvider injectFirst>
        <FilterBar
          category={categoryItems[0].value}
          onCategorySelectChange={mockCategorySelectChange}
          sort={sortingItems[0].value}
          onSortingSelectChange={mockSortingSelectChange}
        />
      </StyledEngineProvider>,
    );

    const instance = component.root;

    const sortingSelect = instance.findByProps({ label: 'Sorting' });
    sortingSelect.props.onSelectChange(sortingItems[1].value);
    expect(mockSortingSelectChange).toHaveBeenCalledWith(sortingItems[1].value);
  });

  it('renders correct number of category items', () => {
    const component = renderer.create(
      <StyledEngineProvider injectFirst>
        <FilterBar
          category={categoryItems[0].value}
          onCategorySelectChange={mockCategorySelectChange}
          sort={sortingItems[0].value}
          onSortingSelectChange={mockSortingSelectChange}
        />
      </StyledEngineProvider>,
    );

    const instance = component.root;
    const categorySelect = instance.findByProps({ label: 'Category' });

    expect(categorySelect.props.items).toHaveLength(categoryItems.length);
  });

  it('renders correct number of sorting items', () => {
    const component = renderer.create(
      <StyledEngineProvider injectFirst>
        <FilterBar
          category={categoryItems[0].value}
          onCategorySelectChange={mockCategorySelectChange}
          sort={sortingItems[0].value}
          onSortingSelectChange={mockSortingSelectChange}
        />
      </StyledEngineProvider>,
    );

    const instance = component.root;
    const sortingSelect = instance.findByProps({ label: 'Sorting' });

    expect(sortingSelect.props.items).toHaveLength(sortingItems.length);
  });

  it('renders correct category value', () => {
    const component = renderer.create(
      <StyledEngineProvider injectFirst>
        <FilterBar
          category={categoryItems[1].value}
          onCategorySelectChange={mockCategorySelectChange}
          sort={sortingItems[0].value}
          onSortingSelectChange={mockSortingSelectChange}
        />
      </StyledEngineProvider>,
    );

    const instance = component.root;
    const categorySelect = instance.findByProps({ label: 'Category' });

    expect(categorySelect.props.value).toBe(categoryItems[1].value);
  });

  it('renders correct sorting value', () => {
    const component = renderer.create(
      <StyledEngineProvider injectFirst>
        <FilterBar
          category={categoryItems[0].value}
          onCategorySelectChange={mockCategorySelectChange}
          sort={sortingItems[1].value}
          onSortingSelectChange={mockSortingSelectChange}
        />
      </StyledEngineProvider>,
    );

    const instance = component.root;
    const sortingSelect = instance.findByProps({ label: 'Sorting' });

    expect(sortingSelect.props.value).toBe(sortingItems[1].value);
  });
});
