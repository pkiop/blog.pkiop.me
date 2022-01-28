import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Post from '@components/UI/Post';
import { getArticleBySlug } from '@api/index';

const PostContainer = () => {
  const [content, setContent] = useState<any>(null);
  const { slug, subSlug } = useParams();
  const navigate = useNavigate();
  const fetchData = async () => {
    let requestSlug = slug ?? '';
    if (subSlug) {
      requestSlug += `/${subSlug}`;
    }
    try {
      const response = await getArticleBySlug(requestSlug);
      setContent(response);
    } catch (err) {
      navigate('/not-found');
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (!content) return <> </>;
  const { title, updateAt: date, readTime, contents } = content;
  return <Post title={title} date={date} readTime={readTime} html={contents} />;
};

export default PostContainer;
