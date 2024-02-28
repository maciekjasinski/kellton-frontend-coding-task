import * as yup from 'yup';

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
  phoneNumber: yup.string().required('Phone number is required'),
  email: yup.string().email('Invalid email').required('Email is required'),
  dateOfBirth: yup.string().required('Date of birth is required'),
  address: yup.string().required('Address is required'),
  city: yup.string().required('City is required'),
  state: yup.string().required('State is required'),
  zipCode: yup.string().required('Zip code is required'),
});
