import { useState } from "react";
import "./App.css";
import { UserProvider } from "./UserContext/user";
import Login from './components/Login';
import Profile from './components/Profile';

function App() {
  const [user, setUser] = useState(null)
  return (
    <>
      <UserProvider value={{user, setUser}}>
      <Login />
      <Profile/>
      </UserProvider>
    </>
  );
}

export default App;
