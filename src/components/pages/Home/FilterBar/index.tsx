import { SelectChangeEvent } from '@mui/material';
import FilterSelect from './FilterSelect';
import { categoryItems, sortingItems } from './consts';
import { FilterBarWrapper } from './styled';

export interface IFilterBarProps {
  category: string;
  onCategorySelectChange: (e: SelectChangeEvent<unknown>) => void;
  sort: string;
  onSortingSelectChange: (e: SelectChangeEvent<unknown>) => void;
}

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
