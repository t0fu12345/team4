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
        <div className="news-detail-container">
          <Link to="/news" className="btn btn-outline" style={{ marginBottom: '2.5rem' }}>
            <ArrowLeft size={18} /> Quay lại
          </Link>

          <p className="news-detail-date">{item.date}</p>
          <h1>{item.title}</h1>
          
          <img src={item.image} alt={item.title} />

          <div className="news-content">
            <p>{item.summary}</p>
            <div dangerouslySetInnerHTML={{ __html: item.content.replace(/\n/g, '<br/>') }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsDetail;
