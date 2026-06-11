import Header from './Header';
import Footer from './Footer';
import CartDrawer from './CartDrawer';

const Layout = ({ children }) => {
  return (
    <div className="app-wrapper">
      <Header />
      <main className="main-content">
        {children}
      </main>
      <Footer />
      <CartDrawer />
    </div>
  );
};

export default Layout;

