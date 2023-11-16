import { useDispatch, useSelector } from 'react-redux';
import { getFilter, updateFilter } from 'redux/filterSlice';

import { Input } from './Filter.styled';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);

  const handleChange = e => {
    dispatch(updateFilter(e.target.value));
  };

  return (
    <>
      <label htmlFor="filter">Find contacts by name</label>
      <Input
        type="text"
        id="filter"
        name="filter"
        value={filter}
        onChange={handleChange}
        required
      />
    </>
  );
};
