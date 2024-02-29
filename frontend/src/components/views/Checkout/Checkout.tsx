import { Link } from 'react-router-dom';
import { Formik, Form } from 'formik';
import { Form as FromSection } from './Sections/Form';
import { Summary } from './Sections/Summary';
import { useCheckout } from './Checkout.hooks';
import { initialValues, validationSchema } from './utils';

export const Checkout = () => {
  const { selectedMinifig, handleSubmit } = useCheckout();

  if (!selectedMinifig) {
    return (
      <div className="flex min-h-dvh items-center justify-center p-4 xl:mx-auto xl:w-maxWidth">
        <div className="flex w-full flex-col items-center gap-12 rounded-3xl bg-white p-4 lg:w-fit lg:p-12">
          <div className="flex flex-col gap-2">
            <h1 className="text-center text-2xl font-bold uppercase text-info-content">Your cart is empty!</h1>
            <p className="text-center text-base text-gray-400">Please choose your minifig.</p>
          </div>
          <Link to="/choose-minifig" className="w-full lg:w-fit">
            <button className="btn btn-primary w-full text-white">Select minifig</button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-6 p-4 xl:mx-auto xl:min-h-dvh xl:w-maxWidth xl:p-0 xl:py-12">
      <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={validationSchema}>
        <Form className="flex flex-col gap-16 lg:grid lg:min-h-[calc(100dvh-96px)] lg:grid-cols-checkoutGrid lg:gap-24">
          <div className="flex flex-col gap-8 lg:justify-center">
            <h1 className="text-2xl font-extrabold uppercase text-white lg:text-3xl">Shipping details</h1>
            <FromSection />
          </div>
          <Summary />
        </Form>
      </Formik>
    </div>
  );
};
