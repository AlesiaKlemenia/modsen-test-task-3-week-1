import { MenuItem, SelectChangeEvent } from '@mui/material';
import { FilterWrapper, SelectLabel, StyledSelect } from './styled';

export interface ISelectItem {
  name: string;
  value: string;
}

interface IFilterSelectProps {
  label: string;
  items: ISelectItem[];
  value: string;
  onSelectChange: (e: SelectChangeEvent<unknown>) => void;
}

const FilterSelect = ({
  label,
  items,
  value,
  onSelectChange,
}: IFilterSelectProps): JSX.Element => (
  <FilterWrapper>
    <SelectLabel id={`${label}-select-label}`} sx={{ color: 'rgba(0, 0, 0)' }}>
      {label}
    </SelectLabel>
    <StyledSelect
      labelId={`${label}-select-label`}
      id={`${label}-select`}
      value={value}
      onChange={onSelectChange}
    >
      {items.map((item, i) => (
        <MenuItem key={i} value={item.value}>
          {item.name}
        </MenuItem>
      ))}
    </StyledSelect>
  </FilterWrapper>
);

export default FilterSelect;
