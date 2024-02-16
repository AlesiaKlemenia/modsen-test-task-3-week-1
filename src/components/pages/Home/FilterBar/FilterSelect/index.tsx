import { InputLabel, MenuItem, SelectChangeEvent } from '@mui/material';

import { FilterWrapper, StyledSelect } from './styled';

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
