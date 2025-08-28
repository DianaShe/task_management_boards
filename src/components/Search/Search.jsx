import { useDispatch } from "react-redux";
import { SearchForm, SearchInput } from "./Search.styled";
import { fetchBoard } from "../../redux/operations";
import { EmptyButton } from "../Button/Button.styled";

export const Search = () => {
  const dispatch = useDispatch();

    const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const search = form.elements.text.value;
    console.log(search)

    dispatch(fetchBoard(search))
    form.reset();
  };

  return (
    <SearchForm onSubmit={handleSubmit}>
      <SearchInput
        type="text"
        name="text"
        placeholder="Enter ID..."
      />
      <EmptyButton type="submit">Load</EmptyButton>
    </SearchForm>
  );
}