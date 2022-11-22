import {useState} from 'react';
import "./App.css";
import Layout from './components/layout';
import Locations from './components/locations';
import NavBar from './components/nav-bar';
import { Route, Routes, Link } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import Loading from './components/loading';
import Mission from './mission';
import Feedback from './components/feedback';
import Footer from './footer';
import Saved from './components/saved.js';
import LA from './front.jpg';
import { useTranslation } from "react-i18next";
import Fade2 from 'react-reveal/Fade';
import { Animator, ScrollContainer, ScrollPage, batch, Fade, FadeIn, FadeOut, Move, MoveIn, MoveOut, Sticky, StickyIn, StickyOut, Zoom, ZoomIn, ZoomOut } from "react-scroll-motion";

function App() {
  const { t, i18n } = useTranslation();
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
        <div className="menu" onClick={() => setClicked(!isClicked)}>{isClicked ? (null) : (<div>&#9776; {t('menu').toUpperCase()}</div>)}</div>
        <div className="title">{t('app_title')}</div>
        {!user ? <span className="welcome">{t('welcome')}!</span> : <span className="welcome">{t('hello')}, {user.given_name}.</span>}
        <div className="login"><NavBar t={t}/></div>
      </nav>
      <ScrollPage page={0}>
        <Animator animation={batch(Fade(), MoveOut(0, -400))}>
          <div className="contain">
            <img src={LA} style={{width: "100%", objectFit: "cover"}}/>
            <Fade2 top>
                <p className="center" style={{marginTop: "-30px"}}>{t('votes')}</p>
                <h1 className="center">{t('site')}</h1>
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
              <li><a className="sd-link hover-underline-animation" onClick={() => {setClicked(!isClicked)}}><Link to="/" className="link">{t('home').toUpperCase()}</Link></a></li>
              <li><a className="sd-link hover-underline-animation" onClick={() => {setClicked(!isClicked)}}><Link to="/mission" className="link">{t('mission').toUpperCase()}</Link></a></li>
              <li><a className="sd-link hover-underline-animation" onClick={() => {setClicked(!isClicked)}}><Link to="/locations" className="link">{t('locations').toUpperCase()}</Link></a></li>
              <li><a className="sd-link hover-underline-animation" onClick={() => {setClicked(!isClicked)}}><Link to="/feedback" className="link">{t('feedback').toUpperCase()}</Link></a></li>
              {user ? (<li><a className="sd-link hover-underline-animation" onClick={() => {setClicked(!isClicked)}}><Link to="/saved" className="link">{t('saved').toUpperCase()}</Link></a></li>) : (null)}
            </ul>
          </div>
        </div>
        <div className={`sidebar-overlay ${isClicked == true ? 'active' : ''}`} onClick={() => setClicked(!isClicked)}></div>
      </>
      <Routes>
          <Route path="/" element={<Layout user={user} t={t}/>} />
          <Route path="/locations" element={<Locations user={user} t={t}/>} />
          <Route path="/mission" element={<Mission user={user} t={t}/>} />
          <Route path="/feedback" element={<Feedback user={user} t={t}/>} />
          <Route path="/saved" element={<Saved user={user} t={t}/>} />
      </Routes>
    <Footer t={t}/>
    
    </div>
    </ScrollContainer>
  );
}

export default App;
