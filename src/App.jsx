import React, { useState } from 'react';
import './App.css';

// Import komponen
import Header from './components/Header/Header';
import UserCard from './components/UserCard/UserCard';
import ProductList from './components/ProductList/ProductList';
import Button from './components/Button/Button';

function App() {
  // State untuk data user yang login
  const [currentUser] = useState({
    name: 'Admin',
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face&auto=format",
    role: "admin"
  });

  // State untuk data users
  const [users, setUsers] = useState([
    {
      id: 1,
      name: 'Annam Fiziki',
      email: 'ahmed@example.com',
      role: 'Admin',
      avatar: '/user.png',
      isActive: true,
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
    },
    {
      id: 2,
      name: 'Sari Dexi',
      email: 'sari@example.com',
      role: 'User',
      avatar: '/user.png',
      isActive: true,
      avatar: 'https://randomuser.me/api/portraits/women/2.jpg',
    },
    {
      id: 3,
      name: 'Budi Santoso',
      email: 'budi@example.com',
      role: 'Moderator',
      avatar: '/user.png',
      isActive: false,
        avatar: 'https://randomuser.me/api/portraits/men/3.jpg',
    },
  ]);

  // State untuk data products
  const [products, setProducts] = useState([
    {
      id: 1,
      name: 'Laptop ASUS Vivobook',
      price: 4500000,
      category: 'Electronics',
      image: '/laptop.png',
      stock: 5,
      image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=300&h=200&fit=crop',
    },
    {
      id: 2,
      name: 'Smartphone Samsung A54',
      price: 4200000,
      category: 'Electronics',
      image: '/phone.png',
      stock: 0,
      image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=300&h=200&fit=crop',
    },
    {
      id: 3,
      name: 'Buku Pemrograman React',
      price: 150000,
      category: 'Books',
      image: '/book.png',
      stock: 10,
      image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=300&h=200&fit=crop',
    },
    {
      id: 4,
      name: 'Mouse Wireless Logitech',
      price: 350000,
      category: 'Electronics',
      image: '/mouse.png',
      stock: 15,
      image: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=300&h=200&fit=crop',
    },
  ]);

  // Handler functions
  const handleEditUser = (userId) => {
    alert(`Edit user dengan ID: ${userId}`);
  };

  const handleDeleteUser = (userId) => {
    setUsers(users.filter((user) => user.id !== userId));
  };

  const handleAddToCart = (product) => {
    console.log('Added to cart:', product);
  };

  const handleAddNewUser = () => {
    const newUser = {
      id: users.length + 1,
      name: `User Baru ${users.length + 1}`,
      email: `user${users.length + 1}@example.com`,
      role: 'User',
      avatar: '/user.png',
      isActive: true,
    };
    setUsers([...users, newUser]);
  };

  const handleAddNewProduct = () => {
    const newProduct = {
      id: products.length + 1,
      name: `Produk Baru ${products.length + 1}`,
      price: Math.floor(Math.random() * 1000000) + 100000,
      category: 'Other',
      image: '/others.png',
      stock: Math.floor(Math.random() * 20),
    };
    setProducts([...products, newProduct]);
  };

  return (
    <div className="App">
      {/* Header Component dengan props */}
      <Header
        title="Demo Komponen React dengan Props"
        subtitle="Pemrograman Web Modern - Pertemuan 3"
        user={currentUser}
      />

      <main className="App-main">
        {/* Section Users */}
        <section className="section">
          <div className="section-header">
            <h2>Manajemen Pengguna ({users.length} users)</h2>
            <Button variant="success" onClick={handleAddNewUser}>
              + Tambah User
            </Button>
          </div>

          <div className="users-grid">
            {users.map((user) => (
              <UserCard
                key={user.id}
                user={user}
                onEdit={handleEditUser}
                onDelete={handleDeleteUser}
              />
            ))}
          </div>
        </section>

        {/* Section Products */}
        <section className="section">
          <div className="section-header">
            <h2>Daftar Produk</h2>
            <Button variant="primary" onClick={handleAddNewProduct}>
              + Tambah Produk
            </Button>
          </div>

          <ProductList products={products} onAddToCart={handleAddToCart} />
        </section>
      </main>
    </div>
  );
}

export default App;
