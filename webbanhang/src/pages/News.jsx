import { Link } from 'react-router-dom';
import { news } from '../data/news';

const News = () => {
  return (
    <div className="news-page section">
      <div className="container">
        <h1 className="section-title">Tin Tức & Kiến Thức</h1>
        <p className="section-subtitle">Nơi tổng hợp những bài viết bổ ích và kinh nghiệm chơi bàn phím cơ đỉnh cao</p>
        
        <div className="product-grid">
          {news.map(item => (
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
    </div>
  );
};

export default News;
