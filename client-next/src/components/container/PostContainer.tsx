import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Post from '@components/UI/Post';
import { getArticleBySlug } from '@api/index';

const PostContainer = () => {
  const [content, setContent] = useState<any>(null);
  const { slug } = useParams();
  const fetchData = async () => {
    const response = await getArticleBySlug(slug ?? '');
    setContent(response);
  };
  useEffect(() => {
    fetchData();
  }, []);

  if (!content) return <> </>;
  const { title, updateAt: date, readTime, contents } = content;
  return <Post title={title} date={date} readTime={readTime} html={contents} />;
};

export default PostContainer;
