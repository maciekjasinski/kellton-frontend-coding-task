import * as yup from 'yup';
import { parsePhoneNumber } from 'libphonenumber-js';
import { EMAIL_REGEX } from '@/utils';

export const initialValues = {
  name: '',
  surname: '',
  phoneNumber: '',
  email: '',
  dateOfBirth: '',
  address: '',
  city: '',
  state: '',
  zipCode: '',
};

export const validationSchema = yup.object().shape({
  name: yup.string().required('Name is required'),
  surname: yup.string().required('Surname is required'),
  phoneNumber: yup
    .string()
    .test('phoneNumber', 'Phone number is not valid', function () {
      const fieldValue = this.parent.phoneNumber;
      if (fieldValue) {
        try {
          const phoneNumner = parsePhoneNumber(fieldValue, 'US');
          const isValid = phoneNumner.isValid();
          const isPossible = phoneNumner.isPossible();
          return isValid && isPossible;
        } catch (err) {
          return this.createError();
        }
      }
      return this.createError();
    })
    .required('Phone number is required'),
  email: yup.string().required('Email is required').matches(EMAIL_REGEX, 'Invalid email'),
  dateOfBirth: yup
    .date()
    .required('Date of birth is required')
    .test('dateOfBirth', 'Should be greater than 18', function () {
      const value = this.parent.dateOfBirth;
      const dateOfBirth = new Date(value);
      const nowDate = new Date();
      const valid = nowDate.getFullYear() - dateOfBirth.getFullYear() >= 18;
      return !valid ? this.createError() : valid;
    }),
  address: yup.string().required('Address is required'),
  city: yup.string().required('City is required'),
  state: yup.string().required('State is required'),
  zipCode: yup.string().required('Zip code is required'),
});
