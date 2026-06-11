import { products } from '../data/products';
import ProductCard from '../components/ProductCard';

const Products = () => {
  return (
    <div className="products-page section">
      <div className="container">
        <div style={{ marginBottom: '3rem', textAlign: 'center' }}>
          <h1 className="section-title">Danh Sách Sản Phẩm</h1>
          <p style={{ color: 'var(--text-muted)' }}>Tìm chiếc bàn phím hoàn hảo cho góc làm việc của bạn.</p>
        </div>

        <div className="product-grid">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
