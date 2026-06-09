import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
  return (
    <div className="register-page section">
      <div className="container">
        <div className="form-container">
          <h1 style={{ textAlign: 'center', marginBottom: '2rem', fontSize: '1.75rem' }}>Đăng Ký Tài Khoản</h1>
          <form>
            <div className="form-group">
              <label>Họ tên</label>
              <input type="text" className="form-control" placeholder="Nhập họ tên" />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input type="email" className="form-control" placeholder="Nhập email" />
            </div>
            <div className="form-group">
              <label>Mật khẩu</label>
              <input type="password" className="form-control" placeholder="Tạo mật khẩu" />
            </div>
            <div className="form-group">
              <label>Xác nhận mật khẩu</label>
              <input type="password" className="form-control" placeholder="Nhập lại mật khẩu" />
            </div>
            <div style={{ marginBottom: '1.5rem', display: 'flex', gap: '0.5rem', alignItems: 'flex-start' }}>
              <input type="checkbox" id="terms" style={{ marginTop: '4px' }} />
              <label htmlFor="terms" style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                Tôi đồng ý với các điều khoản và chính sách bảo mật của KeyboardShop.
              </label>
            </div>
            <button type="button" className="btn btn-primary" style={{ width: '100%', padding: '0.75rem' }}>
              Đăng Ký
            </button>
          </form>
          <div style={{ textAlign: 'center', marginTop: '1.5rem', color: 'var(--text-muted)' }}>
            Đã có tài khoản? <Link to="/login" style={{ color: 'var(--primary-color)', fontWeight: 600 }}>Đăng nhập</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
