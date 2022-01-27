import { testContent } from '@fixture/ContentsList';
import Content from './index';

export default {
  title: 'Content',
  component: Content,
};

export const MainContent = () => <Content content={testContent} />;
