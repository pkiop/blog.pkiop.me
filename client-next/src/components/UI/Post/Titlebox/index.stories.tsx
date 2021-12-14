import { testFrontmatter } from 'fixture/Post';
import TitleBoxApp from './index';

export default {
  title: 'Posts / Titlebox',
  component: TitleBoxApp,
};

export const MainTitlebox = () => (
  <TitleBoxApp
    title={testFrontmatter.title}
    date={testFrontmatter.date}
    readTime={testFrontmatter.readTime}
  />
);
