import { InputLabel, MenuItem, SelectChangeEvent } from '@mui/material';
import { StyledSelect } from './styled';

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
  <>
    <InputLabel id={`${label}-select-labe}`}>{label}</InputLabel>
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
  </>
);

export default FilterSelect;
