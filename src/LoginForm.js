import React, { useState } from 'react';
import './LoginForm.css';
function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword]=useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Email:', email);
    console.log('Password:', password);
    console.log('Login thành công!');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Email: </label>
        <input
          type="email"
          className='input-field'
          placeholder="Nhập vào email của bạn"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Mật khẩu: </label>
        <input
          type={showPassword ? 'text': 'password'}
          className='input-field'
          placeholder="Điền mật khẩu"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <button type="submit" className="submit-button">Login</button>
    </form>
  );
}

export default LoginForm;
