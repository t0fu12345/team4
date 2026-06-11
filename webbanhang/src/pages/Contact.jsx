import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
  return (
    <div className="contact-page section">
      <div className="container">
        <h1 className="section-title">Liên Hệ Với Chúng Tôi</h1>
        
        <div className="detail-grid">
          <div className="contact-info">
            <h2 style={{ marginBottom: '1.5rem' }}>Thông tin liên hệ</h2>
            <p style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>
              Chúng tôi luôn sẵn sàng lắng nghe ý kiến từ bạn. Hãy gửi tin nhắn cho chúng tôi nếu bạn có bất kỳ thắc mắc nào.
            </p>
            
            <div className="contact-items">
              <div style={{ display: 'flex', gap: '1rem', marginBottom: '1.5rem' }}>
                <div style={{ background: 'var(--bg-secondary)', padding: '1rem', borderRadius: '50%', color: 'var(--primary-color)' }}>
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 style={{ fontWeight: 600 }}>Địa chỉ</h4>
                  <p style={{ color: 'var(--text-muted)' }}>123 Đường ABC, Quận XYZ, TP. HCM</p>
                </div>
              </div>
              
              <div style={{ display: 'flex', gap: '1rem', marginBottom: '1.5rem' }}>
                <div style={{ background: 'var(--bg-secondary)', padding: '1rem', borderRadius: '50%', color: 'var(--primary-color)' }}>
                  <Phone size={24} />
                </div>
                <div>
                  <h4 style={{ fontWeight: 600 }}>Điện thoại</h4>
                  <p style={{ color: 'var(--text-muted)' }}>0123 456 789</p>
                </div>
              </div>
              
              <div style={{ display: 'flex', gap: '1rem', marginBottom: '1.5rem' }}>
                <div style={{ background: 'var(--bg-secondary)', padding: '1rem', borderRadius: '50%', color: 'var(--primary-color)' }}>
                  <Mail size={24} />
                </div>
                <div>
                  <h4 style={{ fontWeight: 600 }}>Email</h4>
                  <p style={{ color: 'var(--text-muted)' }}>support@keyboardshop.vn</p>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-form" style={{ background: 'var(--bg-secondary)', padding: '2rem', borderRadius: '1rem' }}>
            <h2 style={{ marginBottom: '1.5rem' }}>Gửi tin nhắn</h2>
            <form>
              <div className="form-group">
                <label>Họ tên</label>
                <input type="text" className="form-control" placeholder="Nhập họ tên của bạn" />
              </div>
              <div className="form-group">
                <label>Email</label>
                <input type="email" className="form-control" placeholder="example@gmail.com" />
              </div>
              <div className="form-group">
                <label>Nội dung</label>
                <textarea className="form-control" rows="5" placeholder="Bạn cần hỗ trợ điều gì?"></textarea>
              </div>
              <button type="button" className="btn btn-primary" style={{ width: '100%' }}>
                <Send size={18} /> Gửi tin nhắn
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
