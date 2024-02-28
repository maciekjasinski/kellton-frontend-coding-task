import Glasses from '@assets/icons/glasses.svg?react';
import { MinifigCardProps } from './MinifigCard.interface';

export const MinifigCard = ({ name, detailsUrl, picture }: MinifigCardProps) => {
  return (
    <div className="flex w-full flex-col items-center gap-4 rounded-lg bg-white p-6">
      {picture ? (
        <img src={picture} alt={name} className="size-48 rounded-lg object-contain" />
      ) : (
        <div className="flex size-48 items-center justify-center rounded-full bg-gray-100">
          <Glasses className="size-24" />
        </div>
      )}
      <span className="text-center text-base font-bold text-info-content">{name}</span>
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
