import { Link } from 'react-router-dom';

export const Homepage = () => {
  return (
    <div className="flex min-h-dvh flex-col items-center justify-center gap-12 px-4">
      <h1 className="text-2xl font-extrabold uppercase text-white lg:text-4xl">Lego minifigs mystery box</h1>
      <Link to="/choose-minifig" className="w-full md:w-fit">
        <button className="btn btn-primary w-full shadow-buttonShadow md:w-fit">Let's go</button>
      </Link>
    </div>
  );
};
