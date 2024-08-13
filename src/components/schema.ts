import * as yup from 'yup';

export const FormSchema = yup
  .object({
    userId: yup.string().length(11).required('Required'),
    group: yup.string().required('Required')
  })
  .required();
