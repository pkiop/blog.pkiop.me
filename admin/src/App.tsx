import ArticleInput from './components/ArticleInput';
import ArticleList from './components/ArticleList';
import CategoryInput from './components/CategoryInput';
import CategoryList from './components/CategoryList';
import { RecoilRoot } from 'recoil';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

function App() {
  return (
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>
        <div>
          <ArticleList />
          <ArticleInput />
        </div>
        <div>
          <CategoryList />
          <CategoryInput />
        </div>
      </QueryClientProvider>
    </RecoilRoot>
  );
}

export default App;
