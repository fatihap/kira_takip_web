import { ErrorMessage, Field, Form, Formik } from 'formik';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import './SignInForm.css';

const SignİnForm = () => {
  const navigate = useNavigate();

  return (
    <div className="container">
      <div className="form-wrapper">
        <div className="welcome-section">
          <h1 className="title">Hoşgeldiniz</h1>
          <p className="subtitle">
            Kira Takip Uygulamamız ile kira işlemlerinizi zahmetsizce yönetin.
            Yenilikçi özelliklerimizle tüm kira süreçlerinizi sorunsuzca takip
            edin ve yönetin.
          </p>
          <p>
            Üyeliğiniz yoksa <a href="#" onClick={() => navigate('/signup')} style={{ color: '#6c63ff', textDecoration: 'underline' }}>yeni üyelik</a> oluşturun.
          </p>
          <img
            src="path/to/your/image.png"
            alt="resim eklenecek"
            style={{ marginTop: '20px', width: '100%', height: 'auto' }}
          />
        </div>
        <div className="form-section">
          <h2 style={{ marginBottom: '30px', fontSize: '2rem', fontWeight: 'bold' }}>Giriş Yap</h2>
          <Formik
            initialValues={{
              email: '',
              password: '',
            }}
            validationSchema={Yup.object().shape({
              email: Yup.string().email('Geçersiz email').required('Zorunlu'),
              password: Yup.string().min(6, 'Şifre çok kısa').required('Zorunlu'),
            })}
            onSubmit={(values) => {
              console.log(values);
              navigate('/userpanel');
            }}
          >
            {({ errors, touched }) => (
              <Form className="styled-form">
                <Field
                  name="email"
                  placeholder="E-mail"
                  type="email"
                  className={`styled-field ${touched.email && errors.email ? 'is-invalid' : ''}`}
                />
                <ErrorMessage name="email" component="div" style={{ color: 'red', fontSize: '0.8rem', marginBottom: '10px' }} />
                <Field
                  name="password"
                  placeholder="Şifre"
                  type="password"
                  className={`styled-field ${touched.password && errors.password ? 'is-invalid' : ''}`}
                />
                <ErrorMessage name="password" component="div" style={{ color: 'red', fontSize: '0.8rem', marginBottom: '10px' }} />
                <div className="forget-password-container">
                  <p className="forget-password-text" onClick={() => navigate('/forgetpassword')}>
                    Şifremi Unuttum
                  </p>
                </div>
                <button type="submit" className="button">Giriş Yap</button>
               
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default SignİnForm;
