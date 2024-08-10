import { ErrorMessage, Field, Form, Formik } from 'formik';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import './SignUpFormStyle.css';

const SignUpSchema = Yup.object().shape({
  email: Yup.string().email('Geçersiz email').required('Zorunlu'),
  name: Yup.string().required('Zorunlu'),
  phone: Yup.string().required('Zorunlu'),
  password: Yup.string().min(6, 'Şifre çok kısa').required('Zorunlu'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Şifreler eşleşmiyor')
    .required('Zorunlu'),
});

const SignUpForm = () => {
  const navigate = useNavigate();

  return (
    <div className="container">
      <div className="form-wrapper">
        <div className="welcome-section">
          <h1 className="title">Hoşgeldiniz</h1>
          <p className="subtitle">
            Kira Takip Uygulamamız ile kira işlemlerinizi zahmetsizce yönetin.
            Yenilikçi özelliklerimizle tüm kira süreçlerinizi sorunsuzca takip edin ve yönetin.
          </p>
          <p>
            Üyeliğiniz varsa <a href="#" onClick={() => navigate('/signin')} style={{ color: '#6c63ff', textDecoration: 'underline' }}> giriş yapın</a>.
          </p>
          <img
            src="path/to/your/image.png"
            alt="resim eklenecek"
            className="illustration"
          />
        </div>
        <div className="form-section">
          <h2>Kayıt Ol</h2>
          <Formik
            initialValues={{
              email: '',
              name: '',
              phone: '',
              password: '',
              confirmPassword: '',
            }}
            validationSchema={SignUpSchema}
            onSubmit={(values) => {
              // Handle form submission
              console.log(values);
            }}
          >
            {({ errors, touched }) => (
              <Form className="styled-form">
                <Field
                  name="email"
                  placeholder="E-mail"
                  type="email"
                  className={`styled-field ${touched.email && errors.email ? 'is-invalid' : ''
                    }`}
                />
                <ErrorMessage name="email" component="div" />

                <Field
                  name="name"
                  placeholder="Ad & Soyad"
                  type="text"
                  className={`styled-field ${touched.name && errors.name ? 'is-invalid' : ''
                    }`}
                />
                <ErrorMessage name="name" component="div" />

                <Field
                  name="phone"
                  placeholder="Telefon"
                  type="text"
                  className={`styled-field ${touched.phone && errors.phone ? 'is-invalid' : ''
                    }`}
                />
                <ErrorMessage name="phone" component="div" />

                <Field
                  name="password"
                  placeholder="Şifre"
                  type="password"
                  className={`styled-field ${touched.password && errors.password ? 'is-invalid' : ''
                    }`}
                />
                <ErrorMessage name="password" component="div" />

                <Field
                  name="confirmPassword"
                  placeholder="Tekrar Şifre"
                  type="password"
                  className={`styled-field ${touched.confirmPassword && errors.confirmPassword ? 'is-invalid' : ''
                    }`}
                />
                <ErrorMessage name="confirmPassword" component="div" />

                <button type="submit" className="button">
                  Kayıt Ol
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default SignUpForm;
