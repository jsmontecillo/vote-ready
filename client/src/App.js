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
import Footer from './footer';
import Saved from './components/saved.js';
import Card from './components/card';
import styled from "styled-components";

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
        <div className="menu" onClick={() => setClicked(!isClicked)}>{isClicked ? (<div>X CLOSE</div>) : (<div>&#9776; MENU</div>)}</div>
        <div className="title">LA CHOOSES</div>
        {!user ? <span className="welcome">Welcome!</span> : <span className="welcome">Hello, {user.given_name}.</span>}
        <div className="login"><NavBar /></div>
        <hr style={{marginTop: "-9px"}}/>
        <hr style={{marginTop: "-10px"}}/>
        <div className="welcome">
          {!user ? <span>Welcome!</span> : <span>Hello, {user.given_name}.</span>}
        </div>
      </nav>
      <>
        <div className={`sidebar ${isClicked == true ? 'active' : ''}`}>
          <div className="sd-header">
            <div className="btn btn-primary" onClick={() => setClicked(!isClicked)}><i className="fa fa-times">X</i></div>
          </div>
          <div className="sd-body">
            <ul>
              <li><a className="sd-link"><Link to="/" className="link">HOME</Link></a></li>
              <li><a className="sd-link"><Link to="/mission" className="link">MISSION</Link></a></li>
              <li><a className="sd-link"><Link to="/locations" className="link">LOCATIONS</Link></a></li>
              <li><a className="sd-link"><Link to="/feedback" className="link">FEEDBACK</Link></a></li>
              {user ? (<li><a className="sd-link"><Link to="/saved" className="link">YOUR SAVED</Link></a></li>) : (null)}
            </ul>
          </div>
        </div>
        <div className={`sidebar-overlay ${isClicked == true ? 'active' : ''}`} onClick={() => setClicked(!isClicked)}></div>
      </>
      <Routes>
          <Route path="/" element={<Layout user={user}/>} />
          <Route path="/locations" element={<Locations user={user}/>} />
          <Route path="/profile" element={<Profile user={user}/>} />
          <Route path="/mission" element={<Mission user={user}/>} />
          <Route path="feedback" element={<Feedback user={user}/>} />
          <Route path="/saved" element={<Saved user={user}/>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
