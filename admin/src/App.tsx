import Input from './components/ArticleInput';
import ArticleList from './components/ArticleList';
import { RecoilRoot } from 'recoil';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

function App() {
  return (
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>
        <ArticleList />
        <div className='App text-3xl underline'>start</div>
        <Input></Input>
      </QueryClientProvider>
    </RecoilRoot>
  );
}

export default App;
