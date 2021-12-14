import MainPage from '@pages/Main';
import { Routes, Route } from 'react-router-dom';

const App = () => (
  <Routes>
    <Route path="/*" element={<MainPage />} />
  </Routes>
);

export default App;
