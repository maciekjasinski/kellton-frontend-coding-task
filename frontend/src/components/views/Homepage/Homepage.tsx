import { Link } from 'react-router-dom';

export const Homepage = () => {
  return (
    <div className="flex min-h-dvh flex-col items-center justify-center gap-8 px-4">
      <h1 className="text-2xl font-bold uppercase text-white">Lego minifigs mystery box</h1>
      <Link to="/choose-minifig" className="w-full">
        <button className="btn btn-primary w-full">Let's go!</button>
      </Link>
    </div>
  );
};
