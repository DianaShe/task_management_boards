import { useDispatch, useSelector } from "react-redux";
import { selectTasks } from "../../redux/selector";
import { LoadButton, SearchForm, SearchInput } from "./Search.styled";
import { fetchBoard } from "../../redux/operations";

export const Search = () => {
  const tasks = useSelector(state => state.tasks)
  // const [items, setItems] = useState([])
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
      <LoadButton type="submit">Load</LoadButton>
    </SearchForm>
  );
}