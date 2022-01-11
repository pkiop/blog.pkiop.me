let iter = 1;

const parseContents = (contents: string) => {
  return contents.replaceAll('"', `\\"`);
};

const makeSQL = async (filePath: string) => {
  const text = await Deno.readTextFile(filePath);

  const textEncoder = new TextEncoder();
  const [_, metaData, content] = text.split('---');

  const categoryIdMapper: any = {
    개발: 1,
    'blog.pkiop.me': 2,
    lifemanager: 3,
    'express.js': 4,
    algorithm: 5,
    책: 6,
    b개발: 7,
    b돈: 8,
    b자기계발: 9,
    생각: 10,
    l개발: 11,
    l인생: 12,
    l돈: 13,
  }; // ex

  const tagIdMapper: any = {
    React: 1,
    AWS: 2,
    CSS: 3,
    'Google Analytics': 4,
    마케팅: 5,
    세바시: 6,
    뇌과학: 7,
    Backend: 8,
    백준: 9,
    Express: 10,
    심리학: 11,
  };

  const metaDataMap = metaData.split('\n').reduce((acc: any, meta) => {
    let [key, value]: any[] = meta.split(':').map((el) => el.trim());
    value = value?.replaceAll("'", '');
    value = value?.replaceAll('"', '');
    if (key === 'mainCategory') {
      return {
        ...acc,
        mainCategoryId: categoryIdMapper[value],
      };
    }
    if (key === 'subCategory') {
      let attachChar = '';
      if (acc.mainCategoryId === 6) attachChar = 'b';
      if (acc.mainCategoryId === 10) attachChar = 'l';
      return {
        ...acc,
        subCategoryId: categoryIdMapper[attachChar + value],
      };
    }
    if (key === 'tag') {
      return {
        ...acc,
        tagList: value
          .replaceAll('[', '')
          .replaceAll(']', '')
          .split(',')
          .map((el: string) => el.trim()),
      };
    }
    return {
      ...acc,
      [key]: value,
    };
  }, {});

  const sqlString = `
    INSERT INTO article(title, summary, createAt, updateAt, slug, mainCategoryId, subCategoryId, readTime, contents, showAt)
    VALUES ("${metaDataMap.title}", "${metaDataMap.summary}", "${
    metaDataMap.date
  }", "${metaDataMap.date}", "${
    metaDataMap.slug[0] !== '/'
      ? '/' + metaDataMap.slug.replaceAll('/', '-')
      : metaDataMap.slug
  }" , ${metaDataMap.mainCategoryId}, ${metaDataMap.subCategoryId}, ${
    metaDataMap.readTime
  }, "${parseContents(content)}", "2020-01-01");
  `;
  const articleCnt = iter;
  console.log('tagList : ', metaDataMap.tagList);
  const sqlTagString = metaDataMap.tagList.map((el: string) => {
    if (!el) return '';
    return `
      INSERT INTO article_tag(articleId, tagId)
      VALUES (${articleCnt}, ${tagIdMapper[el]});
  
    `;
  });

  await Deno.writeFile(
    './write.sql',
    textEncoder.encode(sqlString + sqlTagString.join('')),
    { append: true }
  );
};

for await (const dirEntry of Deno.readDir('migrate/markdown-pages/boj')) {
  const pathName = 'migrate/markdown-pages/boj' + '/' + dirEntry.name;
  await makeSQL(pathName);
  iter++;
}

for await (const dirEntry of Deno.readDir(
  'migrate/markdown-pages/post/book/self-improvment'
)) {
  const pathName =
    'migrate/markdown-pages/post/book/self-improvment' + '/' + dirEntry.name;
  await makeSQL(pathName);
  iter++;
}

for await (const dirEntry of Deno.readDir(
  'migrate/markdown-pages/post/develop'
)) {
  if (dirEntry.isDirectory) continue;
  const pathName = 'migrate/markdown-pages/post/develop' + '/' + dirEntry.name;
  await makeSQL(pathName);
  iter++;
}
for await (const dirEntry of Deno.readDir(
  'migrate/markdown-pages/post/develop/blog.pkiop.me'
)) {
  const pathName =
    'migrate/markdown-pages/post/develop/blog.pkiop.me' + '/' + dirEntry.name;
  await makeSQL(pathName);
  iter++;
}

for await (const dirEntry of Deno.readDir(
  'migrate/markdown-pages/post/develop/express'
)) {
  const pathName =
    'migrate/markdown-pages/post/develop/express' + '/' + dirEntry.name;
  await makeSQL(pathName);
  iter++;
}

for await (const dirEntry of Deno.readDir(
  'migrate/markdown-pages/post/think'
)) {
  const pathName = 'migrate/markdown-pages/post/think' + '/' + dirEntry.name;
  await makeSQL(pathName);
  iter++;
}
