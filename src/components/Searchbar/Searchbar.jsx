import { StyledForm } from './Searchbar.styled';

export const Searchbar = ({ handleSubmit }) => (
  <StyledForm onSubmit={handleSubmit}>
    <input
      className="input"
      type="text"
      name="searchInput"
      autoComplete="off"
      autoFocus
      placeholder="Search films by keyword"
    />
    <button type="submit" className="button">
      Search
    </button>
  </StyledForm>
);
