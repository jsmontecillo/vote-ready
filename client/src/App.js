import {useState} from 'react';
import "./App.css";
import Layout from './components/layout';
import Locations from './components/locations';
import NavBar from './components/nav-bar';
import { Route, Routes, Link } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import Loading from './components/loading';
import Profile from './components/profile';
import Mission from './mission';
import Feedback from './components/feedback';

function App() {
  const [isClicked, setClicked] = useState(false);
  const { isLoading } = useAuth0();
  const { user } = useAuth0();
  console.log(user);
  if (isLoading) {
    return <Loading />;
  }
  return (
    <div id="App" className="d-flex flex-column h-100">
      <nav className="nav-bar">
        {isClicked ? (<><Link to="/" className="link">HOME</Link>
        <Link to="/mission" className="link">MISSION</Link>
        <Link to="/locations" className="link">LOCATIONS</Link>
        <Link to="/feedback" className="link">FEEDBACK</Link></>) : (null)}
        <div className="menu" onClick={() => setClicked(!isClicked)}>{isClicked ? (<div>X CLOSE</div>) : (<div>&#9776; MENU</div>)}</div>
        <NavBar />
        {user ? (<Link to="/profile" className="link">YOUR PROFILE</Link>) : (null)}
      </nav>
      <div className="container flex-grow-1 welcome">
          {!user ? <span>Welcome!</span> : <span>Hello, {user.given_name}.</span>}
      </div>
      <Routes>
          <Route path="/" element={<Layout user={user}/>} />
          <Route path="/locations" element={<Locations user={user}/>} />
          <Route path="/profile" element={<Profile user={user}/>} />
          <Route path="/mission" element={<Mission user={user}/>} />
          <Route path="feedback" element={<Feedback user={user}/>} />
      </Routes>
    </div>
  );
}

export default App;
