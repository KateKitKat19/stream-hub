import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import { validateLogin } from 'helpers/yupValidation';
import { useFormik } from 'formik';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = values => {
    dispatch(
      logIn({
        email: values.email,
        password: values.password,
      })
    );
  };

  const formik = useFormik({
    initialValues: { email: '', password: '' },
    validationSchema: validateLogin,
    onSubmit: handleSubmit,
  });

  return (
    <form onSubmit={formik.handleSubmit} autoComplete="off">
      <input
        id="email"
        name="email"
        type="email"
        onChange={formik.handleChange}
        value={formik.values.email}
        placeholder="Email"
      />
      {formik.touched.email && formik.errors.email ? (
        <div>{formik.errors.email}</div>
      ) : null}
      <input
        id="password"
        type="text"
        name="password"
        onChange={formik.handleChange}
        value={formik.values.password}
        placeholder="Password"
      />
      {formik.touched.password && formik.errors.password ? (
        <div>{formik.errors.password}</div>
      ) : null}
      <button type="submit">Submit</button>
    </form>
  );
};
