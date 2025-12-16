import React from 'react';
import './ProductList.css';

// Komponen ProductItem (komponen internal)
function ProductItem({ product, onAddToCart }) {
  if (!product) return null;

  const {
    id,
    name = 'Produk Tanpa Nama',
    price = 0,
    category = 'Umum',
    image = '/default-product.png',
    stock = 0,
  } = product;

  return (
    <div className="product-item">
      <div className="product-image">
        <img src={image} alt={name} loading="lazy" />
        {stock === 0 && <div className="out-of-stock">Habis</div>}
      </div>

      <div className="product-info">
        <span className="product-category">{category}</span>
        <h4 className="product-name">{name}</h4>
        <p className="product-price">
          Rp {price.toLocaleString('id-ID')}
        </p>
      </div>

      <button
        className={`add-to-cart-btn ${stock === 0 ? 'disabled' : ''}`}
        onClick={() => onAddToCart(product)}
        disabled={stock === 0}
      >
        {stock === 0 ? 'Stok Habis' : 'Tambah ke Keranjang'}
      </button>
    </div>
  );
}

// Komponen utama ProductList
function ProductList({ products = [], onAddToCart }) {
  if (products.length === 0) {
    return (
      <div className="product-list-empty">
        <p>Tidak ada produk tersedia</p>
      </div>
    );
  }

  return (
    <div className="product-list">
      <h2>Daftar Produk ({products.length} item)</h2>
      <div className="products-grid">
        {products.map((product) => (
          <ProductItem
            key={product.id || product.name}
            product={product}
            onAddToCart={onAddToCart}
          />
        ))}
      </div>
    </div>
  );
}

export default ProductList;
