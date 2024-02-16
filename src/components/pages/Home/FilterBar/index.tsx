import { IFilterBarProps } from '../../../../interfaces/IFilterBarProps';
import { categoryItems, sortingItems } from './consts';
import FilterSelect from './FilterSelect';
import { FilterBarWrapper } from './styled';

const FilterBar = ({
  category,
  onCategorySelectChange,
  sort,
  onSortingSelectChange,
}: IFilterBarProps): JSX.Element => (
  <FilterBarWrapper>
    <FilterSelect
      label="Category"
      items={categoryItems}
      value={category}
      onSelectChange={onCategorySelectChange}
    />
    <FilterSelect
      label="Sorting"
      items={sortingItems}
      value={sort}
      onSelectChange={onSortingSelectChange}
    />
  </FilterBarWrapper>
);

export default FilterBar;
