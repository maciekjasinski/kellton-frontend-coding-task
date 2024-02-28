import { FormikTextFieldHooksProps } from './FormikTextField.interface';

export const useFormikTextField = ({ form, field }: FormikTextFieldHooksProps) => {
  return {
    isInvalid: form.errors[field.name] && form.touched[field.name],
    errorMessage: (form.errors[field.name] || null) as string | null,
  };
};
