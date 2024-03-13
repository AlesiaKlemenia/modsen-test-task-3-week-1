import { MenuItem } from '@mui/material';

import { IFilterSelectProps } from '@/pages/Home/FilterBar/FilterSelect/interfaces';
import {
  FilterWrapper,
  StyledInputLabel,
  StyledSelect,
} from '@/pages/Home/FilterBar/FilterSelect/styled';

const FilterSelect = ({
  label,
  items,
  value,
  onSelectChange,
}: IFilterSelectProps): JSX.Element => (
  <FilterWrapper>
    <StyledInputLabel id={`${label}-select-label}`}>{label}</StyledInputLabel>
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
