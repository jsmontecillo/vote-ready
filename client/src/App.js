import "./App.css";
import Students from "./components/students";
import NavBar from './components/nav-bar';
import { Route, Routes } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import Loading from './components/loading';

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
        {user ? <a>Hello From Techtonica</a> : <a>Hello {user.nickname}</a>}
        <Routes>
          <Route path="/profile" element={<Students/>} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
