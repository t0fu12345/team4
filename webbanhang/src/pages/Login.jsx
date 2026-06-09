import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className="login-page section">
      <div className="container">
        <div className="form-container">
          <h1 style={{ textAlign: 'center', marginBottom: '2rem', fontSize: '1.75rem' }}>Đăng Nhập</h1>
          <form>
            <div className="form-group">
              <label>Email</label>
              <input type="email" className="form-control" placeholder="Nhập email của bạn" />
            </div>
            <div className="form-group">
              <label>Mật khẩu</label>
              <input type="password" className="form-control" placeholder="Nhập mật khẩu" />
            </div>
            <div style={{ textAlign: 'right', marginBottom: '1.5rem' }}>
              <Link to="#" style={{ fontSize: '0.85rem', color: 'var(--primary-color)' }}>Quên mật khẩu?</Link>
            </div>
            <button type="button" className="btn btn-primary" style={{ width: '100%', padding: '0.75rem' }}>
              Đăng Nhập
            </button>
          </form>
          <div style={{ textAlign: 'center', marginTop: '1.5rem', color: 'var(--text-muted)' }}>
            Chưa có tài khoản? <Link to="/register" style={{ color: 'var(--primary-color)', fontWeight: 600 }}>Đăng ký ngay</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
