import "./App.css";
import Layout from './components/layout';
import Locations from './components/locations';
import NavBar from './components/nav-bar';
import { Route, Routes, Link } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import Loading from './components/loading';
import Profile from './components/profile';

function App() {
  const { isLoading } = useAuth0();
  const { user } = useAuth0();
  console.log(user);
  if (isLoading) {
    return <Loading />;
  }
  return (
    <div id="App" className="d-flex flex-column h-100">
      <NavBar />
      <div className="container flex-grow-1">
        {!user ? <span>Welcome!</span> : <span>Hello, {user.given_name}.</span>}
      </div>
      <Routes>
          <Route path="/" element={<Layout user={user}/>} />
          <Route path="/locations" element={<Locations/>} />
          <Route path="/profile" element={<Profile user={user}/>} />
      </Routes>
    </div>
  );
}

export default App;
