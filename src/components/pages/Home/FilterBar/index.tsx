import { SelectChangeEvent } from '@mui/material';
import FilterSelect from './FilterSelect';
import { categoryItems, sortingItems } from './consts';
import { FilterBarWrapper } from './styled';

interface IFilterBarProps {
  categoryValue: string;
  onCategorySelectChange: (e: SelectChangeEvent<unknown>) => void;
  sortingValue: string;
  onSortingSelectChange: (e: SelectChangeEvent<unknown>) => void;
}

const FilterBar = ({
  categoryValue,
  onCategorySelectChange,
  sortingValue,
  onSortingSelectChange,
}: IFilterBarProps): JSX.Element => (
  <FilterBarWrapper>
    <FilterSelect
      label={'Category'}
      items={categoryItems}
      value={categoryValue}
      onSelectChange={onCategorySelectChange}
    ></FilterSelect>
    <FilterSelect
      label={'Sorting'}
      items={sortingItems}
      value={sortingValue}
      onSelectChange={onSortingSelectChange}
    ></FilterSelect>
  </FilterBarWrapper>
);

export default FilterBar;
