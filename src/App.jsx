import { useEffect } from 'react';
import { Routes, Route, Outlet } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { onAuthStateChanged } from 'firebase/auth';
import { useDispatch, useSelector } from 'react-redux';
import { auth } from './services/firebaseConfig';
import { login, logout, selectUser } from './features/user/userSlice';
import { fetchUserInfo } from './services/user';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Team from './pages/Team';
import Profile from './pages/Profile';
import NoMatch from './pages/NoMatch';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Library from './pages/Library';
import Review from './pages/Review';
import UserHome from './pages/UserHome';
import SetPage from './pages/Set';
import Footer from './components/Footer';
import Nav from './components/Navbar';
import PublicProfile from './pages/PublicProfile';
import ProtectedRoute from './components/ProtectedRoute';
import FirebaseAuthContext from './context/FirebaseAuthContext';
import Search from './pages/Search';
import Reset from './pages/Reset';
import CreateSet from './pages/CreateSet';

const App = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    const getUserInfo = async (id) => {
      const userInfo = await fetchUserInfo(id);
      return userInfo;
    };
    const unsubscribe = onAuthStateChanged(auth, async (userAuth) => {
      if (userAuth) {
        // user is logged in, send the user's details to redux, store the current user in the state
        const userInfo = await getUserInfo(userAuth.uid);
        dispatch(
          login({
            email: userAuth.email,
            uid: userAuth.uid,
            displayName: userAuth.displayName,
            photoURL: userAuth.photoURL,
            sets: userInfo.sets,
            favSets: userInfo.favSets,
          })
        );
      } else {
        dispatch(logout());
      }
    });
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <FirebaseAuthContext>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={user ? <UserHome /> : <Home />} />
          <Route path="login" element={<Login />} />
          <Route path="reset" element={<Reset />} />
          <Route path="signup" element={<Signup />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="team" element={<Team />} />

          <Route element={<ProtectedRoute />}>
            <Route path="profile" element={<Profile />} exact />
            <Route path="library" element={<Library />} exact />
            <Route path="set/new" element={<CreateSet />} />
          </Route>

          <Route path="review" element={<Review />} />
          <Route path="set/:id" element={<SetPage />} />
          <Route path="search" element={<Search />} />
          <Route path="search/:key" element={<Search />} />
          <Route path="user/:id" element={<PublicProfile />} />
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </FirebaseAuthContext>
  );
};

const Layout = () => {
  const { i18n } = useTranslation();
  document.body.dir = i18n.dir();

  return (
    <div>
      <Nav />
      <Outlet />
      <Footer />
    </div>
  );
};
export default App;
