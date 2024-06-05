import { useContext, useEffect, useState } from "react";
import { createContext } from "react";
import { getUser } from "../../services/auth/authServices";

export const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();

  function signup(email, password) {
    return createUserWithEmailAndPassword(auth, email, password);
  }

  function login(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }

  function logout() {
    return signOut(auth);
  }

  function resetUserPassword(email) {
    return sendPasswordResetEmail(auth, email);
  }

  function updateUserEmail(email) {
    return updateEmail(currentUser, email);
  }

  function updateUserPassword(password) {
    return updatePassword(currentUser, password);
  }

  const [role, setRole] = useState();

  const handleGetUser = async (userId) => {
    await getUser().then((user) => {
      setRole(user.role);
      setCurrentUser(user);
    });
  };

  useEffect(() => {
    handleGetUser("demoUserId");
  }, []);

  const value = {
    currentUser,
    role,
    login,
    signup,
    logout,
    resetUserPassword,
    updateUserEmail,
    updateUserPassword,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
