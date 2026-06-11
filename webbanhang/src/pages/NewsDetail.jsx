import { useParams, Link } from 'react-router-dom';
import { news } from '../data/news';
import { ArrowLeft } from 'lucide-react';

const NewsDetail = () => {
  const { id } = useParams();
  const item = news.find(n => n.id === parseInt(id));

  if (!item) {
    return (
      <div className="container section" style={{ textAlign: 'center' }}>
        <h2>Bài viết không tồn tại</h2>
        <Link to="/news" className="btn btn-primary" style={{ marginTop: '1rem' }}>Quay lại tin tức</Link>
      </div>
    );
  }

  return (
    <div className="news-detail-page section">
      <div className="container">
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <Link to="/news" className="btn btn-outline" style={{ marginBottom: '2rem' }}>
            <ArrowLeft size={18} /> Quay lại
          </Link>

          <p style={{ color: 'var(--primary-color)', fontWeight: 600, marginBottom: '0.5rem' }}>{item.date}</p>
          <h1 style={{ fontSize: '2.5rem', marginBottom: '2rem' }}>{item.title}</h1>
          
          <img 
            src={item.image} 
            alt={item.title} 
            style={{ width: '100%', borderRadius: '1rem', marginBottom: '2rem', boxShadow: 'var(--shadow)' }} 
          />

          <div className="news-content" style={{ fontSize: '1.1rem', lineHeight: '1.8', color: 'var(--text-color)' }}>
            <p style={{ fontWeight: 600, marginBottom: '1.5rem' }}>{item.summary}</p>
            <div dangerouslySetInnerHTML={{ __html: item.content.replace(/\n/g, '<br/>') }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsDetail;
