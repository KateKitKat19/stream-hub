import * as Yup from 'yup';

export const validateRegistration = Yup.object({
  name: Yup.string()
    .min(3, 'Name should have at least 3 characters')
    .required('Name is required!'),
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
