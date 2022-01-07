import type { Tag } from '../../types/tag.interface';

const tagComponent = ({ tag, onClick }: { tag: Tag; onClick: any }) => {
  return (
    <div onClick={onClick}>
      <div
        className='text-4xl'
        style={{ color: tag.fontColor, backgroundColor: tag.color }}
      >
        {tag.title}
      </div>
    </div>
  );
};

export default tagComponent;
