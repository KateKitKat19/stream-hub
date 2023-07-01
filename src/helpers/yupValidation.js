import * as Yup from 'yup';

export const validateRegistration = Yup.object({
  firstName: Yup.string()
    .min(3, 'Name should have at least 3 characters')
    .required('Name is required!'),
  lastName: Yup.string(),
  email: Yup.string().email('Email is invalid!').required('Email is required!'),
  password: Yup.string()
    .min(5, 'Password must be minimum 5 digits!')
    .required('Password is required!'),
});

export const validateLogin = Yup.object({
  email: Yup.string().email('Email is invalid!').required('Email is required!'),
  password: Yup.string()
    .min(5, 'Password must be minimum 5 digits!')
    .required('Password is required!'),
});

export const validateSubmission = Yup.object({
  name: Yup.string()
    .min(3, 'Name should have at least 3 characters')
    .max(20, 'Name should be no more than 20 characters')
    .required('Name is required!'),
  description: Yup.string()
    .min(3, 'Description must be minimum 3 digits!')
    .max(500, 'Description should have at most 500 characters!')
    .required('Description is required!'),
  platform: Yup.string(),
});
