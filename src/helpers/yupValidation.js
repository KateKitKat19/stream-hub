import * as Yup from 'yup';

export const validateRegistration = Yup.object({
  firstName: Yup.string()
    .min(2, 'Name should have at least 2 characters')
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
