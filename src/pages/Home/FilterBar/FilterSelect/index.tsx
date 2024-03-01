import { InputLabel, MenuItem } from '@mui/material';

import { IFilterSelectProps } from '@/pages/Home/FilterBar/FilterSelect/interfaces';
import {
  FilterWrapper,
  StyledSelect,
} from '@/pages/Home/FilterBar/FilterSelect/styled';

const FilterSelect = ({
  label,
  items,
  value,
  onSelectChange,
}: IFilterSelectProps): JSX.Element => (
  <FilterWrapper>
    <InputLabel id={`${label}-select-label}`} sx={{ color: 'rgba(0, 0, 0)' }}>
      {label}
    </InputLabel>
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
