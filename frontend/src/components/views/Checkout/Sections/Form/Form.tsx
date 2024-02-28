import { Field } from 'formik';
import { FormikTextField } from '@common/FormikFields/FormikTextField';

export const Form = () => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-4 lg:w-full lg:flex-row">
        <Field name="name" component={FormikTextField} label="Name" />
        <Field name="surname" component={FormikTextField} label="Surname" />
      </div>
      <Field name="phoneNumber" component={FormikTextField} label="Phone number" />
      <Field name="email" component={FormikTextField} label="Email" />
      <Field name="dateOfBirth" component={FormikTextField} label="Date of birth" />
      <Field name="address" component={FormikTextField} label="Address" />
      <Field name="city" component={FormikTextField} label="City" />
      <div className="flex flex-col gap-4">
        <Field name="state" component={FormikTextField} label="State" />
        <Field name="zipCode" component={FormikTextField} label="Zip code" />
      </div>
    </div>
  );
};
