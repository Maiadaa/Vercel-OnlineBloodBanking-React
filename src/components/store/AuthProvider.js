import AuthContext from './authContext';

import { useState } from 'react';

const AuthProvider = (props) => {
  const [username, setUsername] = useState('');
  const [id, setID] = useState('');
  const [token, setToken] = useState('');
  const [role, setRole] = useState('');

  const authContext = {
    username: username,
    id: id,
    token: token,
    role: role,
    login: (id, username, token, role) => {
      setID(id);
      setUsername(username);
      setToken(token);
      setRole(role);
    },
    logout: () => {
      setUsername('');
      setID('');
      setToken('');
      setRole('');
    }
  };

  return (
    <AuthContext.Provider value={authContext}>
      {props.children}
    </AuthContext.Provider>
  );
};
export default AuthProvider;