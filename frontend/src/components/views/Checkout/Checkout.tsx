import { Formik, Form } from 'formik';
import { Form as FromSection } from './Sections/Form';
import { Summary } from './Sections/Summary';
import { useCheckout } from './Checkout.hooks';
import { initialValues, validationSchema } from './utils';
import { Link } from 'react-router-dom';

export const Checkout = () => {
  const { selectedMinifig, handleSubmit } = useCheckout();

  if (!selectedMinifig) {
    return (
      <div className="flex min-h-dvh items-center p-4">
        <div className="flex w-full flex-col items-center gap-4 rounded bg-white p-4">
          <h1 className="text-center text-2xl font-bold uppercase text-black">Your cart is empty!</h1>
          <p className="text-center text-base text-gray-400">Please choose your minifig.</p>
          <Link to="/choose-minifig" className="w-full">
            <button className="btn btn-primary w-full text-white">Select minifig</button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="p-4 lg:mx-auto lg:w-8/12">
      <h1 className="text-2xl font-bold uppercase text-white">Shipping details</h1>
      <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={validationSchema}>
        <Form className="flex flex-col gap-16 lg:grid lg:grid-cols-checkoutGrid lg:gap-24">
          <FromSection />
          <Summary />
        </Form>
      </Formik>
    </div>
  );
};
