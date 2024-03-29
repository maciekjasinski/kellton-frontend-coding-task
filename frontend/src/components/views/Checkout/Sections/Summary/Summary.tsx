import Glasses from '@assets/icons/glasses.svg?react';
import { PartCard } from '@common/PartCard';
import { useSummary } from './Summary.hooks';

export const Summary = () => {
  const { selectedMinifig, disabled, parts, isLoading, isSubmitting } = useSummary();

  return (
    <div className="flex flex-col gap-8 rounded-3xl bg-white p-6 lg:justify-between lg:gap-4">
      <div className="flex flex-col gap-8">
        <h2 className="text-2xl font-bold uppercase text-info-content">Summary</h2>
        <div className="flex flex-col items-center gap-2">
          {selectedMinifig?.picture ? (
            <img src={selectedMinifig.picture} alt={selectedMinifig.name} className="size-48 object-contain" />
          ) : (
            <div className="flex size-48 items-center justify-center rounded-full bg-gray-100">
              <Glasses className="size-24" />
            </div>
          )}
          <span className="text-center text-base font-bold text-info-content">{selectedMinifig?.name}</span>
        </div>
        {isLoading ? (
          <span className="loading loading-bars loading-lg self-center"></span>
        ) : parts.length ? (
          <div className="flex flex-col gap-4">
            <span className="font-bold text-info-content">There are {parts.length} parts in this minifig:</span>
            {parts.map((part) => (
              <PartCard key={part.id} {...part} />
            ))}
          </div>
        ) : (
          <span>Failed to fetch minifig parts</span>
        )}
      </div>
      <button
        className="btn btn-primary w-full disabled:text-info-content"
        type="submit"
        disabled={isSubmitting || disabled}
      >
        {isSubmitting && <span className="loading loading-bars loading-xs"></span>}
        Submit
      </button>
    </div>
  );
};
