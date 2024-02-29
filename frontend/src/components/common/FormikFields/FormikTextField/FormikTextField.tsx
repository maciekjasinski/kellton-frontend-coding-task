import clsx from 'clsx';
import { useFormikTextField } from './FormikTextField.hooks';
import { FormikTextFieldProps } from './FormikTextField.interface';

export const FormikTextField = ({ label, type = 'text', field, form }: FormikTextFieldProps) => {
  const { isInvalid, errorMessage } = useFormikTextField({ form, field });

  return (
    <label className="lg:min-w-xs form-control w-full">
      {label && (
        <div className="label px-0 pb-1">
          <span className="label-text font-bold text-white">{label}</span>
        </div>
      )}
      <input
        {...field}
        type={type}
        placeholder="Type here"
        className={clsx(
          'lg:min-w-xs input input-bordered w-full bg-white text-info-content placeholder:text-gray-400',
          isInvalid && 'input-error border-2',
        )}
      />
      {isInvalid && errorMessage && (
        <div className="label px-0 pt-1">
          <span className="text-xs text-error">{errorMessage}</span>
        </div>
      )}
    </label>
  );
};
