import { Link } from 'react-router-dom';
import { products } from '../data/products';
import { news } from '../data/news';
import ProductCard from '../components/ProductCard';
import { ArrowRight, Sparkles } from 'lucide-react';

const Home = () => {
  const featuredProducts = products.slice(0, 4);
  const latestNews = news.slice(0, 2);

  return (
    <div className="home-page">
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(139, 92, 246, 0.1)', border: '1px solid rgba(139, 92, 246, 0.2)', padding: '0.5rem 1rem', borderRadius: '50px', marginBottom: '1.5rem', fontSize: '0.85rem', fontWeight: '700', color: 'var(--primary-color)' }}>
              <Sparkles size={14} /> KIỆT TÁC CƠ HỌC TRÊN BÀN LÀM VIỆC
            </div>
            <h1>Nâng Tầm Trải Nghiệm Gõ Phím</h1>
            <p>Khám phá bộ sưu tập bàn phím cơ đỉnh cao tinh tế và đẳng cấp. Khơi nguồn cảm hứng sáng tạo đột phá trong từng phím bấm.</p>
            <div className="hero-actions">
              <Link to="/products" className="btn btn-primary btn-lg">Mua Ngay</Link>
              <Link to="/news" className="btn btn-outline btn-lg">Tìm Hiểu Thêm</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section featured-products">
        <div className="container">
          <div className="section-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '3rem' }}>
            <div>
              <h2 className="section-title" style={{ margin: 0, textAlign: 'left' }}>Sản Phẩm Nổi Bật</h2>
              <p style={{ color: 'var(--text-muted)', marginTop: '0.5rem' }}>Tuyển chọn những thiết kế bàn phím cơ ấn tượng nhất</p>
            </div>
            <Link to="/products" className="btn btn-outline">
              Xem tất cả <ArrowRight size={18} />
            </Link>
          </div>
          <div className="product-grid">
            {featuredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      <section className="section latest-news" style={{ backgroundColor: 'var(--bg-secondary)' }}>
        <div className="container">
          <h2 className="section-title">Tin Tức & Kiến Thức</h2>
          <p className="section-subtitle">Cập nhật xu hướng, kiến thức chọn switch và đánh giá sản phẩm mới nhất từ chuyên gia</p>
          
          <div className="product-grid">
            {latestNews.map(item => (
              <div key={item.id} className="news-card">
                <img src={item.image} alt={item.title} />
                <div className="news-info">
                  <p className="news-date">{item.date}</p>
                  <h3 className="news-title">{item.title}</h3>
                  <p className="news-summary">{item.summary}</p>
                  <Link to={`/news/${item.id}`} className="btn btn-outline" style={{ marginTop: 'auto', width: '100%' }}>Đọc thêm</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
