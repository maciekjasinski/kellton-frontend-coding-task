import Glasses from '@assets/icons/glasses.svg?react';
import { useSummary } from './Summary.hooks';

export const Summary = () => {
  const { selectedMinifig, disabled, parts } = useSummary();
  return (
    <div className="flex flex-col gap-4 rounded bg-white p-6 lg:h-fit lg:justify-between">
      <div className="flex flex-col gap-4">
        <h2 className="text-2xl font-bold uppercase text-black">Summary</h2>
        <div className="flex flex-col items-center gap-4">
          {selectedMinifig?.picture ? (
            <img src={selectedMinifig.picture} alt={selectedMinifig.name} className="size-48 rounded object-contain" />
          ) : (
            <div className="flex size-48 items-center justify-center rounded-full bg-gray-100">
              <Glasses className="size-24" />
            </div>
          )}
          <span className="text-center text-base font-bold text-black">{selectedMinifig?.name}</span>
        </div>
        <span className="font-bold text-black">There are {parts.length} parts in this minifig:</span>
        {parts.map((each: any) => (
          <div className="flex gap-3">
            <img src={each.picture} alt={each.name} className="size-12 rounded object-contain" />
            <div className="flex flex-col">
              <span className="text-sm font-bold text-black">{each.name}</span>
              <span className="text-xs text-orange-500">{each.id}</span>
            </div>
          </div>
        ))}
      </div>
      <button className="btn btn-primary w-full disabled:text-black" type="submit" disabled={disabled}>
        Submit
      </button>
    </div>
  );
};
