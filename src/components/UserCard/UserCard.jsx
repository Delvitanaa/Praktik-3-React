import React from 'react';
import Button from '../Button/Button'; // perbaikan path relatif
import './UserCard.css';

function UserCard({ user, onEdit, onDelete }) {
  if (!user) return null;

  // Destructuring user object dengan nilai default
  const {
    id,
    name = 'Pengguna Tidak Dikenal',
    email = 'Tidak ada email',
    role = 'User',
    avatar = '/default-avatar.png',
    isActive = true,
  } = user;

  return (
    <div className={`user-card ${!isActive ? 'inactive' : ''}`}>
      <div className="user-avatar">
        <img src={avatar} alt={`${name} avatar`} />
        {isActive && <span className="status-indicator"></span>}
      </div>

      <div className="user-info">
        <h3 className="user-name">{name}</h3>
        <p className="user-email">{email}</p>
        <span className={`user-role user-role-${role.toLowerCase()}`}>
          {role}
        </span>
      </div>

      <div className="user-actions">
        <Button
          variant="secondary"
          size="small"
          onClick={() => onEdit?.(id)}
        >
          Edit
        </Button>
        <Button
          variant="secondary"
          size="small"
          onClick={() => onDelete?.(id)}
        >
          Delete
        </Button>
      </div>
    </div>
  );
}

export default UserCard;
