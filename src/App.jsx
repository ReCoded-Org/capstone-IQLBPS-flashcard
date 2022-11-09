import { Routes, Route, Outlet } from 'react-router-dom';

import { useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { useDispatch, useSelector } from 'react-redux';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Team from './pages/Team';
import Profile from './pages/Profile';
import NoMatch from './pages/NoMatch';
import Footer from './components/Footer';
import Login from './pages/Login';
import Nav from './components/Navbar';
import Signup from './pages/Signup';
import Library from './pages/Library';
import Review from './pages/Review';
import UserHome from './pages/UserHome';
import { login, logout, selectUser } from './features/user/userSlice';
import { auth } from './services/firebaseConfig';

const App = () => {

  // eslint-disable-next-line no-unused-vars
  const dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChanged(auth, (userAuth) => {
      if (userAuth) {
        // user is logged in, send the user's details to redux, store the current user in the state
        dispatch(
          login({
            email: userAuth.email,
            uid: userAuth.uid,
            displayName: userAuth.displayName,
            photoUrl: userAuth.photoURL,
          })
        );
        
      } else {
        dispatch(logout());
      }
    });
  }, []);


  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
        <Route path="user-history" element={<UserHome />} />
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

  const user = useSelector(selectUser);

  return (
    <div>
      <Nav />
     { 
     (user ? <UserHome/> : <Outlet />  )
     
     }
      
      <Footer />
    </div>
  );
};
export default App;
