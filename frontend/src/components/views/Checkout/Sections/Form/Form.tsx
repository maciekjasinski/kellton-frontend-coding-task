import { Field, FieldInputProps, FormikProps } from 'formik';
import { FormikTextField } from '@common/FormikFields/FormikTextField';
import { FormikValuesInterface } from '../../Checkout.interface';
import { formatPhoneNumber } from '@/utils';

export const Form = () => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-4 lg:w-full lg:flex-row">
        <Field name="name" component={FormikTextField} label="Name" />
        <Field name="surname" component={FormikTextField} label="Surname" />
      </div>
      <Field name="phoneNumber">
        {({ field, form }: { form: FormikProps<FormikValuesInterface>; field: FieldInputProps<string> }) => (
          <FormikTextField
            form={form}
            field={{
              ...field,
              value: formatPhoneNumber(field.value),
            }}
            label="Phone number"
          />
        )}
      </Field>
      <Field name="email" component={FormikTextField} label="Email" />
      <Field name="dateOfBirth" component={FormikTextField} label="Date of birth" type="date" />
      <Field name="address" component={FormikTextField} label="Address" />
      <Field name="city" component={FormikTextField} label="City" />
      <div className="flex flex-col gap-4 lg:w-full lg:flex-row">
        <Field name="state" component={FormikTextField} label="State" />
        <Field name="zipCode" component={FormikTextField} label="Zip code" />
      </div>
    </div>
  );
};
