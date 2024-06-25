import React, { createContext, useState } from 'react';
import authService from '../../../Services/authservices';
import { useNavigate } from 'react-router-dom';

// Create context
export const AuthContext = createContext();

// Create provider
 const  AuthProvider=( {children})=> {
  const [user, setUser] = useState(null);
  const navigate=useNavigate()
  const login = async (email, password) => {
    // Implement your login API call here
    
    const response=await authService.loginadmin({ email, password })
    if (response.status===200) {
      console.log(response)
      navigate('/admindashboard')
      // setUser(userData);
    } else {
      throw new Error('Failed to login');
    }
  };

  const logout = () => {
    // Implement your logout API call here if necessary
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
export default AuthProvider;
// Create a custom hook to use the AuthContext
// export function useAuth() {
//   return useContext(AuthContext);
// }
