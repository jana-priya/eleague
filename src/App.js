

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './Components/Navbar/Navbar';
import { Home } from './Home/Home'
import { Profile } from './Profile/Profile'
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes >
          <Route path='/' Component={Home} />
          <Route path='/profile' Component={Profile} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
