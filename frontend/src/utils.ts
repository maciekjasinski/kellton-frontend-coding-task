import parsePhoneNumber, { isPossiblePhoneNumber, CountryCode } from 'libphonenumber-js';

export const formatPhoneNumber = (phoneNumber: string, countryCode: CountryCode = 'US') => {
  const isPossible = isPossiblePhoneNumber(phoneNumber, countryCode);
  if (isPossible) {
    const phone = parsePhoneNumber(phoneNumber, countryCode);
    if (phone) {
      const formatNational = phone.formatNational();
      const formatInternational = phone.formatInternational();
      if (formatNational) {
        return formatNational;
      }
      if (formatInternational) {
        return formatInternational;
      }
    }
  }
  return phoneNumber;
};

export const EMAIL_REGEX = new RegExp(
  /^(([^<>()\[\]\\.,;:\s@"]+(.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}])|(([a-zA-Z-0-9]+.)+[a-zA-Z]{2,}))$/,
);
