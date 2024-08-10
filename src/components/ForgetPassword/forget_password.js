import React from 'react';
import './ForgetPassword.css';

function ForgetPassword() {
  return (
    <div className="container">
      <div className="welcome-section">
        <h1>Hoşgeldiniz</h1>
        <p>Kira Takip Uygulamamız ile kira işlemlerinizi zahmetsizce yönetin. Yenilikçi özelliklerimizle tüm kira süreçlerinizi sorunsuzca takip edin ve yönetin.</p>
        <p>Üyeliğiniz yoksa yeni üyelik oluşturun.</p>
      </div>
      <div className="forget-password-section">
        <h2>Şifremi unuttum!</h2>
        <p>Endişelenmeyin! E-posta adresinizi girin, hesabınıza tek kullanımlık bir şifre göndereceğiz. Olan şifreniz gitikten sonra yeni şifrenizi belirleyebilirsiniz.</p>
        <input type="email" placeholder="E-mail" />
        <button>Şifremi unuttum</button>
      </div>
    </div>
  );
}

export default ForgetPassword;
