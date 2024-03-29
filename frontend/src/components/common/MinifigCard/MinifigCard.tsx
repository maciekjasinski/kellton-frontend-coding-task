import Glasses from '@assets/icons/glasses.svg?react';
import { MinifigType } from '@/types/minifig';

export const MinifigCard = ({ name, detailsUrl, picture }: MinifigType) => {
  return (
    <div className="flex h-full w-full flex-col items-center justify-between gap-4 rounded-lg bg-white p-6">
      <div className="flex flex-col items-center gap-4">
        {picture ? (
          <img src={picture} alt={name} className="size-48 object-contain" />
        ) : (
          <div className="flex size-48 items-center justify-center rounded-full bg-gray-100">
            <Glasses className="size-24" />
          </div>
        )}
        <span className="text-center text-base font-bold text-info-content">{name}</span>
      </div>
      <a
        href={detailsUrl}
        target="_blank"
        className="text-sm font-bold text-accent"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        Show details
      </a>
    </div>
  );
};
