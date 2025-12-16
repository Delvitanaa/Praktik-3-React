// Header.jsx
import React from 'react';
import './Header.css';

function Header({ title, subtitle, user }) {
  // Fungsi untuk generate avatar placeholder berdasarkan nama
  const getAvatarPlaceholder = (name) => {
    const initials = name ? name.charAt(0).toUpperCase() : 'U';
    const colors = ['#3498db', '#e74c3c', '#27ae60', '#9b59b6', '#f39c12'];
    const colorIndex = initials.charCodeAt(0) % colors.length;
    
    return (
      <div 
        className="avatar-placeholder"
        style={{ 
          backgroundColor: colors[colorIndex],
          width: '32px',
          height: '32px',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          fontWeight: 'bold',
          fontSize: '14px'
        }}
      >
        {initials}
      </div>
    );
  };

  return (
    <header className="app-header">
      <div className="header-content">
        <div className="header-text">
          <h1 className="header-title">{title}</h1>
          {subtitle && <p className="header-subtitle">{subtitle}</p>}
        </div>

        {user && (
          <div className="user-info">
            <span className="user-greeting">Hello, {user.name}</span>
            {user.avatar ? (
              <img
                src={user.avatar}
                alt={user.name || 'User Avatar'}
                className="user-avatar"
              />
            ) : (
              getAvatarPlaceholder(user.name)
            )}
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;