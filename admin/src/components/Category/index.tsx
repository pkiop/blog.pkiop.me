import type { Category } from '../../types/category.interface';

const CategoryComponent = ({
  category,
  onClick,
}: {
  category: Category;
  onClick: any;
}) => {
  return (
    <div onClick={onClick}>
      <div className='text-4xl'>{category.title}</div>
      <div>{category.classification}</div>
      <div>{category.emoji}</div>
    </div>
  );
};

export default CategoryComponent;
