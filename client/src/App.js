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
import LA from './front.jpg';
import Fade2 from 'react-reveal/Fade';
import { Animator, ScrollContainer, ScrollPage, batch, Fade, FadeIn, FadeOut, Move, MoveIn, MoveOut, Sticky, StickyIn, StickyOut, Zoom, ZoomIn, ZoomOut } from "react-scroll-motion";

function App() {
  const [isClicked, setClicked] = useState(false);
  const [visibility, setVisibility] = useState(false);
  const { isLoading } = useAuth0();
  const { user } = useAuth0();
  console.log(user);
  if (isLoading) {
    return <Loading />;
  }

  return (
    <ScrollContainer>
    <div id="App" className="d-flex flex-column h-100">
      <nav className="nav-bar">
        <div className="menu" onClick={() => setClicked(!isClicked)}>{isClicked ? (null) : (<div>&#9776; MENU</div>)}</div>
        <div className="title">LA CHOOSES</div>
        {!user ? <span className="welcome">Welcome!</span> : <span className="welcome">Hello, {user.given_name}.</span>}
        <div className="login"><NavBar /></div>
      </nav>
      <ScrollPage page={0}>
        <Animator animation={batch(Fade(), MoveOut(0, -400))}>
          <div className="contain">
            <img src={LA} style={{width: "100%", objectFit: "cover"}}/>
            <Fade2 top>
                <p className="center" style={{marginTop: "-30px"}}>Keep track of your votes.</p>
                <h1 className="center">Vote Ready: LA</h1>
            </Fade2>
          </div>
        </Animator>
      </ScrollPage>
      <>
        <div className={`sidebar ${isClicked == true ? 'active' : ''}`}>
          <div className="sd-header">
            <div className="btn btn-primary" onClick={() => {setClicked(!isClicked)}}><i className="fa fa-times">X</i></div>
          </div>
          <div className="sd-body">
            <ul>
              <li><a className="sd-link" onClick={() => {setClicked(!isClicked)}}><Link to="/" className="link">HOME</Link></a></li>
              <li><a className="sd-link" onClick={() => {setClicked(!isClicked)}}><Link to="/mission" className="link">MISSION</Link></a></li>
              <li><a className="sd-link" onClick={() => {setClicked(!isClicked)}}><Link to="/locations" className="link">LOCATIONS</Link></a></li>
              <li><a className="sd-link" onClick={() => {setClicked(!isClicked)}}><Link to="/feedback" className="link">FEEDBACK</Link></a></li>
              {user ? (<li><a className="sd-link" onClick={() => {setClicked(!isClicked)}}><Link to="/saved" className="link">YOUR SAVED</Link></a></li>) : (null)}
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
    </ScrollContainer>
  );
}

export default App;
