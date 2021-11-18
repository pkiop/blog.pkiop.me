import { useDispatch, useSelector } from 'react-redux';
import { setMainCategory, setSubCategory } from 'state/createStore';
import type { IMainCategory, ISubCategory } from '..';
import * as S from './style';

export interface ISubCategoryComponent {
  className?: string;
  subCategory: ISubCategory[];
  mainCategory: IMainCategory;
}

function SubCategory({
  className,
  subCategory,
  mainCategory,
}: ISubCategoryComponent) {
  const dispatch = useDispatch();
  const selectedSubCategory: string[] = useSelector(
    (state: any) => state.subCategory,
  );
  const selectedMainCategory: string = useSelector(
    (state: any) => state.mainCategory,
  );
  const subCategoryComponents = subCategory.map((category: ISubCategory) => {
    const setCategory = () => {
      dispatch(setMainCategory(mainCategory.title));
      dispatch(setSubCategory(category.title));
    };
    return (
      <S.SubCategoryComponent<any>
        onClick={setCategory}
        key={category.title}
        isSelected={
          selectedMainCategory.includes(mainCategory.title) &&
          selectedSubCategory.includes(category.title)
        }
      >
        {category.title}
        <S.Count>{category.count ? `(${category.count})` : ''}</S.Count>
      </S.SubCategoryComponent>
    );
  });
  return (
    <S.SubCategory className={className}>{subCategoryComponents}</S.SubCategory>
  );
}

export default SubCategory;
