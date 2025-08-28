import { Search } from "./components/Search/Search";
import { Layout } from "./components/Layout/Layout";
import { ColumnContainer } from "./components/Column/ColumnContainer/ColumnContainer";

export const App = () => {
  return (
    <Layout>
      <Search></Search>
      <ColumnContainer></ColumnContainer>
    </Layout>
  );
};
