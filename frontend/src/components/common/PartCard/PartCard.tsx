import { MinifigPartType } from '@/types/minifig';

export const PartCard = ({ name, id, picture }: MinifigPartType) => {
  return (
    <div className="flex gap-3">
      {picture && <img src={picture} alt={name} className="size-12 object-contain" />}
      <div className="flex flex-col">
        <span className="text-sm font-bold text-info-content">{name}</span>
        <span className="text-xs text-accent">{id}</span>
      </div>
    </div>
  );
};
