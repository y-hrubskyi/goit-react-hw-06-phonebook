import { Input } from './Filter.styled';

export const Filter = ({ filter, filterInfo, onChange }) => {
  const handleChange = e => {
    onChange(e.target.value);
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
      {filterInfo}
    </>
  );
};
