
import { Search } from './components/Search/Search';
import { Layout } from './components/Layout/Layout';
import { ColumnContainer } from './components/Column/ColumnContainer/ColumnContainer';
import { AddTaskModal } from './components/Modal/AddTaskModal';

export const App = () => {
  return (
    <Layout>
      <Search></Search>
      <ColumnContainer>
      
      </ColumnContainer>
      {/* <AddTaskModal onActive={(show) => !show} isShow={true} option={"add"}/> */}
    </Layout>
    
  );
}

