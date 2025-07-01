import React, { useEffect, useState } from 'react';
import axios from 'axios';

const UserList = () => {
  const [listOfUser, setListOfUser] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        setListOfUser(response.data);
        setLoading(false);
      })
      .catch(err => {
        setError('Erreur lors du chargement des utilisateurs.');
        setLoading(false);
      });
  }, []);

  if (loading) return <div style={styles.loading}>Chargement...</div>;
  if (error) return <div style={styles.error}>{error}</div>;

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Liste des utilisateurs</h2>
      <ul style={styles.list}>
        {listOfUser.map(user => (
          <li key={user.id} style={styles.listItem}>
            <span style={styles.name}>{user.name}</span>
            <span style={styles.email}>{user.email}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '500px',
    margin: '40px auto',
    padding: '24px',
    background: '#fff',
    borderRadius: '12px',
    boxShadow: '0 2px 16px rgba(0,0,0,0.08)',
    fontFamily: 'Segoe UI, sans-serif',
  },
  title: {
    textAlign: 'center',
    color: '#333',
    marginBottom: '24px',
  },
  list: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
  },
  listItem: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '12px 0',
    borderBottom: '1px solid #eee',
  },
  name: {
    fontWeight: 500,
    color: '#222',
  },
  email: {
    color: '#888',
    fontSize: '0.95em',
  },
  loading: {
    textAlign: 'center',
    marginTop: '40px',
    color: '#888',
  },
  error: {
    textAlign: 'center',
    marginTop: '40px',
    color: '#c00',
  },
};

export default UserList; 