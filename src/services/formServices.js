import { Axios } from '../config/axios';
import { requests } from '../config/apiroutes';

export const FormService = {
  store: (data) => {
    console.log('data===>>>', data);

    const { title, fname, lname, email, phoneNumber, cv, coverLetter } = data;

    const formData = new FormData();
    formData.append('fname', fname);
    formData.append('lname', lname);
    formData.append('email', email);
    formData.append('phoneNumber', phoneNumber);
    formData.append('coverLetter', coverLetter);
    formData.append('title', title);
    formData.append('cv', cv);

    Axios.post(requests.formApi.store, formData)
      .then((res) => {
        return res;
      })
      .catch((err) => {
        return err;
      });
  }
};
