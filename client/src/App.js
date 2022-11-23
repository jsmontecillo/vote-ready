import {useState, useEffect} from 'react';
import "./App.css";
import Layout from './components/layout';
import Locations from './components/locations';
import NavBar from './components/nav-bar';
import { Route, Routes, Link } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import Loading from './components/loading';
import Mission from './mission';
import Footer from './footer';
import Saved from './components/saved.js';
import LA from './front.jpg';
import { useTranslation } from "react-i18next";
import i18next from 'i18next'
import Fade2 from 'react-reveal/Fade';
import { Animator, ScrollContainer, ScrollPage, batch, Fade, FadeIn, FadeOut, Move, MoveIn, MoveOut, Sticky, StickyIn, StickyOut, Zoom, ZoomIn, ZoomOut } from "react-scroll-motion";

const languages = [
  {
    code: 'fr',
    name: 'Français',
    country_code: 'fr'
  },
  {
    code: 'en',
    name: 'English',
    country_code: 'gb'
  },
  {
    code: 'es',
    name: 'Español',
    country_code: 'es'
  }
];

const GlobeIcon = ({ width = 24, height = 24 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    fill="currentColor"
    className="bi bi-globe"
    viewBox="0 0 16 16"
  >
    <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm7.5-6.923c-.67.204-1.335.82-1.887 1.855A7.97 7.97 0 0 0 5.145 4H7.5V1.077zM4.09 4a9.267 9.267 0 0 1 .64-1.539 6.7 6.7 0 0 1 .597-.933A7.025 7.025 0 0 0 2.255 4H4.09zm-.582 3.5c.03-.877.138-1.718.312-2.5H1.674a6.958 6.958 0 0 0-.656 2.5h2.49zM4.847 5a12.5 12.5 0 0 0-.338 2.5H7.5V5H4.847zM8.5 5v2.5h2.99a12.495 12.495 0 0 0-.337-2.5H8.5zM4.51 8.5a12.5 12.5 0 0 0 .337 2.5H7.5V8.5H4.51zm3.99 0V11h2.653c.187-.765.306-1.608.338-2.5H8.5zM5.145 12c.138.386.295.744.468 1.068.552 1.035 1.218 1.65 1.887 1.855V12H5.145zm.182 2.472a6.696 6.696 0 0 1-.597-.933A9.268 9.268 0 0 1 4.09 12H2.255a7.024 7.024 0 0 0 3.072 2.472zM3.82 11a13.652 13.652 0 0 1-.312-2.5h-2.49c.062.89.291 1.733.656 2.5H3.82zm6.853 3.472A7.024 7.024 0 0 0 13.745 12H11.91a9.27 9.27 0 0 1-.64 1.539 6.688 6.688 0 0 1-.597.933zM8.5 12v2.923c.67-.204 1.335-.82 1.887-1.855.173-.324.33-.682.468-1.068H8.5zm3.68-1h2.146c.365-.767.594-1.61.656-2.5h-2.49a13.65 13.65 0 0 1-.312 2.5zm2.802-3.5a6.959 6.959 0 0 0-.656-2.5H12.18c.174.782.282 1.623.312 2.5h2.49zM11.27 2.461c.247.464.462.98.64 1.539h1.835a7.024 7.024 0 0 0-3.072-2.472c.218.284.418.598.597.933zM10.855 4a7.966 7.966 0 0 0-.468-1.068C9.835 1.897 9.17 1.282 8.5 1.077V4h2.355z" />
  </svg>
);

function App() {
  // const currentLanguage = languages.find((l) => l.code === currentLanguageCode)
  const { t, i18n } = useTranslation();
  const [isClicked, setClicked] = useState(false);
  const [visibility, setVisibility] = useState(false);
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  const { isLoading } = useAuth0();
  const { user } = useAuth0();
  console.log(user);
  if (isLoading) {
    return <Loading />;
  };

  return (
    <ScrollContainer>
      <div id="App" className="d-flex flex-column h-100">
        <nav className="nav-bar">
          <div className="menu" style={isClicked ? {visibility: "hidden"} : (null)} onClick={() => setClicked(!isClicked)}><div>&#9776; {t('menu').toUpperCase()}</div></div>
          <div className="title">{t('app_title')}</div>
          {!user ? <span className="welcome">{t('welcome')}!</span> : <span className="welcome">{t('hello')}, {user.given_name}.</span>}
          <div className="login"><NavBar t={t}/></div>

          <div className="dropdown">
            <button onClick={handleOpen}><GlobeIcon /><a style={{height:"10px"}}>{'\u25BC'}</a></button>
            {open ? (
              <ul className="menu">
                {languages.map(({code, name, country_code}) => {
                  return (
                    <li className="dropdown-item">
                      <span className={`flag-con flag-icon-${country_code}`}></span>
                    <button onClick={() => {i18next.changeLanguage(code); handleOpen()}}>{name}</button>
                  </li>
                  )
                })}
              </ul>
            ) : null}
          </div>
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
            <Route path="/saved" element={<Saved user={user} t={t}/>} />
        </Routes>
        <Footer t={t}/>
      </div>
    </ScrollContainer>
  );
}

export default App;
