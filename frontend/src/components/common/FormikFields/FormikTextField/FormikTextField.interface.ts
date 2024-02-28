import { FieldInputProps, FormikProps } from 'formik';

type InputType = 'text' | 'password' | 'number' | 'date';

export interface FormikTextFieldProps {
  label: string | null;
  form: FormikProps<any>;
  field: FieldInputProps<string>;
  type?: InputType;
}

export interface FormikTextFieldHooksProps {
  form: FormikProps<any>;
  field: FieldInputProps<string>;
}
