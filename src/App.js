import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import ForgetPassword from './components/ForgetPassword/forget_password';
import SignİnForm from './components/SignIn/sign_in';
import SignUpForm from './components/SignUp/sign_up';
import UserPanel from './components/UserPanel/user_panel';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignİnForm />} />
        <Route path="/signin" element={<SignİnForm />} />
        <Route path="/forgetpassword" element={<ForgetPassword />} />
        <Route path="/userpanel" element={<UserPanel />} />
        <Route path="/signup" element={<SignUpForm />} />
      </Routes>
    </Router>
  );
}

export default App;
