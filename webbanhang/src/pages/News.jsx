import React from 'react';
import { Link } from 'react-router-dom';
import { news } from '../data/news';

const News = () => {
  return (
    <div className="news-page section">
      <div className="container">
        <h1 className="section-title">Tin Tức & Kiến Thức</h1>
        <div className="product-grid">
          {news.map(item => (
            <div key={item.id} className="news-card" style={{ background: 'white', borderRadius: '1rem', overflow: 'hidden', border: '1px solid var(--border-color)' }}>
              <img src={item.image} alt={item.title} style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
              <div style={{ padding: '1.5rem' }}>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '0.5rem' }}>{item.date}</p>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>{item.title}</h3>
                <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem' }}>{item.summary}</p>
                <Link to={`/news/${item.id}`} className="btn btn-outline" style={{ width: '100%' }}>Đọc thêm</Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default News;
