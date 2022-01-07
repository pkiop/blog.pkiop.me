import Sidebar from '@components/UI/Sidebar';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getCategories, getTags } from '@state/createStore';

const SidebarContainer = () => {
  const dispatch = useDispatch();

  const staticData: any[] = [];
  const categories = useSelector((state: any) => state.categories);
  const tags = useSelector((state: any) => state.tags);

  useEffect(() => {
    dispatch(getCategories());
    dispatch(getTags());
  }, []);

  const mainCategoryDatas = staticData.reduce((acc: any, edges: any) => {
    const value = edges.node.frontmatter;
    if (value.mainCategory in acc) {
      return {
        ...acc,
        [value.mainCategory]: acc[value.mainCategory] + 1,
      };
    }
    return {
      ...acc,
      [value.mainCategory]: 1,
    };
  }, {});
  const subCategoryDatas = staticData.reduce((acc: any, edges: any) => {
    const value = edges.node.frontmatter;
    if (value.subCategory in acc) {
      return {
        ...acc,
        [value.subCategory]: acc[value.subCategory] + 1,
      };
    }
    return {
      ...acc,
      [value.subCategory]: 1,
    };
  }, {});

  const categoriesWithCount = categories.map((category: any) => ({
    ...category,
    mainCategory: {
      title: category.title,
      count: mainCategoryDatas[category.title],
    },
    subCategory: category.subCategories.map((subCategoryText: any) => ({
      title: subCategoryText.title,
      count: subCategoryDatas[subCategoryText.title],
    })),
  }));
  return <Sidebar categoryList={categoriesWithCount} tagList={tags} />;
};

export default SidebarContainer;
