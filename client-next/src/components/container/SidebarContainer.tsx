import { testCategoryList } from '@fixture/Category';
import Sidebar from '@components/UI/Sidebar';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getCategories } from '@state/createStore';

const SidebarContainer = () => {
  const dispatch = useDispatch();

  const staticData: any[] = [];
  const mainCategories = useSelector((state: any) => state.mainCategories);
  const subCategories = useSelector((state: any) => state.subCategories);

  useEffect(() => {
    dispatch(getCategories());
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
  const data = testCategoryList.map((testCategory: any) => ({
    ...testCategory,
    mainCategory: {
      title: testCategory.mainCategory.title,
      count: mainCategoryDatas[testCategory.mainCategory.title],
    },
    subCategory: testCategory.subCategory.map((subCategoryText: any) => ({
      title: subCategoryText.title,
      count: subCategoryDatas[subCategoryText.title],
    })),
  }));
  return <Sidebar categoryList={data} />;
};

export default SidebarContainer;
