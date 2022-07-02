import { useNavigate } from "react-router-dom";
import { Formik } from "formik";
import * as Yup from "yup";
import { postLogin } from "../../http";
import './loginContent.scss'

const LoginContent = () => {
  const navigate = useNavigate();

  const handleSubmit = async (values) => {

    try {
      const res = await postLogin(values)

      if (res.message) {
        alert(res.message)
      }
      if (res.token) {
        localStorage.setItem('token', res.token)
        navigate("../admin", { replace: true })
      }
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <div className='login-content'>
      <Formik
        initialValues={{ login: "", password: "" }}
        validateOnChange={false}
        validateOnBlur={false}
        onSubmit={values => {
          handleSubmit(values)
        }}
        validationSchema={Yup.object().shape({
          login: Yup.string("Введите имя").required("Обязательное поле"),
          password: Yup.string("Введите пароль").required("Обязательное поле")
        })}
      >
        {props => (
          <form 
            className='login-content__auth' 
            onSubmit={props.handleSubmit}
            >
            <h2 className="login-content__header">Авторизация</h2>
            <label className='login-content__label'>
              <div className='login-content__label-text'>Логин</div>
              <input 
                className={
                  props.errors.login && props.touched.login ?
                  'login-content__input login-content__input_error'
                  :
                  'login-content__input' 
                }
                name='login' 
                type="text" 
                value={props.values.login}
                onChange={(e) => {
                  const newErrors = props.errors
                  delete newErrors.login
                  props.setErrors(newErrors)
                  props.handleChange(e)
                }}
                onBlur={props.handleBlur} />
              {props.errors.login && props.touched.login && (
                <div className="login-content__input-feedback">{props.errors.login}</div>
              )}
            </label>
            <label className='login-content__label'>
              <div className='login-content__label-text'>Пароль</div>
              <input 
                className={
                  props.errors.password && props.touched.password ?
                  'login-content__input login-content__input_error'
                  :
                  'login-content__input' 
                }
                name='password' 
                type="password" 
                value={props.values.password}
                onChange={(e) => {
                  const newErrors = props.errors
                  delete newErrors.password
                  props.setErrors(newErrors)
                  props.handleChange(e)
                }}
                onBlur={props.handleBlur} />
              {props.errors.password && props.touched.password && (
                <div className="login-content__input-feedback">{props.errors.password}</div>
              )}
            </label>
            <button
              className='login-content__submit'
              type='submit'
              // disabled={props.isSubmitting}
            >
              Логин
            </button>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default LoginContent;