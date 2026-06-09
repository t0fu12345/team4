import React from 'react';
import { Link } from 'react-router-dom';
import { products } from '../data/products';
import { news } from '../data/news';
import ProductCard from '../components/ProductCard';
import { ArrowRight } from 'lucide-react';

const Home = () => {
  const featuredProducts = products.slice(0, 4);
  const latestNews = news.slice(0, 2);

  return (
    <div className="home-page">
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1>Nâng Tầm Trải Nghiệm Gõ</h1>
            <p>Khám phá bộ sưu tập bàn phím cơ cao cấp, từ những mẫu tối giản đến những siêu phẩm RGB rực rỡ.</p>
            <Link to="/products" className="btn btn-primary btn-lg">Mua Ngay</Link>
          </div>
        </div>
      </section>

      <section className="section featured-products">
        <div className="container">
          <div className="section-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
            <h2 className="section-title" style={{ margin: 0, textAlign: 'left' }}>Sản Phẩm Nổi Bật</h2>
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
          <h2 className="section-title">Tin Tức Mới Nhất</h2>
          <div className="product-grid">
            {latestNews.map(item => (
              <div key={item.id} className="news-card" style={{ background: 'white', borderRadius: '1rem', overflow: 'hidden', border: '1px solid var(--border-color)' }}>
                <img src={item.image} alt={item.title} style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
                <div style={{ padding: '1.5rem' }}>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '0.5rem' }}>{item.date}</p>
                  <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>{item.title}</h3>
                  <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                    {item.summary}
                  </p>
                  <Link to={`/news/${item.id}`} className="btn btn-outline" style={{ width: '100%' }}>Đọc thêm</Link>
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
