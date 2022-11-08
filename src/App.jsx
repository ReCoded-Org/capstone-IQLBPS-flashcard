import { Routes, Route, Outlet } from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Team from './pages/Team';
import Profile from './pages/Profile';
import NoMatch from './pages/NoMatch';
import Login from './pages/Login';
import Nav from './components/Navbar';
import Signup from './pages/Signup';
import Library from './pages/Library';
import Review from './pages/Review';
import UserHome from './pages/UserHome';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
        <Route path="user-history" element={<UserHome />} />{' '}
        {/* TODO: fix this later */}
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="team" element={<Team />} />
        <Route path="profile" element={<Profile />} />
        <Route path="library" element={<Library />} />
        <Route path="review" element={<Review />} />
        <Route path="*" element={<NoMatch />} />
      </Route>
    </Routes>
  );
};

const Layout = () => {
  return (
    <div>
      <Nav />
      <Outlet />
      <Footer />
    </div>
  );
};
export default App;
