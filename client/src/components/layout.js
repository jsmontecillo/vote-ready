import React from "react";
import Contests from "./contests.js";
import { BrowserRouter, Route, Link, Outlet } from "react-router-dom";
import './layout.css';
import Fade2 from 'react-reveal/Fade';
import {useState, useEffect} from 'react';

function Layout(props) {
  let t = props.t;
  const [ref, setRef] = useState([]);

  useEffect(() => {
      fetch('/election-data.json')
        .then((response) => response.json())
        .then((election) => {
          console.log(election.referendums);
          setRef(election.referendums);
        });
  }, []);
  return (
    <div className="layout">
      <Outlet />
      <div>
          <Contests user={props.user} t={t}/>
        <div style={{marginTop: "100px"}}>
          <Fade2 top cascade>
            <div>
              <h1 className="horizontal" style={{float: "right"}}>{t('referendums').toUpperCase()}</h1>
            </div>
          </Fade2>
          {ref.map((r) => {return (
            <Fade2 left>
            <div style={{textAlign: "left", margin: "10px", padding: "50px", borderRight: "solid 3px white", borderBottom: "solid 4px white", color: "#716b87"}}>
              {r.referendumText}
            </div>
            </Fade2>
          )})}
        </div>
      </div>
    </div>
  );
}

export default Layout;