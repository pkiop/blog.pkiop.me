import Post from '@components/UI/Post';

const PostContainer = () => {
  const response = {
    data: {
      title: '안녕',
      date: new Date(),
      readTime: 3,
      html: `<h1>안녕하세요 ${'!!'}</h1>`,
    },
  };
  const { title, date, readTime, html } = response.data;
  return <Post title={title} date={date} readTime={readTime} html={html} />;
};

export default PostContainer;
