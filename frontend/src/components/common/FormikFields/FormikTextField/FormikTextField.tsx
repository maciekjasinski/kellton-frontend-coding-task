import clsx from 'clsx';
import { useFormikTextField } from './FormikTextField.hooks';
import { FormikTextFieldProps } from './FormikTextField.interface';

export const FormikTextField = ({ label, type = 'text', field, form }: FormikTextFieldProps) => {
  const { isInvalid, errorMessage } = useFormikTextField({ form, field });

  return (
    <label className="lg:min-w-xs form-control w-full">
      {label && (
        <div className="label">
          <span className="label-text font-bold text-white">{label}</span>
        </div>
      )}
      <input
        {...field}
        type={type}
        placeholder="Type here"
        className={clsx('lg:min-w-xs input input-bordered w-full bg-white', isInvalid && 'input-error')}
      />
      {isInvalid && errorMessage && (
        <div className="label">
          <span className="text-xs text-red-500">{errorMessage}</span>
        </div>
      )}
    </label>
  );
};
