import { clsx } from 'clsx';
import { MinifigCard } from '@common/MinifigCard';
import { useChooseMinifig } from './ChooseMinifig.hooks';

export const ChooseMinifig = () => {
  const { minifigs, isLoading, selectedMinifig, addToCart, redirectToCheckout } = useChooseMinifig();
  return (
    <div className="flex min-h-dvh flex-col items-center justify-center gap-8 p-4 lg:gap-20 xl:mx-auto xl:w-maxWidth xl:p-0">
      <h1 className="text-2xl font-extrabold uppercase text-white lg:text-3xl">Choose your minifig</h1>
      <div className="flex w-full flex-col gap-4">
        {isLoading ? (
          <>
            <span className="loading loading-bars loading-lg self-center"></span>
          </>
        ) : minifigs.length ? (
          <div className="flex flex-col gap-4 lg:grid lg:grid-cols-3">
            {minifigs.map((minifig, index: number) => (
              <div
                key={index}
                onClick={() => addToCart(minifig)}
                className={clsx(
                  selectedMinifig?.name === minifig.name ? 'drop-shadow-selectedShadow' : '',
                  'cursor-pointer',
                )}
              >
                <MinifigCard key={index} {...minifig} />
              </div>
            ))}
          </div>
        ) : (
          <div>
            <span>No minifigs found!</span>
          </div>
        )}
      </div>
      <button
        className="btn btn-primary w-full shadow-buttonShadow lg:w-fit"
        disabled={!selectedMinifig}
        onClick={redirectToCheckout}
      >
        Proceed to shipment
      </button>
    </div>
  );
};
