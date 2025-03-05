import CryptoJS from 'crypto-js';

import { useAppSelector } from 'store';
import { selectUserId } from 'features/user';

const useCrypto = () => {
  const key = useAppSelector(selectUserId);

  const encryptString = (message: string): string => {
    return CryptoJS.AES.encrypt(message, key).toString();

    // possible output: an object
    // return CryptoJS.AES.encrypt(message, key);
    // encrypted.key.toString()
    // encrypted.iv.toString()
    // encrypted.salt.toString()
    // encrypted.ciphertext.toString()
  };

  const decryptString = (data: string): string => {
    const bytes = CryptoJS.AES.decrypt(data, key);
    return bytes.toString(CryptoJS.enc.Utf8);
  };

  const encryptObject = (data: object): string => {
    return CryptoJS.AES.encrypt(JSON.stringify(data), key).toString();
  };

  const decryptObject = (data: string): object => {
    const bytes = CryptoJS.AES.decrypt(data, key);
    return JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
  };

  return { encryptString, decryptString, encryptObject, decryptObject };
};

export { useCrypto };
