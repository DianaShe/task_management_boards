import { useSelector } from "react-redux";
import { getById } from "../../api/controllers";
import { selectTasks } from "../../redux/selector";
import { LoadButton, SearchForm, SearchInput } from "./Search.styled";

export const Search = () => {
  // const tasks = useSelector(state => state.tasks)

    const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const search = form.elements.text.value;
    console.log(search)
   
    form.reset();
    
  };

  return (
    <SearchForm onSubmit={handleSubmit}>
      <SearchInput
        type="text"
        name="text"
        placeholder="Enter ID..."
      />
      <LoadButton type="submit">Load</LoadButton>
    </SearchForm>
  );
}