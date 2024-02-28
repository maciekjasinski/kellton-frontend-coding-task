import { Link } from 'react-router-dom';
import { clsx } from 'clsx';
import { MinifigCard } from '@common/MinifigCard';
import { useChooseMinifig } from './ChooseMinifig.hooks';

export const ChooseMinifig = () => {
  const { minifigs, isLoading, selectedMinifig, addToCart } = useChooseMinifig();
  return (
    <div className="flex min-h-dvh flex-col items-center justify-center gap-8 p-4 xl:mx-auto xl:w-maxWidth">
      <h1 className="text-2xl font-bold uppercase text-white">Choose your minifig</h1>
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
      <Link to="/checkout" className="w-full lg:w-fit">
        <button className="btn btn-primary w-full lg:w-fit" disabled={!selectedMinifig}>
          Proceed to shipment
        </button>
      </Link>
    </div>
  );
};
