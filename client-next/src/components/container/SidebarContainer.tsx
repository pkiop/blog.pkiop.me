import Sidebar from '@components/UI/Sidebar';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getCategories, getTags } from '@state/createStore';
import { ITag } from 'types/tag.interface';
import { Category } from 'types/category.interface';
import { ContentLabel } from 'types/content.interface';

const SidebarContainer = () => {
  const dispatch = useDispatch();

  const articleLabels: ContentLabel[] = useSelector(
    (state: any) => state.articleLabels,
  );
  const categories = useSelector((state: any) => state.categories);
  const tags: ITag[] = useSelector((state: any) => state.tags);
  useEffect(() => {
    if (categories.length === 0) {
      dispatch(getCategories());
      dispatch(getTags());
    }
  }, []);

  const categoriesWithCount = categories.map((category: any) => ({
    ...category,
    mainCategory: {
      title: category.title,
      count: articleLabels.filter(
        (label) => label.mainCategory.title === category.title,
      ).length,
    },
    subCategory: category.subCategories.map((subCategoryText: any) => ({
      title: subCategoryText.title,
      count: articleLabels.filter(
        (label) => label.subCategory.title === subCategoryText.title,
      ).length,
    })),
  }));
  return <Sidebar categoryList={categoriesWithCount} tagList={tags} />;
};

export default SidebarContainer;
