import Input from './components/Input';
import ArticleList from './components/ArticleList';
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from 'recoil';

function App() {
  return (
    <RecoilRoot>
      <ArticleList />
      <div className='App text-3xl underline'>start</div>
      <Input></Input>
    </RecoilRoot>
  );
}

export default App;
